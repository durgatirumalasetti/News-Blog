import { useEffect, useState } from "react";
import "./Technology.css";
import { newsService } from "../../../services/apiService";

const Technology = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    newsService
      .fetchNewsByCategory("technology", 5)
      .then((data) => {
        setArticles(data?.articles || []);
        setError(null);
      })
      .catch(() => {
        setError("Failed to load technology news");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="tech-wrapper">
        <div className="tech-layout">
          <div className="tech-left">
            <div style={{ height: 240, background: "#eee" }}></div>
            <div className="tech-left-content">
              <div style={{ height: 14, width: "40%", background: "#eee" }}></div>
              <div style={{ height: 22, marginTop: 8, background: "#eee" }}></div>
              <div style={{ height: 16, marginTop: 8, background: "#eee" }}></div>
            </div>
          </div>

          <div className="tech-right">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="tech-card">
                <div style={{ width: 105, height: 70, background: "#eee" }}></div>
                <div style={{ flex: 1 }}>
                  <div style={{ height: 16, background: "#eee" }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error)
    return <div style={{ padding: 40, textAlign: "center" }}>{error}</div>;

  if (!articles.length)
    return <div style={{ padding: 40, textAlign: "center" }}>No news found</div>;

  return (
    <div className="tech-wrapper">
      <div className="tech-layout">
        {/* LEFT BIG ARTICLE */}
        <a
          href={articles[0]?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="tech-left"
        >
          <img
            src={
              articles[0]?.image ||
              "https://images.unsplash.com/photo-1518770660439-4636190af475"
            }
            alt={articles[0]?.title}
          />

          <div className="tech-left-content">
            <span>TECHNOLOGY</span>
            <h3>{articles[0]?.title}</h3>
            <p>
              {articles[0]?.description ||
                "Latest updates from the world of technology."}
            </p>
          </div>
        </a>

        {/* RIGHT SMALL ARTICLES */}
        <div className="tech-right">
          {articles.slice(1, 5).map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-card"
            >
              <img
                src={item.image || "https://via.placeholder.com/150"}
                alt={item.title}
              />

              <div className="tech-card-content">
                <h4>{item.title}</h4>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;
