import { useDispatch, useSelector } from "react-redux";
import { makeSelectCallsForContact } from "../../../redux/selectors";

import styles from "./callsList.module.css";
import { deleteCall } from "../../../redux/operations";
export default function CallsList({ contactId, ids }) {
  const calls = useSelector(makeSelectCallsForContact(ids));
  const dispatch = useDispatch();
  const getDate = (time) => {
    return new Date(time).toLocaleString();
  };
  return (
    <>
      <h4>History of calls</h4>
      <ul>
        {calls?.map((elem) => (
          <li className={styles.call} key={elem.id}>
            <p>{getDate(elem.time)}</p>
            <button
              onClick={() => {
                dispatch(deleteCall({ contactId, callId: elem.id }));
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
