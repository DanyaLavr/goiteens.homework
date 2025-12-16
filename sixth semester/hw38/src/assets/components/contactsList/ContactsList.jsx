import { useDispatch, useSelector } from "react-redux";

import { selectFilteredContacts } from "../../../redux/selectors";
import { addCall, deleteContact } from "../../../redux/operations";
import CallsList from "../callsList/CallsList";

import styles from "./contactsList.module.css";
export default function ContactsList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul>
      {filteredContacts.map(({ id, name, number, calls }) => (
        <li key={id}>
          <div className={styles.contact}>
            <p>
              {name} - {number}
            </p>
            <button onClick={() => dispatch(addCall(id))}>Call</button>
            <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
          </div>
          {calls?.length !== 0 && <CallsList contactId={id} ids={calls} />}
        </li>
      ))}
    </ul>
  );
}
