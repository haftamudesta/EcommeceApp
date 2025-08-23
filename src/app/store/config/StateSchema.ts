import type { UserSchema } from "@/entities/users";
import type { LoginFormSchema } from "@/features/login";

export interface StateSchema{
      user:UserSchema,
      loginForm: LoginFormSchema
}