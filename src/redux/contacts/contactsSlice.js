import { addContact, getContacts, removeContact } from './contactsOperations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  contacts: {
    items: [{ name: '', number: '' }],
    filter: '',
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterInput(state, { payload }) {
      state.contacts.filter = payload;
    },
  },
  extraReducers: {
    [removeContact.fulfilled](state, { payload }) {
      state.contacts.items = state.contacts.items.filter(
        el => el.id !== payload
      );
    },
    [getContacts.fulfilled](state, { payload }) {
      state.contacts.items = payload;
    },
    [addContact.fulfilled](state, { payload }) {
      state.contacts.items = [...state.contacts.items, payload];
    },
  },
});
export const { filterInput } = contactsSlice.actions;
export default contactsSlice.reducer;
