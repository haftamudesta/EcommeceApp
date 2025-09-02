import { createAsyncThunk } from "@reduxjs/toolkit";

import { httpClient } from "@/shared/api/axios/HttpClient";
import { LOCAL_STORAGE_USER_KEY } from "@/shared/config";

import { UserActions } from "../../slices/UserSlice";
import type { User } from "../../types/UserSchema";

export const refreshSession = createAsyncThunk<
  void,
  void,
  { rejectValue: string }
>("user/refreshSession", async (_, thunkApi) => {
  try {
    const res = await httpClient.post<User>("/auth/refresh");
    const user = res.data;
    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
    thunkApi.dispatch(UserActions.setUserData(user));
    return;
    // eslint-disable-next-line
  } catch (error) {
    thunkApi.dispatch(UserActions.clearUserData());
    return thunkApi.rejectWithValue("refresh error");
  }
});