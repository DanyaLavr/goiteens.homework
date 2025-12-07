import { useDispatch, useSelector } from "react-redux";

import {
  selectContacts,
  selectFilter,
  selectFilteredContacts,
} from "../../../redux/selectors";
import { deleteContact } from "../../../redux/operations";

export default function ContactsList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectFilter);

  // const filteredContacts = contacts.filter((elem) =>
  //   elem.name.toLowerCase().includes(filter.toLowerCase())
  // );

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
