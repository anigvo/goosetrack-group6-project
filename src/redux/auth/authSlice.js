import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { editUser, logInUser, logOutUser, refreshUser, registerUser } from './operations';
import { userInitialState, initialState, handleRejected } from './constants';

const handleFulfilled = (state, action) => {
  state.token = action.payload.token;
  state.user.email = action.payload.user.email;
  state.user.name = action.payload.user.name;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.error = null;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user.email = action.payload.user.email;
        state.user.name = action.payload.user.name;
      })
      .addCase(registerUser.rejected, handleRejected)
      .addCase(logInUser.fulfilled, handleFulfilled)
      .addCase(logInUser.rejected, handleRejected)
      .addCase(logOutUser.fulfilled, state => {
        state.user = userInitialState;
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(logOutUser.rejected, handleRejected)
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(editUser.rejected, handleRejected)
  }
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(authPersistConfig, authSlice.reducer);
