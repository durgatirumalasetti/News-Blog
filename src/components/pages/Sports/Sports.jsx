import React, { useEffect, useState } from "react";
import "./Sports.css";
import { newsService } from "../../../services/apiService";

const SportsPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    newsService
      .fetchNewsByCategory("sports", 10)
      .then((data) => {
        setArticles(data.articles || []);
        setError(null);
      })
      .catch((err) => {
        console.error("Error fetching sports news:", err);
        setError("Failed to load sports news. Please try again.");
      })
      .finally(() => setLoading(false));
  }, []);

  const openArticle = (url) => {
    if (url) window.open(url, "_blank");
  };

  return (
    <div className="sports-container">
      {error && (
        <p style={{ padding: "40px", color: "red", textAlign: "center" }}>
          {error}
        </p>
      )}

      {/* ================= LEFT COLUMN ================= */}
      <div className="left-column">
        {loading
          ? Array.from({ length: 5 }).map((_, index) => (
              <div className="big-card" key={index}>
                <div className="skeleton-big-img"></div>

                <div className="big-content">
                  <div className="skeleton-badge"></div>
                  <div className="skeleton-big-title"></div>
                  <div className="skeleton-meta"></div>
                </div>
              </div>
            ))
          : articles.slice(0, 5).map((item, index) => (
              <div
                className="big-card"
                key={index}
                onClick={() => openArticle(item.url)}
              >
                <img
                  src={item.image || "https://via.placeholder.com/300x200"}
                  alt={item.title}
                />

                <div className="big-content">
                  <span className="badge">SPORTS</span>
                  <h2>{item.title}</h2>
                  <p className="meta">
                    {item.source?.name} • {item.publishedAt?.slice(0, 10)}
                  </p>
                </div>
              </div>
            ))}
      </div>

      {/* ================= RIGHT COLUMN ================= */}
      <div className="right-column">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div className="small-card" key={index}>
                <div className="skeleton-small-img"></div>
                <div className="skeleton-small-title"></div>
              </div>
            ))
          : articles.slice(1).map((item, index) => (
              <div
                className="small-card"
                key={index}
                onClick={() => openArticle(item.url)}
              >
                <img
                  src={item.image || "https://via.placeholder.com/100x80"}
                  alt={item.title}
                />
                <p>{item.title}</p>
              </div>
            ))}
      </div>

      {/* EMPTY STATE */}
      {!loading && !error && articles.length === 0 && (
        <p style={{ padding: "40px", textAlign: "center" }}>
          No sports news found
        </p>
      )}
    </div>
  );
};

export default SportsPage;
