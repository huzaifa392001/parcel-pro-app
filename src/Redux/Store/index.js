import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from "./Slices/Auth/index";
import generalReducer from "./Slices/General/index"
import orderReducer from "./Slices/Order/index"

const persistConfig = {
  key: 'parcelProConnect-mobileApp',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  general: generalReducer,
  order: orderReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // thunk: {},
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);