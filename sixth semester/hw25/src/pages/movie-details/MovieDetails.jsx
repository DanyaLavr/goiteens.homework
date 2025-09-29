import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieById } from "../../api/fetch-movies";
import { Suspense, useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w400";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
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
    <main className="relative">
      <button className="absolute left-20 top-5 px-4 py-2 rounded-2xl bg-stone-950 text-amber-50">
        <Link to={location?.state.from || "/"}>Go Back</Link>
      </button>
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
    <Loader />
  );
}
