import type { FormEvent } from "react";
import { useTranslation } from "react-i18next";

import { useAppDispatch,useAppSelector } from "@/shared/lib"
import { selectRegisterEmail } from "@/features/regiseter/model/selectors/selectRegisterEmail/SelectRegisterEmail";
import { selectRegisterPhone } from "@/features/regiseter/model/selectors/selectRegisterPhone/SelectRegisterPhone";
import { selectRegisterIsLoading } from "@/features/regiseter/model/selectors/selectRegisterLoading/SelectRegisterIsLoading";
import { selectRegisterMethod } from "@/features/regiseter/model/selectors/selectRegisterMethod/SelectRegisterMethod";
import { selectRegisterError } from "@/features/regiseter/model/selectors/selectRegisterError/SelectRegisterError";
import { registerActions } from "@/features/regiseter/model/slice/RegistrationSlice";
import styles from "./CredentialStep.module.scss";
import { AuthMethods } from "@/shared/config";
import { FormSteps } from "@/features/regiseter/model/types/RegisterSchema";
import { AppIcon, Button, Input, PhoneInput, Tabs } from "@/shared/ui";
import ArrowRight from "@/shared/assets/icons/ArrowRight.svg?react";
import Mail from "@/shared/assets/icons/Mail.svg?react";
import Phone from "@/shared/assets/icons/Phone.svg?react";

export const CredentialStep = () => {
        const dispatch=useAppDispatch();
        const { t } = useTranslation('auth');

        const email = useAppSelector(selectRegisterEmail);
        const phone = useAppSelector(selectRegisterPhone);
        const isLoading = useAppSelector(selectRegisterIsLoading);
        const method = useAppSelector(selectRegisterMethod);
        const error = useAppSelector(selectRegisterError);

        const handleChangeEmail = (value: string) => {
    dispatch(registerActions.setEmail(value));
  };

  const handleChangePhone = (value: string) => {
    dispatch(registerActions.setPhone(value));
  };
  const handleTabChange = () => {
    dispatch(
      registerActions.setMethod(
        method === AuthMethods.EMAIL ? AuthMethods.PHONE : AuthMethods.EMAIL
      )
    );
    dispatch(registerActions.resetForm());
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerActions.setStep(FormSteps.PASSWORD));
  };
  return (
    <div>
        <form onSubmit={handleSubmit} className={styles.form}>
      <Tabs onChange={handleTabChange} defaultValue={method}>
        <Tabs.List>
          <Tabs.Trigger value={AuthMethods.EMAIL}>
            <AppIcon Icon={Mail} /> {t("register.credentials.email")}
          </Tabs.Trigger>
          <Tabs.Trigger value={AuthMethods.PHONE}>
            <AppIcon Icon={Phone} />
            {t("register.credentials.phone")}
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value={AuthMethods.EMAIL}>
          <Input
            disabled={isLoading}
            error={!!error}
            label={t("register.credentials.email")}
            type="email"
            onChange={handleChangeEmail}
            value={email}
            placeholder={t("register.credentials.enterEmail")}
          />
        </Tabs.Content>
        <Tabs.Content value={AuthMethods.PHONE}>
          <PhoneInput
            disabled={isLoading}
            error={!!error}
            label={t("register.credentials.phone")}
            onChange={handleChangePhone}
            value={phone}
          />
        </Tabs.Content>
      </Tabs>
      {error && <div className={styles.error}>{error}</div>}
      <Button
        className={styles.button}
        isLoading={isLoading}
        type="submit"
        fullWidth
        size="md"
      >
        {t("register.continueButton")}
        <AppIcon Icon={ArrowRight} />
      </Button>
    </form>
    </div>
  )
}
