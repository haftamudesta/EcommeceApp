import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { selectRegisterStep,FormSteps,type FormStepsType } from "@/features/regiseter";
import styles from "./RegistrationPage.module.scss";
import {
  DynamicModuleLoader,
  useAppDispatch,
  useAppSelector,
} from "@/shared/lib";
import { registerActions,registerReducer,
  RegistrationForm, } from "@/features/regiseter";
  import { AppIcon, Button } from "@/shared/ui";
  import ArrowLeft from "@/shared/assets/icons/ArrowLeft.svg?react";
  import { routePaths } from "@/shared/config";

const STEP_TITLES: Record<FormStepsType, string> = {
  [FormSteps.CREDENTIALS]: "register.credentials.title",
  [FormSteps.PASSWORD]: "register.password.title",
  [FormSteps.VERFICATION]: "register.verification.title",
} as const;

const RegisterPage = () => {
  const { t } = useTranslation("auth");
  const step = useAppSelector(selectRegisterStep);
  const dispatch = useAppDispatch();
  const handleGoBackClick = () => {
    dispatch(registerActions.resetForm());
    dispatch(registerActions.setStep(FormSteps.CREDENTIALS));
  };
  const isCredentialsStep = step === FormSteps.CREDENTIALS;

  const title = step ? STEP_TITLES[step] : STEP_TITLES[FormSteps.CREDENTIALS];
  return (
    <div className={styles.wrapper}>
    <div className={styles.main}>
      <DynamicModuleLoader
      reducers={{ registerForm: registerReducer }}
      removeAfterUnmount
      >
        {!isCredentialsStep && (
            <Button
              onClick={handleGoBackClick}
              size="md"
              theme = "outline"
            >
              <AppIcon Icon={ArrowLeft} />
            </Button>
          )}
          <h1 className={styles.title}>{t(title)}</h1>
          <RegistrationForm />
          {isCredentialsStep && (
            <>
              <div className={styles.divider}>
                <div className={styles.line} />
                <span className={styles.dividerText}>{t("or")}</span>
                <div className={styles.line} />
              </div>
              <div className={styles.authServices}>
                <Button size="md" fullWidth>Auth by Google</Button>
              </div>
              <span className={styles.footer}>
                {t("register.alreadyHaveAccount")}{" "}
                <Link className={styles.link} to={routePaths.login}>
                  {t("login.signIn")}
                </Link>
              </span>
            </>
          )}
      </DynamicModuleLoader>
      
    </div>
    </div>
  )
}

export default RegisterPage