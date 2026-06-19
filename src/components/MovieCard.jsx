

import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <img
        src={movie.poster || movie.img}
        alt={movie.title}
        className="movie-poster"
      />

      <div className="movie-info">
        <h3 className="movie-title">
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