import type { UnknownAction } from "@reduxjs/toolkit";

import { LOCAL_STORAGE_USER_KEY } from "@/shared/config";

import { UserActions } from "../../slices/UserSlice";
import type { User } from "../../types/UserSchema";

export const applyUserSession = (
  user: User,
  dispatch: (action: UnknownAction) => unknown
) => {
  localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
  dispatch(UserActions.setUserData(user));
};