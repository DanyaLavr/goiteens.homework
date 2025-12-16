import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../../redux/selectors";
import { setFilter } from "../../../redux/filtersSlice";
import { selectContacts } from "../../../redux/contactsSlice";

export default function Finder() {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setFilter(e.target.value.trim()));
  };

  useEffect(() => {
    dispatch(setFilter(""));
  }, [contacts]);

  return (
    <form className="">
      <label htmlFor="finder">Find contact by name</label>
      <input type="text" name="finder" value={filter} onChange={handleChange} />
    </form>
  );
}
