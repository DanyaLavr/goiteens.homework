import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilter } from "../../../redux/selectors";
import { setFilter } from "../../../redux/filtersSlice";

export default function Finder() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
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
