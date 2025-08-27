import { LOCAL_STORAGE_USER_KEY } from "@/shared/config";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserActions } from "@/entities/users";

type loginArgs={
        email?:string,
        phone?:string,
        password?:string,

}

export const Login=createAsyncThunk<void,loginArgs>("features/login",async(authData,thunkApi)=>{
        try {
               const res=await axios.post("http://localhost:3000/auth/login",authData)
               const user=res.data;
               localStorage.setItem(LOCAL_STORAGE_USER_KEY,JSON.stringify(user));
               thunkApi.dispatch(UserActions.setUserData(user));
               //eslint-disable-next-line
        } catch (error) {
             return thunkApi.rejectWithValue("Log in error")
        }
})