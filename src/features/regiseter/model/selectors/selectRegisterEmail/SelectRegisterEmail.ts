import type { StateSchema } from "@/app/store";

export const selectRegisterEmail=(state:StateSchema)=>state.regiserForm?.email??"";