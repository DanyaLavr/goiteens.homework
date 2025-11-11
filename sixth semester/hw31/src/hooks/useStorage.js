export const useStorage = (key) => {
  const setStorage = (contacts) =>
    localStorage.setItem(key, JSON.stringify(contacts));
  const getStorage = () => JSON.parse(localStorage.getItem(key));
  return [setStorage, getStorage];
};
