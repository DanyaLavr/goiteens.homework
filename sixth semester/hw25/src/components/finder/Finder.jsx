import { useContext, useRef } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import { findMovie } from "../../api/fetch-movies";
import styled from "styled-components";
const Form = styled.form`
  border-radius: 6px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 0 auto;
  width: 240px;
  input,
  button {
    outline: none;
    border: none;
  }
`;
export default function Finder() {
  const { handleFindMovies } = useContext(MoviesContext);
  const inputRef = useRef();
  const onSubmit = async (e) => {
    e.preventDefault();
    handleFindMovies(await findMovie(inputRef.current.value));
  };
  return (
    <Form action="" onSubmit={onSubmit}>
      <input ref={inputRef} type="text" />
      <button>search</button>
    </Form>
  );
}
