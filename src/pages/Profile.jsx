import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/Profile.css";

function Profile() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      if (!response.ok) throw new Error("Failed to fetch users");
      const data = await response.json();
      setUsers(data.users);
      if (data.users.length > 0) {
        setSelectedUser(data.users[0]);
      }
      setError(null);
    } catch (err) {
      setError("Failed to load users. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="profile-page">
        <div className="profile-container">
          <h1 className="profile-heading">User Profiles</h1>

          {error && (
            <div className="error-banner">
              <p>{error}</p>
              <button onClick={fetchUsers}>Retry</button>
            </div>
          )}

          <div className="profile-wrapper">
            {/* Users List */}
            <div className="users-list">
              <h2>Available Users</h2>
              <div className="users-grid">
                {loading ? (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="user-card-skeleton">
                        <div className="skeleton-avatar"></div>
                        <div className="skeleton-name"></div>
                      </div>
                    ))}
                  </>
                ) : (
                  users.map((user) => (
                    <div
                      key={user.id}
                      className={`user-card ${
                        selectedUser?.id === user.id ? "active" : ""
                      }`}
                      onClick={() => setSelectedUser(user)}
                    >
                      <img
                        src={user.image}
                        alt={user.firstName}
                        className="user-avatar"
                      />
                      <p className="user-name">
                        {user.firstName} {user.lastName}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Profile Details */}
            <div className="profile-details">
              {loading ? (
                <div className="profile-skeleton">
                  <div className="skeleton-large-avatar"></div>
                  <div className="skeleton-text"></div>
                  <div className="skeleton-text"></div>
                  <div className="skeleton-text"></div>
                </div>
              ) : selectedUser ? (
                <div className="profile-card">
                  <img
                    src={selectedUser.image}
                    alt={selectedUser.firstName}
                    className="profile-image"
                  />
                  <div className="profile-info">
                    <h2 className="profile-name">
                      {selectedUser.firstName} {selectedUser.lastName}
                    </h2>

                    <div className="info-section">
                      <h3>Contact Information</h3>
                      <div className="info-item">
                        <span className="label">Email:</span>
                        <span className="value">{selectedUser.email}</span>
                      </div>
                      <div className="info-item">
                        <span className="label">Username:</span>
                        <span className="value">{selectedUser.username}</span>
                      </div>
                      <div className="info-item">
                        <span className="label">Phone:</span>
                        <span className="value">{selectedUser.phone}</span>
                      </div>
                    </div>

                    <div className="info-section">
                      <h3>Personal Information</h3>
                      <div className="info-item">
                        <span className="label">Age:</span>
                        <span className="value">{selectedUser.age}</span>
                      </div>
                      <div className="info-item">
                        <span className="label">Gender:</span>
                        <span className="value">
                          {selectedUser.gender.charAt(0).toUpperCase() +
                            selectedUser.gender.slice(1)}
                        </span>
                      </div>
                      <div className="info-item">
                        <span className="label">Company:</span>
                        <span className="value">
                          {selectedUser.company?.name || "N/A"}
                        </span>
                      </div>
                    </div>

                    <div className="info-section">
                      <h3>Address</h3>
                      <div className="info-item">
                        <span className="label">City:</span>
                        <span className="value">{selectedUser.address?.city}</span>
                      </div>
                      <div className="info-item">
                        <span className="label">State:</span>
                        <span className="value">
                          {selectedUser.address?.state}
                        </span>
                      </div>
                      <div className="info-item">
                        <span className="label">Country:</span>
                        <span className="value">
                          {selectedUser.address?.country}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
