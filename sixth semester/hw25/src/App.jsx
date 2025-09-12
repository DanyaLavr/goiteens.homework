import "./App.css";
import { Route, Routes } from "react-router-dom";
import Cast from "./components/cast/Cast";
import Reviews from "./components/reviews/Reviews";
import MovieDetails from "./pages/movie-details/MovieDetails";
import Movies from "./pages/movies/Movies";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import { Suspense } from "react";
import Loader from "./components/loader/Loader";

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
