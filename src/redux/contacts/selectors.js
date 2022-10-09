import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.filter;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
        if (filter !== '') {
    const normalizedContactName = filter.toLocaleLowerCase();
    const filtered = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedContactName));
    return filtered;
  }
    return contacts;
});