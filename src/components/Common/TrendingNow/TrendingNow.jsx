import { useEffect, useState } from "react";
import { newsService } from "../../../services/apiService";
import "./TrendingNow.css";

const TrendingNow = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadBreakingNews = async () => {
      try {
        const data = await newsService.fetchTopHeadlines();
        setNews(data.articles || []);
      } catch (error) {
        console.error("Failed to load breaking news", error);
      }
    };

    loadBreakingNews();
  }, []);

  return (
    <div className="breaking-news-bar">
      <div className="breaking-label">TRENDING NOW</div>
      <div className="breaking-marquee">
        <div className="marquee-track">
         {news.concat(news).map((item, index) => (
      <span key={index} className="breaking-items">
        {item.title}
      </span>
       ))}
      </div>
      </div>
  </div>
     );
};

export default TrendingNow;
