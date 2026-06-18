import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function HeroBanner() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleWatchNow = () => {
    if (!user) {
      navigate("/login");
    } else {
      document.querySelector(".movie-grid")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-banner">
      <div className="hero-overlay">
        <h1>Unlimited Telugu Entertainment</h1>

        <p>
          Watch Telugu Movies, Web Series and TV Shows
          anytime on iBomma.
        </p>

        <button onClick={handleWatchNow} className="watch-btn">
          ▶ Watch Now
        </button>
      </div>
    </section>
  );
}

export default HeroBanner;