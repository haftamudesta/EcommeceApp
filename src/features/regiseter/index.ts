import type{ RegistrationFormSchema } from "./model/types/RegisterSchema";
import { registerReducer } from "./model/slice/RegistrationSlice";
import RegistrationForm from "./ui/registrationForm/RegistrationForm";

export type {RegistrationFormSchema}
export {RegistrationForm,registerReducer}