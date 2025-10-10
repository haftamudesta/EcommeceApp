import { configureStore, type ThunkDispatch, type UnknownAction } from '@reduxjs/toolkit';

import type { StateSchema } from './StateSchema';
import { UserReducer } from '@/entities/users';
import {type DeepPartial } from '@/shared/lib';
import {type ReducersMapObject } from '@reduxjs/toolkit';
import {type ReduxStoreWithManager } from './StateSchema';

import { createReducerManager } from './ReducerManager';
import { authByGoogleReducer } from "@/features/authByGoogle";
import { baseAPI } from "@/shared/api";



export const createStore = (
  initialState?: StateSchema,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
): ReduxStoreWithManager => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    user: UserReducer,
    authByGoogle: authByGoogleReducer,
    [baseAPI.reducerPath]: baseAPI.reducer,
    ...(asyncReducers as Partial<ReducersMapObject<StateSchema>>),
  }
   const reducerManager = createReducerManager(rootReducer);

  const store = configureStore({
    preloadedState: initialState,
    reducer: (state, action) => {
      return reducerManager.reduce(state ?? ({} as StateSchema), action);
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseAPI.middleware),
    devTools: true,
  }) as ReduxStoreWithManager;

  store.reducerManager = reducerManager;

  return store;
  };

export type AppDispatch = ThunkDispatch<StateSchema,unknown,UnknownAction>

