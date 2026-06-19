

import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleClick = () => {
    if (!user) {
      // Save the movie ID for after login
      sessionStorage.setItem("redirectToMovie", movie.id);
      navigate("/login");
    } else {
      navigate(`/movie/${movie.id}`);
    }
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