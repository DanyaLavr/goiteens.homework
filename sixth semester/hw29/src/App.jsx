import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Form from "./assets/components/form/Form";
import Contactslist from "./assets/components/contactsList/ContactsList";
import Finder from "./assets/components/finder/Finder";
import { useEffect } from "react";
import { getContacts } from "./redux/selectors";
import { useSelector } from "react-redux";

function App() {
  const contacts = useSelector(getContacts);

  const [filteredContacts, setFilteredContacts] = useState(contacts);

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
      <Contactslist contacts={filteredContacts} />
    </div>
  );
}

export default App;
