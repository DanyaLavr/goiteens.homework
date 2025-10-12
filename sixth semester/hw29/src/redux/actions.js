export const addContact = ({ id, name, number }) => {
  return {
    type: "contacts/addContact",
    payloud: {
      id,
      name,
      number,
    },
  };
};
export const removeContact = (id) => {
  return {
    type: "contacts/removeContact",
    payloud: id,
  };
};
export const setFilter = (val) => {
  return {
    type: "filter/setFilter",
    payloud: val,
  };
};
