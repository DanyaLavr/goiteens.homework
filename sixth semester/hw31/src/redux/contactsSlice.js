import { createSlice } from "@reduxjs/toolkit";
import { CONTACTS } from "./constants";
import { useStorage } from "../hooks/useStorage";

const [_, getStorage] = useStorage("contacts");
const contactsSlice = createSlice({
  name: "contacts",
  initialState: getStorage() || CONTACTS,
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
