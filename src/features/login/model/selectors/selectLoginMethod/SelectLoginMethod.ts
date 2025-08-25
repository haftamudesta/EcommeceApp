import type { StateSchema } from "@/app/store";
import { AuthMethods } from "@/shared/config";

export const selectLoginMethod=(state:StateSchema)=>state.loginForm.method??AuthMethods.EMAIL;