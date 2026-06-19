import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { moviesLineup } from "../data/movies";

function Player() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find movie from local data
    const foundMovie = moviesLineup.find((m) => m.id === parseInt(id));
    if (foundMovie) {
      setMovie(foundMovie);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="player-page">
          <div className="loading">Loading...</div>
        </div>
      </>
    );
  }

  if (!movie) {
    return (
      <>
        <Navbar />
        <div className="player-page">
          <div className="error">Movie not found</div>
        </div>
      </>
    );
  }

  // YouTube trailer IDs for Telugu movies (examples)
  const trailerMap = {
    1: "dQw4w9WgXcQ", // Placeholder
    2: "dQw4w9WgXcQ",
    3: "dQw4w9WgXcQ",
    4: "dQw4w9WgXcQ",
    5: "dQw4w9WgXcQ",
    6: "dQw4w9WgXcQ",
    7: "dQw4w9WgXcQ",
    8: "dQw4w9WgXcQ",
    9: "dQw4w9WgXcQ",
    10: "dQw4w9WgXcQ",
    11: "dQw4w9WgXcQ",
    12: "dQw4w9WgXcQ",
    13: "dQw4w9WgXcQ",
    14: "dQw4w9WgXcQ",
    15: "dQw4w9WgXcQ",
    16: "dQw4w9WgXcQ",
  };

  const youtubeId = trailerMap[movie.id] || "dQw4w9WgXcQ";

  return (
    <>
      <Navbar />
      <div className="player-page">
        <div className="player-container">
          <div className="player-header">
            <button className="player-back-btn" onClick={() => navigate(`/movie/${movie.id}`)}>
              ← Back to Details
            </button>
            <h1 className="player-title">Playing: {movie.title}</h1>
          </div>

          <div className="video-player">
            <div className="player-wrapper">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&controls=1`}
                title={movie.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="player-iframe"
              ></iframe>
            </div>
          </div>

          <div className="player-info">
            <div className="info-box">
              <h2>{movie.title}</h2>
              <p className="movie-genre">{movie.genre}</p>
              <p className="movie-description">
                Now playing: YouTube trailer version. Enjoy the preview of this amazing Telugu
                movie!
              </p>

              <div className="player-controls">
                <button
                  className="btn btn-secondary"
                  onClick={() => navigate(`/movie/${movie.id}`)}
                >
                  ← Back to Details
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/")}
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Player;
