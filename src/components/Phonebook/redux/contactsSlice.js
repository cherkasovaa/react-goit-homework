import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactInitialState = [
  { id: '1', name: 'alina', number: '123456' },
  { id: '2', name: 'polina', number: '123456' },
  { id: '3', name: 'kristina', number: '123456' },
  { id: '4', name: 'pall', number: '123456' },
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name: name,
            number: number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const idx = state.findIndex(contact => contact.id === action.payload);
      state.splice(idx, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
