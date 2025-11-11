import { createSlice } from "@reduxjs/toolkit";
import { CONTACTS } from "./constants";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: CONTACTS,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },
    removeContact: {
      reducer(state, action) {
        return state.filter((elem) => elem.id !== action.payload);
      },
    },
  },
});
export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
