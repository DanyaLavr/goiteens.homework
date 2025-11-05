export const addContact = ({ id, name, number }) => {
  return {
    type: "contacts/addContact",
    payload: {
      id,
      name,
      number,
    },
  };
};
export const removeContact = (id) => {
  return {
    type: "contacts/removeContact",
    payload: id,
  };
};
export const setFilter = (val) => {
  return {
    type: "filter/setFilter",
    payload: val,
  };
};
