import type { FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

import {cn, useAppDispatch,useAppSelector } from "@/shared/lib"
import { selectRegisterEmail } from "@/features/regiseter/model/selectors/selectRegisterEmail/SelectRegisterEmail";
import { selectRegisterPhone } from "@/features/regiseter/model/selectors/selectRegisterPhone/SelectRegisterPhone";
import { selectRegisterIsLoading } from "@/features/regiseter/model/selectors/selectRegisterLoading/SelectRegisterIsLoading";
import { registerActions } from "@/features/regiseter/model/slice/RegistrationSlice";
import { selectRegisterPassword } from "@/features/regiseter/model/selectors/SelectRegisterPassword/SelectRegisterPassword";

import { AppIcon, Button, Input} from "@/shared/ui";
import ArrowRight from "@/shared/assets/icons/ArrowRight.svg?react";
import CheckIcon from "@/shared/assets/icons/Check.svg?react";
import { passwordRequirements } from "@/features/regiseter/config/passwordRequirements";
import { Register } from "@/features/regiseter/model/services/Register";

import styles from "./CreatePasswordStep.module.scss";


const CreatePasswordStep = () => {
        const dispatch=useAppDispatch();
        const { t } = useTranslation('auth');

        const [validationError, setValidationError] = useState(false);

        const email = useAppSelector(selectRegisterEmail);
        const password = useAppSelector(selectRegisterPassword);
        const phone = useAppSelector(selectRegisterPhone);
        const isLoading = useAppSelector(selectRegisterIsLoading);
        

         const handleChangePassword = (value: string) => {
    dispatch(registerActions.setPassword(value));

    const isValid = passwordRequirements.every((requirement) =>
      requirement.test(value)
    );

    if (!isValid) {
      setValidationError(true);
    } else {
      setValidationError(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validationError) {
      dispatch(Register({ email, phone, password }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        disabled={isLoading}
        label={t("register.password.title")}
        type="password"
        className={styles.input}
        placeholder={t("register.password.enterPassword")}
        onChange={handleChangePassword}
        value={password}
      />
      <div className={styles.requirementsList}>
        {passwordRequirements.map((requirement) => {
          const isMet = requirement.test(password);
          return (
            <div key={requirement.key} className={styles.requirement}>
              <AppIcon
                size={16}
                className={cn(styles.requirementIcon, {
                  [styles.met]: isMet,
                })}
                Icon={CheckIcon}
              />
              <span className={styles.requirementText}>
                {t(requirement.key)}
              </span>
            </div>
          );
        })}
      </div>
      <Button
        className={styles.button}
        disabled={validationError}
        isLoading={isLoading}
        type="submit"
        fullWidth
        size="md"
      >
        {t("register.continueButton")}
        <AppIcon Icon={ArrowRight} />
      </Button>
    </form>
  )
}

export default CreatePasswordStep