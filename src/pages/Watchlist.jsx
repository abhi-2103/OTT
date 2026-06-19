import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useWatchlist } from "../context/WatchlistContext";
import { useAuth } from "../context/AuthContext";

function Watchlist() {
  const { watchlist, removeFromWatchlist } = useWatchlist();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleRemove = (movieId) => {
    removeFromWatchlist(movieId);
  };

  return (
    <>
      <Navbar />
      <div className="watchlist-page">
        <div className="watchlist-header">
          <h1>📋 My Watchlist</h1>
          <p>{user?.name}, you have {watchlist.length} movies in your watchlist</p>
        </div>

        {watchlist.length === 0 ? (
          <div className="empty-watchlist">
            <h2>Your watchlist is empty</h2>
            <p>Start adding movies to your watchlist!</p>
            <button 
              className="back-to-home-btn"
              onClick={() => navigate("/")}
            >
              ← Back to Home
            </button>
          </div>
        ) : (
          <div className="watchlist-container">
            <div className="watchlist-grid">
              {watchlist.map((movie) => (
                <div key={movie.id} className="watchlist-card">
                  <div className="watchlist-poster">
                    <img
                      src={movie.img}
                      alt={movie.title}
                    />
                    <div className="watchlist-overlay">
                      <button
                        className="play-watchlist-btn"
                        onClick={() => navigate(`/movie/${movie.id}`)}
                      >
                        ▶ Watch Now
                      </button>
                      <button
                        className="remove-watchlist-btn"
                        onClick={() => handleRemove(movie.id)}
                      >
                        ✕ Remove
                      </button>
                    </div>
                  </div>
                  <div className="watchlist-info">
                    <h3>{movie.title}</h3>
                    <p className="watchlist-genre">{movie.genre}</p>
                    <p className="watchlist-date">
                      Added: {new Date(movie.addedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Watchlist;
