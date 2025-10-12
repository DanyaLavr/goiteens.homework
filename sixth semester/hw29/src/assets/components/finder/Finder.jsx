import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../../redux/actions";

export default function Finder({ filterContacts, contacts }) {
  const [key, setKey] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    //!
    dispatch(setFilter(e.target.value.trim()));
  };
  useEffect(() => {
    filterContacts(key);
  }, [key]);
  useEffect(() => {
    setKey("");
  }, [contacts]);
  return (
    <form className="">
      <label htmlFor="finder">Find contact by name</label>
      <input
        type="text"
        name="finder"
        value={key}
        onChange={(e) => setKey(e.target.value.trim())}
      />
    </form>
  );
}
