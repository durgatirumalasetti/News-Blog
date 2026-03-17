import "./NewsCard.css";

const NewsCard = ({ item }) => {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className="news-card"
    >
      <img
        src={item.image || "https://via.placeholder.com/400"}
        alt={item.title}
        className="news-img"
      />

      <div className="news-overlay">
        <h3 className="news-title">{item.title}</h3>
        <span className="news-link">Read Full Story →</span>
      </div>
    </a>
  );
};

export default NewsCard;
