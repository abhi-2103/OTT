import { useState } from "react";

import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";

import { moviesLineup } from "../data/movies";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = moviesLineup.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <HeroBanner />

      <div className="home-container">
        <SearchBar onSearch={setSearchTerm} />

        <h2 className="section-title">
          Trending Telugu Movies
        </h2>

        <div className="movie-grid">
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;