import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import { useAppDispatch,useAppSelector } from "@/shared/lib"
import { selectRegisterEmail } from "@/features/regiseter/model/selectors/selectRegisterEmail/SelectRegisterEmail";
import { selectRegisterPhone } from "@/features/regiseter/model/selectors/selectRegisterPhone/SelectRegisterPhone";
import { selectRegisterIsLoading } from "@/features/regiseter/model/selectors/selectRegisterLoading/SelectRegisterIsLoading";
import { selectRegisterError } from "@/features/regiseter/model/selectors/selectRegisterError/SelectRegisterError";
import styles from "./VerficationStep.module.scss";
import { Button } from "@/shared/ui";
import { routePaths } from "@/shared/config";
import { verifyCode } from "@/features/regiseter/model/services/verifyCode";
import { resendCode } from "@/features/regiseter/model/services/resendCode";
import { Spinner } from "@/shared/ui";
import { OTPInput } from "@/shared/ui/input/OTPInput/OTPInput";


const VerficationStep = () => {
  const { t } = useTranslation("auth");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const email = useAppSelector(selectRegisterEmail);
  const phone = useAppSelector(selectRegisterPhone);
  const error = useAppSelector(selectRegisterError);
  const isLoading = useAppSelector(selectRegisterIsLoading);

  const onSubmit = async (code: string) => {
    const result = await dispatch(verifyCode({ email, phone, code }));
    if (verifyCode.fulfilled.match(result)) {
      navigate(routePaths.home);
    }
  };

  const handleResend = () => {
    dispatch(resendCode({ email, phone }));
  };
  return (
    <>
      <form className={styles.form}>
        <div className={styles.title}>
          {t("register.verification.sentTo")} <br />
          <span>{email || phone}</span>
        </div>
        <OTPInput disabled={isLoading} error={!!error} onComplete={onSubmit} />
        {error && <div className={styles.error}>{error}</div>}
        {isLoading && (
          <div className={styles.wrapper}>
            <Spinner size="md" theme="primary" />
          </div>
        )}
      </form>
      <div className={styles.resendCodeText}>
        <span>{t("register.verification.codeNotReceived")}</span>
        <Button
          onClick={handleResend}
          disabled={isLoading}
          className={styles.resendCodeButton}
          theme="ghost"
        >
          {t("register.verification.resend")}
        </Button>
      </div>
    </>
  )
}

export default VerficationStep