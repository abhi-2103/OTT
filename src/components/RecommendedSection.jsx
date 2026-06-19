import { useState, useEffect } from "react";

function RecommendedSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRecommended();
  }, []);

  const fetchRecommended = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products?limit=8");
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      setProducts(data.products);
      setError(null);
    } catch (err) {
      setError("Failed to load recommendations");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="recommended-section">
      <div className="section-header">
        <h2 className="section-title">Recommended For You</h2>
        <button className="refresh-btn" onClick={fetchRecommended}>
          ↻ Refresh
        </button>
      </div>

      {error && (
        <div className="error-banner">
          <p>{error}</p>
        </div>
      )}

      <div className="recommended-grid">
        {loading ? (
          <>
            {[...Array(8)].map((_, i) => (
              <div key={i} className="movie-card-skeleton">
                <div className="skeleton-poster"></div>
                <div className="skeleton-title"></div>
                <div className="skeleton-rating"></div>
              </div>
            ))}
          </>
        ) : (
          products.map((product) => (
            <div key={product.id} className="recommendation-card">
              <div className="card-image-wrapper">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="recommendation-poster"
                />
                <div className="card-overlay">
                  <button className="play-btn">▶ Watch Now</button>
                </div>
                <div className="rating-badge">{product.rating.toFixed(1)} ⭐</div>
              </div>

              <div className="card-content">
                <h3 className="card-title">{product.title}</h3>
                <p className="card-description">{product.description}</p>
                <div className="card-meta">
                  <span className="price">${product.price}</span>
                  <span className="stock">
                    {product.stock > 0 ? "Available" : "Out of Stock"}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default RecommendedSection;
