import { useEffect, useState } from "react";
import "./Movies.css";
import { newsService } from "../../../services/apiService";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);    

  useEffect(() => {
    newsService
      .fetchMovies("Marvel")
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]); // empty array if no results
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load movies. Please try again.");
        setLoading(false);
      });
  }, []);

  if (error) return <p>{error}</p>;
  if (!loading && movies.length === 0) return <p>No movies found.</p>;

  // Skeleton cards while loading
  const skeletonArray = Array(6).fill(0);

  return (
    <div className="movies-container">
      {loading
        ? skeletonArray.map((_, index) => (
            <div key={index} className="movie-card skeleton-card">
              <div className="skeleton-img"></div>
              <div className="skeleton-title"></div>
              <div className="skeleton-btn"></div>
            </div>
          ))
        : movies.slice(0, 6).map((movie) => (
            <div key={movie.imdbID} className="movie-card">
              <a
                href={`https://www.imdb.com/title/${movie.imdbID}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
                  alt={movie.Title}
                />
              </a>
              <h3 className="movie-title">{movie.Title}</h3>
              <a
                href={`https://www.imdb.com/title/${movie.imdbID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="movie-btn"
              >
                More
              </a>
            </div>
          ))}
    </div>
  );
};

export default Movies;
