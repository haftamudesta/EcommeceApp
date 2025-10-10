import type {
  EnhancedStore,
  Reducer,
  ReducersMapObject,
  UnknownAction,
} from "@reduxjs/toolkit";

import type { LoginFormSchema } from "@/features/login";
import type { RegistrationFormSchema } from "@/features/regiseter";
import type { AuthByGoogleSchema } from "@/features/authByGoogle";

import type { UserSchema } from "@/entities/users";
import type { baseAPI } from "@/shared/api";

export interface StateSchema {
  user: UserSchema;
  loginForm?: LoginFormSchema;
  [baseAPI.reducerPath]: ReturnType<typeof baseAPI.reducer>;
  registerForm?: RegistrationFormSchema;
  authByGoogle: AuthByGoogleSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  getMountedReducers: () => Partial<Record<StateSchemaKey, boolean>>;
  reduce: (
    state: StateSchema | undefined,
    action: UnknownAction
  ) => StateSchema;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}