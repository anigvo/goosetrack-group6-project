import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { editUser, logInUser, logOutUser, refreshUser, registerUser } from './operations';
import { userInitialState, initialState, handleRejected, handlePending } from './constants';
import toast from 'react-hot-toast';
import { CgProfile } from 'react-icons/cg';

const handleFulfilled = (state, action) => {
  state.token = action.payload.token;
  state.user = action.payload.user;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.error = null;
  state.isLoadingAuth = false;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user.email = action.payload.user.email;
        state.user.name = action.payload.user.name;
        state.isLoadingAuth = false;
      })
      .addCase(registerUser.rejected, handleRejected)
      .addCase(logInUser.pending, handlePending)
      .addCase(logInUser.fulfilled, handleFulfilled)
      .addCase(logInUser.rejected, handleRejected)
      .addCase(logOutUser.pending, handlePending)
      .addCase(logOutUser.fulfilled, state => {
        state.user = userInitialState;
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.isLoadingAuth = false;
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
      .addCase(editUser.pending, handlePending)
      .addCase(editUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoadingAuth = false;
        toast.success('Profile was updated successfully', {
          icon: <CgProfile size={24} color='#3CBC81' />,
          style: {
            padding: '10px',
            fontSize: 18,
            boxShadow: 'none',
            border: '1px solid rgba(220, 227, 229, 0.80)'
          }
        });
      })
      .addCase(editUser.rejected, handleRejected)
  }
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const {setToken} = authSlice.actions;

export const authReducer = persistReducer(authPersistConfig, authSlice.reducer);
