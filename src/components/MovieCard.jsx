import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleMovieClick = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate(`/movie/${movie.imdbID}`);
    }
  };

  return (
    <div className="movie-card" onClick={handleMovieClick}>
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450"
        }
        alt={movie.Title}
      />

      <div className="movie-info">
        <h3>{movie.Title}</h3>

        <p>{movie.Year}</p>

        <span>{movie.Type}</span>
      </div>
    </div>
  );
}

export default MovieCard;