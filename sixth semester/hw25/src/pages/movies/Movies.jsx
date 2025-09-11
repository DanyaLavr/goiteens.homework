import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import Movie from "../../components/movie/Movie";
import styled from "styled-components";
import Finder from "../../components/finder/Finder";
const List = styled.ul`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  gap: 30px;
  justify-content: center;
`;

export default function Movies() {
  const { foundMovies } = useContext(MoviesContext);

  return (
    <main>
      <section>
        <div className="container">
          <Finder />
          <List>
            {foundMovies.map(({ id, poster_path, title }) => (
              <Movie key={id} id={id} poster_path={poster_path} title={title} />
            ))}
          </List>
        </div>
      </section>
    </main>
  );
}
