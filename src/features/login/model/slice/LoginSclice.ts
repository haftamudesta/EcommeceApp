import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import {type LoginFormSchema } from '../types/LoginSchema';
import { AuthMethods,type AuthMethodsType } from '@/shared/config';


const initialState: LoginFormSchema = {
  email:"",
  phone:"",
  password:"",
  isLoading:false,
  error:undefined,
  method:AuthMethods.EMAIL,
}

export const loginSlice = createSlice({
  name: 'loginForm',
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
        }
  },
})

export const {actions:loginActions } = loginSlice;
export const {reducer:loginReducer } = loginSlice;

