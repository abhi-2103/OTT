import { useState } from "react";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import { moviesLineup } from "../data/movies";

function Home() {
  const [filteredMovies, setFilteredMovies] = useState(moviesLineup);

  const handleSearch = (searchTerm) => {
    const filtered = moviesLineup.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.genre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <>
      <Navbar />
      <HeroBanner />

      <div className="home-container">
        <h2 className="section-title">Trending Telugu Movies</h2>
        <SearchBar onSearch={handleSearch} />

        <div className="movie-grid">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
              />
            ))
          ) : (
            <div className="no-results">
              <p>No movies found. Try a different search!</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;