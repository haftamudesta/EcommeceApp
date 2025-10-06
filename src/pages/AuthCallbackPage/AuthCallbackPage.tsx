import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams, useNavigate } from "react-router";

import { PageErrors } from "@/widgets/pageError";
import { PageLoader } from "@/widgets/pageLoader";

import {
  selectAuthByGoogleError,
  selectAuthByGoogleIsLoading,
} from "@/features/authByGoogle";
// import { exchangeCode } from "@/features/authByGoogle/model/services/exchangeCode/exchangeCode";
import { exchangeCode } from "@/features/authByGoogle/model/services/exchangeCode";

import { selectUserData } from "@/entities/users";

import { useAppDispatch, useAppSelector } from "@/shared/lib";

const AuthCallbackPage = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const code = searchParams.get("code");
  const errorParam = searchParams.get("error");

  const authError = useAppSelector(selectAuthByGoogleError);
  const isLoading = useAppSelector(selectAuthByGoogleIsLoading);
  const userData = useAppSelector(selectUserData);

  const hasStarted = useRef(false);

  useEffect(() => {
    if (import.meta.env.VITE_PROJECT_ENV !== "storybook") {
      if (!code || hasStarted.current || errorParam) return;

      hasStarted.current = true;
      dispatch(exchangeCode(code));
    }
  }, [code, errorParam, dispatch]);

  useEffect(() => {
    if (userData && !isLoading && !authError) {
      navigate("/", { replace: true });
    }
  }, [userData, isLoading, authError, navigate]);

  if (errorParam) {
    const errorMessage = t(`errors.${errorParam}`, {
      defaultValue: t("errors.GOOGLE_AUTH_FAILED"),
    });
    return <PageErrors  error={errorMessage} />;
  }

  if (!code) {
    return <PageErrors error={t("errors.GOOGLE_CODE_INVALID")} />;
  }

  if (authError) {
    return <PageErrors error={authError} />;
  }

  return <PageLoader />;
};

export default AuthCallbackPage;