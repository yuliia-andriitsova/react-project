import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import authReducer from './Auth/auth-slice';
import { dailyRateReducer } from './Daily-rate/daily-rate-slice';
import productReducer from './Product-search/product-search-slice.js';
import daySummaryReducer from './Day/day-slice';
const persistConfig = {
  key: 'notes',
  storage,
  blacklist: ['user', 'status'],
};
const persistedRegistrReducer = persistReducer(persistConfig, authReducer);
export const rootReducer = combineReducers({
  auth: persistedRegistrReducer,
  dailyRate: dailyRateReducer,
  products: productReducer,
  daySummary: daySummaryReducer,
});
