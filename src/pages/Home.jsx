import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import SkeletonCard from "../components/SkeletonCard";

import { fetchMovies } from "../services/api";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadMovies = async (query = "telugu") => {
    setLoading(true);

    const data = await fetchMovies(query);

    setMovies(data);

    setLoading(false);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  const handleSearch = (query) => {
    if (query.length > 2) {
      loadMovies(query);
    }
  };

  return (
    <>
      <Navbar />

      <HeroBanner />

      <div className="home-container">

        <SearchBar onSearch={handleSearch} />

        <h2 className="section-title">
          Movies
        </h2>

        <div className="movie-grid">
          {loading
            ? [...Array(8)].map((_, index) => (
                <SkeletonCard key={index} />
              ))
            : movies.map((movie) => (
                <MovieCard
                  key={movie.imdbID}
                  movie={movie}
                />
              ))}
        </div>

      </div>
    </>
  );
}

export default Home;