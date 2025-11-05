import "./App.css";
import Form from "./assets/components/form/Form";
import Contactslist from "./assets/components/contactsList/ContactsList";
import Finder from "./assets/components/finder/Finder";

function App() {
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Finder />
      <Contactslist />
    </div>
  );
}

export default App;
