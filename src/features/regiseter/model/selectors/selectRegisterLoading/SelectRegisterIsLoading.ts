import type { StateSchema } from "@/app/store";

export const selectRegisterIsLoading=(state:StateSchema)=>state.regiserForm?.isLoading;