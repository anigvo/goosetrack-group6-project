import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './auth/authSlice';
import { themeReducer } from './theme/slice';
import { tasksReducer } from './tasks/tasksSlice';

const middlewares = {
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
};

const reducers = combineReducers({
  theme: themeReducer,
  auth: authReducer,
  tasks: tasksReducer
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware(middlewares),
});

export const persistor = persistStore(store);
