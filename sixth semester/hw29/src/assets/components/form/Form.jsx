import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../../redux/actions";
const checkIsRegistered = ({ name, number }) => {
  return contacts.some((elem) => elem.name === name || elem.number === number);
};
export default function Form({ handleSubmit }) {
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const id = nanoid();
    const contact = { id };

    for (let [key, value] of formData.entries()) {
      contact[key] = value.trim();
    }

    // if (checkIsRegistered(contact)) {
    //   alert("Такий контакт вже існує");
    //   return;
    // }
    dispatch(addContact(contact));
    // setContacts((prev) => [...prev, contact]);
    form.reset();
  };
  return (
    <form action="" onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <input
        type="tel"
        name="number"
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button>Add</button>
    </form>
  );
}
