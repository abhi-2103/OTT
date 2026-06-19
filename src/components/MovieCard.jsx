import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">

      <div className="poster-wrapper">
        <img
          src={movie.img}
          alt={movie.title}
          loading="lazy"
        />
      </div>

      <div className="card-details">
        <h3 className="card-title">
          {movie.title}
        </h3>

        <p className="movie-genre">
          {movie.genre}
        </p>
      </div>

    </div>
  );
}

export default MovieCard;