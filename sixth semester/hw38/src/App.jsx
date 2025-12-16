import "./App.css";
import Form from "./assets/components/form/Form";
import ContactsList from "./assets/components/contactsList/ContactsList";
import Finder from "./assets/components/finder/Finder";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/operations";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Finder />
      <ContactsList />
    </div>
  );
}

export default App;
