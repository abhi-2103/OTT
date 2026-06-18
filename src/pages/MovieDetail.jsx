import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { fetchMovieDetail } from "../services/api";
import { useWatchlist } from "../context/WatchlistContext";

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdded, setIsAdded] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadMovie = async () => {
      const data = await fetchMovieDetail(id);
      setMovie(data);
      setIsAdded(isInWatchlist(id));
      setLoading(false);
    };

    loadMovie();
  }, [id, isInWatchlist]);

  const handleAddToWatchlist = () => {
    if (!movie) return;

    if (isAdded) {
      removeFromWatchlist(id);
      setIsAdded(false);
      setMessage("Removed from Watchlist!");
    } else {
      const movieData = {
        imdbID: movie.imdbID || id,
        Title: movie.Title,
        Year: movie.Year,
        Type: movie.Type,
        Poster: movie.Poster,
      };
      addToWatchlist(movieData);
      setIsAdded(true);
      setMessage("Added to Watchlist!");
    }

    // Clear message after 2 seconds
    setTimeout(() => setMessage(""), 2000);
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="movie-detail-page">
          <div className="loading">Loading...</div>
        </div>
      </>
    );
  }

  if (!movie || movie.Response === "False") {
    return (
      <>
        <Navbar />
        <div className="movie-detail-page">
          <div className="error">Movie not found</div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="movie-detail-page">
        <button 
          className="back-btn" 
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </button>

        <div className="movie-detail-container">
          <div className="movie-poster">
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/300x450"
              }
              alt={movie.Title}
            />
          </div>

          <div className="movie-info-detail">
            <h1>{movie.Title}</h1>

            <div className="movie-meta">
              <span className="year">{movie.Year}</span>
              <span className="type">{movie.Type}</span>
              {movie.imdbRating && (
                <span className="rating">★ {movie.imdbRating}/10</span>
              )}
            </div>

            {movie.Plot && movie.Plot !== "N/A" && (
              <div className="plot">
                <h3>Plot</h3>
                <p>{movie.Plot}</p>
              </div>
            )}

            {movie.Director && movie.Director !== "N/A" && (
              <div className="detail-item">
                <strong>Director:</strong> {movie.Director}
              </div>
            )}

            {movie.Actors && movie.Actors !== "N/A" && (
              <div className="detail-item">
                <strong>Cast:</strong> {movie.Actors}
              </div>
            )}

            {movie.Genre && movie.Genre !== "N/A" && (
              <div className="detail-item">
                <strong>Genre:</strong> {movie.Genre}
              </div>
            )}

            {movie.Runtime && movie.Runtime !== "N/A" && (
              <div className="detail-item">
                <strong>Runtime:</strong> {movie.Runtime}
              </div>
            )}

            <div className="action-buttons">
              <button className="play-btn">▶ Play Now</button>
              <button 
                className={`add-btn ${isAdded ? 'added' : ''}`}
                onClick={handleAddToWatchlist}
              >
                {isAdded ? '✓ Remove from Watchlist' : '+ Add to Watchlist'}
              </button>
            </div>

            {message && <div className="watchlist-message">{message}</div>}
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetail;
