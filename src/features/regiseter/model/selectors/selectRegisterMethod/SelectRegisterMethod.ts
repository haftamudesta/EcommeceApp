import type { StateSchema } from "@/app/store";
import { AuthMethods } from "@/shared/config";

export const selectRegisterMethod=(state:StateSchema)=>state.regiserForm?.method??AuthMethods.EMAIL;