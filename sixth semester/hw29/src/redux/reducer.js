import { appState } from "./constants";

export const rootReducer = (state = appState, action) => {
  switch (action.type) {
    case "contacts/addContact":
      return { ...state, contacts: [...state.contacts, action.payload] };
    case "contacts/removeContact":
      return {
        ...state,
        contacts: state.contacts.filter((elem) => elem.id !== action.payload),
      };
    case "filter/setFilter":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};
