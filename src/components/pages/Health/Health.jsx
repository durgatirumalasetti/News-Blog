import React, { useEffect, useState } from "react";
import { newsService } from "../../../services/apiService";
import "./Health.css";

const Health = () => {
  const [healthNews, setHealthNews] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHealthNews = async () => {
      try {
        const data = await newsService.fetchNewsByCategory("health", 12);
        setHealthNews(data.articles);
        setSelectedArticle(data.articles[0] || null);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchHealthNews();
  }, []);

  const selectArticle = (article) => {
    setSelectedArticle(article);
  };

  /* =====================
     SKELETON LOADER
  ====================== */
  if (loading) {
    return (
      <div className="health-container">
        {/* Sidebar Skeleton */}
        <div className="health-sidebar">
          <div className="skeleton-title"></div>
          {[...Array(6)].map((_, i) => (
            <div key={i} className="skeleton-line"></div>
          ))}
        </div>

        {/* Main Content Skeleton */}
        <div className="health-content">
          <div className="skeleton-heading"></div>
          <div className="skeleton-date"></div>
          <div className="skeleton-image"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text short"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="health-container">
      {/* Sidebar */}
      <div className="health-sidebar">
        <h3>Health Articles</h3>
        <ul>
          {healthNews.map((article, index) => (
            <li
              key={index}
              className={
                selectedArticle === article ? "active-article" : ""
              }
              onClick={() => selectArticle(article)}
            >
              {article.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="health-content">
        {selectedArticle && (
          <>
            <h1>{selectedArticle.title}</h1>

            {selectedArticle.publishedAt && (
              <p className="date">
                {new Date(selectedArticle.publishedAt).toLocaleDateString()}
              </p>
            )}

            {selectedArticle.image && (
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                onClick={() => window.open(selectedArticle.url, "_blank")}
              />
            )}

            <p className="description">
              {selectedArticle.description || "No description available."}
            </p>

            <a
              href={selectedArticle.url}
              target="_blank"
              rel="noopener noreferrer"
              className="read-more"
            >
              Read full article
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Health;
