import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { editUser, logInUser, logOutUser, refreshUser, registerUser } from './operations';

const handleRejected = (state, action) => {
  state.error = action.payload;
}

const userInitialState = {
  name: null,
  email: null,
  birthday: null,
  phone: null,
  skype: null,
  avatarURL: null,
}

const initialState = {
  user: userInitialState,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

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
      .addCase(registerUser.fulfilled, handleFulfilled)
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
        // state.user.email = action.payload.email;
        // state.user.name = action.payload.name;
        // state.user.skype = action.payload.skype;
        // state.user.birthday = action.payload.birthday;
        // state.user.phone = action.payload.phone;
        // state.user.avatarURL = action.payload.avatarURL;
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(refreshUser.rejected, handleRejected)
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
