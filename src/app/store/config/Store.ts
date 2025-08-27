import { configureStore,type ThunkDispatch,type UnknownAction} from '@reduxjs/toolkit';

import type { StateSchema } from './StateSchema';
import { UserReducer } from '@/entities/users';
import { loginReducer } from '@/features/login';

import logger from 'redux-logger'
import type { StateSchema } from './StateSchema';



export const createStore=(initialState?:StateSchema)=>{
        return configureStore<StateSchema>({
                preloadedState:initialState,
                reducer: {

                      user:UserReducer,
                      loginForm:loginReducer, 
                },
                middleware: (getDefaultMiddleware) =>
                        getDefaultMiddleware(),
                        devTools:true,

                        middleware: (getDefaultMiddleware) =>
                        getDefaultMiddleware().concat(logger),
                        devtool:true,
                },
        })
}

export type AppDispatch = ThunkDispatch<StateSchema,unknown,UnknownAction>