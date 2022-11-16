import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import authReducer from './Auth/auth-slice';
import { dailyRateReducer } from './Daily-rate/daily-rate-slice';
const persistConfig = {
  key: 'notes',
  storage,
  blacklist: ['user', 'status'],
};
const persistedRegistrReducer = persistReducer(persistConfig, authReducer);
export const rootReducer = combineReducers({
  auth: persistedRegistrReducer,
  dailyRate: dailyRateReducer,
});
