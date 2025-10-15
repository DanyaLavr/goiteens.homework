import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Form from "./assets/components/form/Form";
import Contactslist from "./assets/components/contactsList/ContactsList";
import Finder from "./assets/components/finder/Finder";
import { useEffect } from "react";
import { getContacts } from "./redux/selectors";
import { useSelector } from "react-redux";
import { appState } from "./redux/constants";

function App() {
  const contacts = useSelector(getContacts);
  // const [contacts, setContacts] = useState(appState.contacts);
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(e.target);
    const id = nanoid();
    const contact = { id };

    for (let [key, value] of formData.entries()) {
      contact[key] = value.trim();
    }
    if (checkIsRegistered(contact)) {
      alert("Такий контакт вже існує");
      return;
    }
    setContacts((prev) => [...prev, contact]);
    form.reset();
  };
  const deleteContact = (id) => {
    setContacts(contacts.filter((elem) => elem.id !== id));
  };
  const filterContacts = (key) => {
    setFilteredContacts(contacts.filter((elem) => elem.name.includes(key)));
  };
  useEffect(() => {
    filterContacts("");
  }, [contacts]);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <Form handleSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Finder filterContacts={filterContacts} contacts={contacts} />
      <Contactslist contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
