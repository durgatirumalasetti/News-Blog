import { useState, useEffect } from "react";
import { newsService } from "../../../services/apiService";
import "./Home.css";

const Home = () => {
  const [bannerIndex, setBannerIndex] = useState(0);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    newsService
      .fetchTopHeadlines()
      .then((data) => setNews(data.articles || []))
      .catch(() => setError("Failed to fetch news"))
      .finally(() => setLoading(false));
  }, []);

  if (error) {
    return (
      <div style={{ padding: "20px", color: "red", textAlign: "center" }}>
        {error}
      </div>
    );
  }

  const bannerItems = news.slice(0, 6);

  const next = () =>
    setBannerIndex((prev) => (prev + 1) % bannerItems.length);

  const prev = () =>
    setBannerIndex((prev) =>
      prev === 0 ? bannerItems.length - 1 : prev - 1
    );

  return (
    <div className="home-wrapper">
      {/* ===== BANNER ===== */}
      {loading ? (
        <div className="home-banner skeleton-banner">
          <div className="skeleton-banner-img"></div>
          <div className="skeleton-banner-text"></div>
        </div>
      ) : (
        <div className="home-banner">
          <a
            href={bannerItems[bannerIndex].url}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={bannerItems[bannerIndex].image || "https://via.placeholder.com/800x400"}
              alt={bannerItems[bannerIndex].title}
            />
          </a>
          <button className="nav left" onClick={prev}>❮</button>
          <button className="nav right" onClick={next}>❯</button>
        </div>
      )}

      {/* ===== NEWS GRID ===== */}
      <div className="home-news-grid">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div className="home-card skeleton-card" key={i}>
                <div className="skeleton-img"></div>
                <div className="skeleton-title"></div>
                <div className="skeleton-desc"></div>
                <div className="skeleton-read-more"></div>
              </div>
            ))
          : news.slice(4).map((item, i) => (
              <div className="home-card" key={i}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="home-card-link"
                >
                  <h3 className="home-card-title">{item.title}</h3>
                  <img
                    src={item.image || "https://via.placeholder.com/400x250"}
                    alt={item.title}
                    className="home-card-img"
                  />
                </a>
                <p className="home-card-desc">
                  {item.description || "No description available"}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="home-read-more"
                >
                  Read More →
                </a>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Home;
