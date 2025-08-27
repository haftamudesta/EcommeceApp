import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import {type User, type UserSchema } from '../types/UserSchema';


const initialState: UserSchema = {
  userData: undefined,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
        setUserData:(state,action:PayloadAction<User>)=>{
                state.userData=action.payload
        },
        clearUserData:(state)=>{
                state.userData=undefined
        }
  },
})

export const {actions:UserActions } = userSlice;
export const {reducer:UserReducer } = userSlice;

