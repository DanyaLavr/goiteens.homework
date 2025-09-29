import { useCallback, useContext, useEffect, useRef } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import { findMovie } from "../../api/fetch-movies";
import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";
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
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const inputRef = useRef();
  const checkFinder = async () => {
    const q = searchParams.get("movieName");
    console.log(q);
    q ? handleFindMovies(await findMovie(q)) : navigate("/movies");
  };
  const onSubmit = (e) => {
    e.preventDefault();
    checkFinder();
    e.target.reset();
  };

  const onChange = () => {
    const searchParamsObj = Object.fromEntries(searchParams);

    setSearchParams({
      ...searchParamsObj,
      movieName: inputRef.current.value.toLowerCase().trim(),
    });
  };
  useEffect(() => {
    const getData = async () => {
      checkFinder();
    };
    getData();
  }, []);
  return (
    <Form action="" onSubmit={onSubmit}>
      <input onChange={onChange} ref={inputRef} type="text" />
      <button>search</button>
    </Form>
  );
}
