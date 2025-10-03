import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import {type RegistrationFormSchema,FormSteps,type FormStepsType } from '../types/RegisterSchema';
import { AuthMethods,type AuthMethodsType } from '@/shared/config';
import { Register } from '../services/Register';




const initialState: RegistrationFormSchema = {
  email:"",
  phone:"",
  password:"",
  isLoading:false,
  error:undefined,
  step:FormSteps.CREDENTIALS,
  method:AuthMethods.EMAIL,
}

export const registerSlice = createSlice({
  name: 'registerForm',
  initialState,
  reducers: {
        setEmail:(state,action:PayloadAction<string>)=>{
                state.email=action.payload
        },
        setPassword:(state,action:PayloadAction<string>)=>{
                state.password=action.payload
        },
        setPhone:(state,action:PayloadAction<string>)=>{
                state.phone=action.payload
        },
        setMethod:(state,action:PayloadAction<AuthMethodsType>)=>{
                state.method=action.payload
        },
        setStep:(state,action:PayloadAction<FormStepsType>)=>{
                state.step=action.payload
        },
        resetForm:(state)=>{
                state.email="";
                state.phone="";
                state.password="";
                state.error=undefined;
        },
  },
  extraReducers: (builder) => {
        builder
        .addCase(Register.pending,(state)=>{
                state.isLoading=true;
        })
        .addCase(Register.fulfilled,(state)=>{
                state.isLoading=false;
        })
        .addCase(Register.rejected,(state,action)=>{
                state.isLoading=false;
                state.error=action.payload as string || "Login failed";
        })
  },
})

export const {actions:registerActions } = registerSlice;
export const {reducer:registerReducer } = registerSlice;

