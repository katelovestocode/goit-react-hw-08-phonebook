import { createSlice } from '@reduxjs/toolkit';

const contactsIntialState = { array: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsIntialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.array.push(action.payload);
      },
    },
    removeContact(state, action) {
      const index = state.array.findIndex(
        contact => contact.id === action.payload
      );
      state.array.splice(index, 1);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
