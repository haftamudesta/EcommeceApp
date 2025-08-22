import { configureStore,type ThunkDispatch,type UnknownAction} from '@reduxjs/toolkit';
import logger from 'redux-logger'
import type { StateSchema } from './StateSchema';


export const createStore=(initialState?:StateSchema)=>{
        return configureStore<StateSchema>({
                preloadedState:initialState,
                reducer: {
                        middleware: (getDefaultMiddleware) =>
                        getDefaultMiddleware().concat(logger),
                        devtool:true,
                },
        })
}

export type AppDispatch = ThunkDispatch<StateSchema,unknown,UnknownAction>