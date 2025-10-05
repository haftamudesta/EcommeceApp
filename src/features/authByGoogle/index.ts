import { selectAuthByGoogleError } from "./model/selectors/selectAuthByGoogleError/selectAuthByGoogleError";
import { selectAuthByGoogleIsLoading } from "./model/selectors/selectAuthByGoogleLoading/selectAuthByGoogleLoading";
import { authByGoogleReducer } from "./model/slice/authByGoogle";
import type { AuthByGoogleSchema } from "./model/types/AuthByGoogle";
import { AuthByGoogleButton } from "./ui/AuthByGoogleButton";

export type { AuthByGoogleSchema };
export {
  authByGoogleReducer,
  AuthByGoogleButton,
  selectAuthByGoogleError,
  selectAuthByGoogleIsLoading,
};