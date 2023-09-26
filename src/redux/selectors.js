import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter.filter;
export const selectIsAdding = state => state.contacts.isAdding;
export const selectisFetching = state => state.contacts.isFetching;
export const selectisDeleting = state => state.contacts.isDeleting;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (allContacts, filter) => {
    return allContacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  }
);
