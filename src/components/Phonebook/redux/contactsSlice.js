import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const actions = [fetchContacts, addContact, deleteContact];

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const idx = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(idx, 1);
      })
      .addMatcher(
        isAnyOf(...actions.map(action => action.pending)),
        handlePending
      )
      .addMatcher(
        isAnyOf(...actions.map(action => action.fulfilled)),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(...actions.map(action => action.rejected)),
        handleRejected
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
