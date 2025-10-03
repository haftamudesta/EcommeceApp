import type { StateSchema } from "@/app/store";

export const selectRegisterStep=(state:StateSchema)=>state.regiserForm?.step??"";