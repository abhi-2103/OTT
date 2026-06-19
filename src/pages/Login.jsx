import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name.trim()) {
      setError("Name is required");
      return;
    }

    if (!formData.email.trim()) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      login(formData);
      setLoading(false);

      // Check if there's a saved movie to redirect to
      const redirectToMovie = sessionStorage.getItem("redirectToMovie");
      if (redirectToMovie) {
        sessionStorage.removeItem("redirectToMovie");
        navigate(`/movie/${redirectToMovie}`);
      } else {
        navigate("/");
      }
    }, 500);
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleLogin}>
        <div className="login-header">
          <h1>iBOMMA</h1>
          <p>Watch Unlimited Telugu Entertainment</p>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleInputChange}
            disabled={loading}
            className={error && !formData.name ? "error" : ""}
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={loading}
            className={error && formData.name && !validateEmail(formData.email) ? "error" : ""}
          />
          {error && <span className="error-message">{error}</span>}
        </div>

        <button type="submit" disabled={loading} className="login-btn">
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="login-footer">
          By logging in, you agree to our Terms of Service
        </p>
      </form>
    </div>
  );
}

export default Login;