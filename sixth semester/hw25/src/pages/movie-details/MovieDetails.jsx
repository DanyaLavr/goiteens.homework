import { Link, Outlet, useParams } from "react-router-dom";
import { getMovieById } from "../../api/fetch-movies";
import { useEffect, useState } from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w400";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await getMovieById(movieId);
        setMovie(res);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [movieId]);
  return movie ? (
    <main>
      <section>
        <div className="container">
          <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt="" />
          <h1>{movie.original_title}</h1>
        </div>
      </section>
      <section>
        <div className="container">
          <h3>Additional</h3>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
      </section>
      <Outlet />
    </main>
  ) : (
    ""
  );
}
