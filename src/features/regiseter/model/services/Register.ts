import { httpClient,extractErrorMessage } from "@/shared/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerActions } from "../slice/RegistrationSlice";
import { FormSteps } from "../types/RegisterSchema";


type RegisterArgs={
        email?:string;
        phone?:string;
        password:string;
}

export const Register=createAsyncThunk<void,RegisterArgs,{rejectValue: string}>("features/register", async (authData,thunkAPI)=>{
        try {
                await httpClient.post("/auth/register",authData);
                thunkAPI.dispatch(registerActions.setStep(FormSteps.VERFICATION))
        } catch (error) {
              thunkAPI.dispatch(registerActions.setStep(FormSteps.CREDENTIALS));
              return thunkAPI.rejectWithValue(extractErrorMessage(error)) 
        }
})