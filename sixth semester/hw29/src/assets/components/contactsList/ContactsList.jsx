import { useDispatch } from "react-redux";
import { removeContact } from "../../../redux/actions";

export default function Contactslist({ contacts }) {
  const dispatch = useDispatch();
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
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
