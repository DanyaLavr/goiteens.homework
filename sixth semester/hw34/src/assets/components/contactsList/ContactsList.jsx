import { useDispatch, useSelector } from "react-redux";

import { getContacts, getFilter } from "../../../redux/selectors";
import { deleteContact } from "../../../redux/operations";

export default function Contactslist() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter((elem) =>
    elem.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name} - {number}
          </p>
          <button onClick={() => dispatch(deleteContact(id))}> Delete</button>
        </li>
      ))}
    </ul>
  );
}
