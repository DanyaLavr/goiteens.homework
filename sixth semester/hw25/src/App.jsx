import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Cast from "./components/cast/Cast";
import Reviews from "./components/reviews/Reviews";
import Header from "./components/header/Header";
import Loader from "./components/loader/Loader";

const MovieDetails = lazy(() => import("./pages/movie-details/MovieDetails"));
const Movies = lazy(() => import("./pages/movies/Movies"));
const Home = lazy(() => import("./pages/home/Home"));

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route
            path="cast"
            element={
              <Suspense fallback={<Loader />}>
                <Cast />
              </Suspense>
            }
          />
          <Route
            path="reviews"
            element={
              <Suspense fallback={<Loader />}>
                <Reviews />
              </Suspense>
            }
          />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
