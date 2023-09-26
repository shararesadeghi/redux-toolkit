import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import counterReducer from '../features/counter/counterSlice';
import numberReducer from '../features/number/numberSlice';

import logger from 'redux-logger';

const store = configureStore({
    reducer:{counter:counterReducer, number:numberReducer},
    middelware : (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),
});

export default store;