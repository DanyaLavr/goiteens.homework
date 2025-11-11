import { useDispatch, useSelector } from "react-redux";

import { removeContact } from "../../../redux/contactsSlice";
import { getContacts, getFilter } from "../../../redux/selectors";
import { useEffect } from "react";
import { useStorage } from "../../../hooks/useStorage";
export default function Contactslist() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const [setStorage, _] = useStorage("contacts");
  const filteredContacts = contacts.filter((elem) =>
    elem.name.toLowerCase().includes(filter.toLowerCase())
  );
  useEffect(() => {
    setStorage(contacts);
  }, [contacts]);
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name} - {number}
          </p>
          <button onClick={() => dispatch(removeContact(id))}> Delete</button>
        </li>
      ))}
    </ul>
  );
}
