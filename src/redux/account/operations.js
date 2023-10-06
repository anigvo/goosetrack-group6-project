import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { publicApi, privateApi } from 'api';

axios.defaults.baseURL = 'https://backend-goosetrack.onrender.com';

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/contacts');
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );



// export const signUp = createAsyncThunk(
//   'auth/signUp',
//   async ({ userName, email, password }, thunkAPI) => {
//     try {
//       const response = await publicApi.post('/api/auth/register', {
//         userName,
//         email,
//         password,
//       });
//       return response.data.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue({
//         message: error.response.data.message,
//         code: error.response.status,
//       });
//     }
//   }
// );

// export const signIn = createAsyncThunk(
//   'auth/signIn',
//   async ({ email, password }, thunkAPI) => {
//     try {
//       const response = await publicApi.post('/api/auth/login', {
//         email,
//         password,
//       });
//       return response.data.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue({
//         message: error.response.data.message,
//         code: error.response.status,
//       });
//     }
//   }
// );

// export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
//   try {
//     await privateApi.post('/api/auth/logout');
//   } catch (error) {
//     return thunkAPI.rejectWithValue({
//       message: error.response.data.message,
//       code: error.response.status,
//     });
//   }
// });

export const getUserData = createAsyncThunk(
  'user/current',
  async (_, thunkAPI) => {
    try {
        const response = await axios.get('/user/current');
        
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        code: error.response.status,
      });
    }
  }
);

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/contacts');
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
//   try {
//     const response = await refreshApi.post('/api/auth/refresh');
//     console.log('refresh', response);
//     return response.data.data;
//   } catch (error) {
//     console.log(thunkAPI.rejectWithValue(error.message));
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

export const updateAvatar = createAsyncThunk(
  'user/avatar',
  async (formData, thunkAPI) => {
    try {
      const response = await axios.patch('/api/auth/avatar', formData);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editData = createAsyncThunk(
  'user/edit',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.patch('/user/edit', credentials);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
