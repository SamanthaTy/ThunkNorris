import { configureStore } from "@reduxjs/toolkit";
import jokeReducer from './reducer/jokeReducer'

const store=configureStore({reducer:jokeReducer})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store