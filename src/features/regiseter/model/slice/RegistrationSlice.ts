import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import {type RegistrationFormSchema,FormSteps } from '../types/RegisterSchema';
import { AuthMethods,type AuthMethodsType } from '@/shared/config';




const initialState: RegistrationFormSchema = {
  email:"",
  phone:"",
  password:"",
  isLoading:false,
  error:undefined,
  steps:FormSteps.CREDENTIALS,
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
        resetForm:(state)=>{
                state.email="";
                state.phone="";
                state.password="";
                state.error=undefined;
        },
  },
  extraReducers: (builder) => {
  },
})

export const {actions:registerActions } = registerSlice;
export const {reducer:registerReducer } = registerSlice;

