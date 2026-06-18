import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <h1 className="logo">iBOMMA</h1>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>

        {user && <Link to="/watchlist">📋 Watchlist</Link>}

        {!user ? (
          <Link to="/login">Login</Link>
        ) : (
          <div className="user-section">
            <span className="user-name">👤 {user.name}</span>
            <button onClick={logout} className="logout-btn">Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;