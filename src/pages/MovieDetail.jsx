import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useWatchlist } from "../context/WatchlistContext";
import { moviesLineup } from "../data/movies";

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdded, setIsAdded] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Find movie from local data
    const foundMovie = moviesLineup.find((m) => m.id === parseInt(id));
    if (foundMovie) {
      setMovie(foundMovie);
      setIsAdded(isInWatchlist(foundMovie.id));
    }
    setLoading(false);
  }, [id, isInWatchlist]);

  const handleAddToWatchlist = () => {
    if (!movie) return;

    if (isAdded) {
      removeFromWatchlist(movie.id);
      setIsAdded(false);
      setMessage("Removed from Watchlist!");
    } else {
      addToWatchlist(movie);
      setIsAdded(true);
      setMessage("Added to Watchlist!");
    }

    // Clear message after 2 seconds
    setTimeout(() => setMessage(""), 2000);
  };

  const handleWatch = () => {
    navigate(`/player/${movie.id}`);
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

  if (!movie) {
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
              src={movie.img}
              alt={movie.title}
            />
          </div>

          <div className="movie-info-detail">
            <h1>{movie.title}</h1>

            <div className="movie-meta">
              <span className="genre">{movie.genre}</span>
              <span className="rating">★ 8.5/10</span>
              <span className="year">2024</span>
            </div>

            <div className="plot">
              <h3>Description</h3>
              <p>
                Experience an incredible journey with this Telugu blockbuster. Packed with
                action, drama, and entertainment, this movie offers a complete theatrical
                experience. Perfect for family viewing and action lovers.
              </p>
            </div>

            <div className="detail-item">
              <strong>Genre:</strong> {movie.genre}
            </div>

            <div className="detail-item">
              <strong>Language:</strong> Telugu
            </div>

            <div className="detail-item">
              <strong>Duration:</strong> 2h 15m
            </div>

            <div className="detail-item">
              <strong>Audio:</strong> Dolby Digital 5.1
            </div>

            <div className="action-buttons">
              <button className="play-btn" onClick={handleWatch}>▶ Play Now</button>
              <button 
                className={`add-btn ${isAdded ? 'added' : ''}`}
                onClick={handleAddToWatchlist}
              >
                {isAdded ? '✓ In Watchlist' : '+ Add to Watchlist'}
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
