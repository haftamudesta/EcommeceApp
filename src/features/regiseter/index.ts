import { selectRegisterStep } from "./model/selectors/SelectRegistration/SelectRegistrationStep";
import type{ RegistrationFormSchema,FormStepsType } from "./model/types/RegisterSchema";
import { registerReducer } from "./model/slice/RegistrationSlice";
import RegistrationForm from "./ui/registrationForm/RegistrationForm";
import {FormSteps} from "./model/types/RegisterSchema";
import { registerActions } from "./model/slice/RegistrationSlice";

export type {RegistrationFormSchema, FormStepsType}
export {RegistrationForm,registerReducer,selectRegisterStep,registerActions,FormSteps}