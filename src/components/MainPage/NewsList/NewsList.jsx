import { useEffect, useState } from "react";
import NewsCard from "../NewsCards/NewsCard";
import PopularPosts from "../PopularPosts/PopularPosts";
import { newsService } from "../../../services/apiService";

import "./NewsList.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const FeatureSkeleton = () => (
  <div className="feature-grid">
    <div className="skeleton skeleton-feature-big"></div>
    <div className="feature-small">
      <div className="skeleton skeleton-feature-small"></div>
      <div className="skeleton skeleton-feature-small"></div>
    </div>
  </div>
);

const ContentSkeleton = () => (
  <div className="content-grid">
    <div className="popular-posts">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="skeleton skeleton-popular"></div>
      ))}
    </div>
    <div className="sidebar">
      <div className="skeleton skeleton-weather"></div>
      <div className="skeleton skeleton-social"></div>
    </div>
  </div>
);

const NewsList = () => {
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

  if (loading) {
    return (
      <div className="home-layout">
        <FeatureSkeleton />
        <ContentSkeleton />
      </div>
    );
  }

  if (error) return <div className="error">{error}</div>;

  return (
    <div className="home-layout">
      {/* FEATURE SECTION */}
      <div className="feature-grid">
        {news[0] && (
          <div className="feature-big">
            <NewsCard item={news[0]} />
          </div>
        )}
        <div className="feature-small">
          {news.slice(1, 3).map((item, i) => (
            <NewsCard key={i} item={item} />
          ))}
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="content-grid">
        <PopularPosts posts={news.slice(3, 8)} />

        <div className="sidebar">
          {/* WEATHER CARD */}
          <div className="weather-card">
            <div className="weather-top">
              <i className="fas fa-cloud-sun weather-icon"></i>
              <div className="temp">
                <h2>34°F</h2>
                <span>Dhaka</span>
              </div>
            </div>
            <div className="weather-middle">
              <p>Feels like: 36°F</p>
              <p>Wind: 13 mph WSW</p>
              <p>Humidity: 91%</p>
              <p>Sunrise: 6:12 AM | Sunset: 5:48 PM</p>
              <p>AQI: 72 (Moderate)</p>
            </div>
            <div className="weather-forecast">
              <div className="forecast-day">
                <span>Mon</span>
                <i className="fas fa-sun"></i>
                <span>32°F</span>
              </div>
              <div className="forecast-day">
                <span>Tue</span>
                <i className="fas fa-cloud-sun"></i>
                <span>34°F</span>
              </div>
              <div className="forecast-day">
                <span>Wed</span>
                <i className="fas fa-cloud-showers-heavy"></i>
                <span>30°F</span>
              </div>
            </div>
          </div>

          {/* SOCIAL CARD */}
          <div className="social-card">
            <div className="social-grid">
              <div className="social-item rss">
                <i className="fab fa-rss"></i>
                <h4>2,035</h4>
                <span>SUBSCRIBERS</span>
              </div>
              <div className="social-item facebook">
                <i className="fab fa-facebook-f"></i>
                <h4>3,794</h4>
                <span>FANS</span>
              </div>
              <div className="social-item google">
                <i className="fab fa-google-plus-g"></i>
                <h4>941</h4>
                <span>FOLLOWERS</span>
              </div>
              <div className="social-item youtube">
                <i className="fab fa-youtube"></i>
                <h4>7,820</h4>
                <span>SUBSCRIBERS</span>
              </div>
              <div className="social-item twitter">
                <i className="fab fa-twitter"></i>
                <h4>1,562</h4>
                <span>FOLLOWERS</span>
              </div>
              <div className="social-item pinterest">
                <i className="fab fa-pinterest-p"></i>
                <h4>1,310</h4>
                <span>FOLLOWERS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsList;
