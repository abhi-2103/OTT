import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Dashboard() {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="dashboard-page">

        <div className="dashboard-card">

          <h1>Welcome, {user?.name}! 👋</h1>

          <p>You're logged into iBOMMA</p>

          <div className="dashboard-stats">
            <div className="stat-box">
              <h3>120+</h3>
              <p>Movies</p>
            </div>

            <div className="stat-box">
              <h3>40+</h3>
              <p>Series</p>
            </div>

            <div className="stat-box">
              <h3>HD</h3>
              <p>Streaming</p>
            </div>
          </div>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>
      </div>
    </>
  );
}

export default Dashboard;