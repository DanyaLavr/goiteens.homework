import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200";
const Li = styled.li`
  display: grid;
  gap: 15px;
  border: 1px solid grey;
  text-align: center;
`;
export default function Movie({ id, poster_path, title }) {
  const location = useLocation();
  return (
    <Li>
      <Link
        className="grid justify-items-center"
        to={`/movies/${id}`}
        state={{ from: location }}
      >
        <img src={`${IMAGE_BASE_URL}${poster_path}`} alt="" />
        <h2>{title}</h2>
      </Link>
    </Li>
  );
}
