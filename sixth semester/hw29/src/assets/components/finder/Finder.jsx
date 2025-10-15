import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../redux/actions";
import { getFilter } from "../../../redux/selectors";

export default function Finder({ filterContacts, contacts }) {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setFilter(e.target.value.trim()));
  };
  useEffect(() => {
    filterContacts(filter);
  }, [filter]);
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
