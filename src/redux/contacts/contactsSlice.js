import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    error: null,
    isFetching: false,
    isAdding: false,
    isDeleting: false,
    contactId: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isFetching = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isFetching = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isFetching = false;
      state.error = action.payload;
    },

    [addContact.pending](state) {
      state.isAdding = true;
    },
    [addContact.fulfilled](state, action) {
      state.isAdding = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isAdding = false;
      state.error = action.payload;
    },

    [deleteContact.pending](state) {
      state.isDeleting = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isDeleting = false;
      state.error = null;
      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.isDeleting = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
