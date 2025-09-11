import "./App.css";
import { Route, Routes } from "react-router-dom";
import Cast from "./components/cast/Cast";
import Reviews from "./components/reviews/Reviews";
import MovieDetails from "./pages/movie-details/MovieDetails";
import Movies from "./pages/movies/Movies";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
