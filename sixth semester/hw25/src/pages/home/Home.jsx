import { useContext, useEffect } from "react";
import Movie from "../../components/movie/Movie";
import { MoviesContext } from "../../context/MoviesContext";
import styled from "styled-components";
import { getPopularMovies } from "../../api/fetch-movies";

const List = styled.ul`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  gap: 30px;
  justify-content: center;
`;
export default function Home() {
  const { movies, changeMovies } = useContext(MoviesContext);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPopularMovies();
      changeMovies(data);
    };
    fetchData();
  }, []);
  return (
    <main>
      <section>
        <div className="container">
          <List>
            {movies.map(({ id, poster_path, title }) => (
              <Movie key={id} id={id} poster_path={poster_path} title={title} />
            ))}
          </List>
        </div>
      </section>
    </main>
  );
}
