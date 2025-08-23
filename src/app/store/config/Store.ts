import { configureStore,type ThunkDispatch,type UnknownAction} from '@reduxjs/toolkit';
import type { StateSchema } from './StateSchema';
import { UserReducer } from '@/entities/users';


export const createStore=(initialState?:StateSchema)=>{
        return configureStore<StateSchema>({
                preloadedState:initialState,
                reducer: {
                      user:UserReducer,  
                },
                middleware: (getDefaultMiddleware) =>
                        getDefaultMiddleware(),
                        devTools:true,
        })
}

export type AppDispatch = ThunkDispatch<StateSchema,unknown,UnknownAction>