import { useAppSelector } from "@/shared/lib";
import { selectRegisterStep } from "../../model/selectors/SelectRegistration/SelectRegistrationStep";
import { FormSteps } from "../../model/types/RegisterSchema";
import { CredentialStep } from "./steps/credentialsStep/CredentialStep";
import CreatePasswordStep from "./steps/createPasswordStep/CreatePasswordStep";
import VerficationStep from "./steps/verificationStep/VerficationStep";
const RegistrationForm = () => {
   const step = useAppSelector(selectRegisterStep);
  return (
    <main>
      {step===FormSteps.CREDENTIALS &&  <CredentialStep/>}
      {step===FormSteps.PASSWORD && <CreatePasswordStep/>}
      {step===FormSteps.VERFICATION && <VerficationStep />}
    </main>
  )
}

export default RegistrationForm