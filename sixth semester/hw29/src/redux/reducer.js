import { appState } from "./constants";

export const rootReducer = (state = appState, action) => {
  switch (action.type) {
    case "contacts/addContact":
      return { ...state, contacts: [...state.contacts, action.payloud] };
    case "contacts/deleteContact":
      return {
        ...state,
        contacts: state.contacts.filter((elem) => elem.id !== action.payloud),
      };
    case "filter/setFilter":
      return { ...state, filter: action.payloud };
    default:
      return state;
  }
};
