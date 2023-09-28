import { THEME } from './constants';
import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  value: THEME.LIGHT,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.value = action.payload;
    },
  },
});

const persistConfigTheme = {
  key: 'theme',
  storage,
  whitelist: ['value'],
};

export const { setTheme } = themeSlice.actions;
export const themeReducer = persistReducer(
  persistConfigTheme,
  themeSlice.reducer
);
