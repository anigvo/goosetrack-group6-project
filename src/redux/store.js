import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
  persistReducer,
} from 'redux-persist';
import { themeReducer } from './theme/slice';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';

const middleware = {
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  }
}

const persistConfigTheme = {
  key: 'theme',
  storage,
  whitelist: ['value']
}

const reducers = combineReducers({
  theme: persistReducer(persistConfigTheme, themeReducer),
  auth: authReducer,
})

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware(middleware)
});

export const persistor = persistStore(store);
