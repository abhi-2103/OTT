import { useState, useEffect, useRef } from "react";

function TrendingNow() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollContainer = useRef(null);

  useEffect(() => {
    fetchTrending();
  }, []);

  const fetchTrending = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products?limit=20");
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      setProducts(data.products);
      setError(null);
    } catch (err) {
      setError("Failed to load trending content");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const scroll = (direction) => {
    if (scrollContainer.current) {
      const scrollAmount = 400;
      scrollContainer.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="trending-section">
      <div className="trending-header">
        <h2 className="section-title">Trending Now</h2>
        <div className="scroll-controls">
          <button
            className="scroll-btn scroll-left"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
          >
            ❮
          </button>
          <button
            className="scroll-btn scroll-right"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            ❯
          </button>
        </div>
      </div>

      {error && (
        <div className="error-banner">
          <p>{error}</p>
        </div>
      )}

      <div className="trending-row">
        <div className="trending-scroll-container" ref={scrollContainer}>
          {loading ? (
            <>
              {[...Array(10)].map((_, i) => (
                <div key={i} className="trending-card-skeleton">
                  <div className="skeleton-poster"></div>
                  <div className="skeleton-title"></div>
                </div>
              ))}
            </>
          ) : (
            products.map((product) => (
              <div key={product.id} className="trending-card">
                <div className="trending-image-wrapper">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="trending-poster"
                  />
                  <div className="trending-overlay">
                    <button className="play-btn-trending">▶</button>
                    <span className="rating-small">
                      {product.rating.toFixed(1)} ⭐
                    </span>
                  </div>
                </div>
                <h3 className="trending-title">{product.title}</h3>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default TrendingNow;
