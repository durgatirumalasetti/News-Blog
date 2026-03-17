// src/services/apiService.js
const API_KEY = import.meta.env.VITE_GNEWS_KEY;
const OMDB_KEY = import.meta.env.VITE_OMDB_KEY;

export const newsService = {
  fetchTopHeadlines: async () => {
    const res = await fetch(`https://gnews.io/api/v4/top-headlines?token=${API_KEY}&lang=en`);
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
  },

  fetchNewsByCategory: async (category, maxResults = 10) => {
    const res = await fetch(
      `https://gnews.io/api/v4/search?q=${category}&lang=en&max=${maxResults}&token=${API_KEY}`
    );
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
  },

  fetchMovies: async (query = 'Marvel') => {
    const res = await fetch(`https://www.omdbapi.com/?s=${query}&type=movie&apikey=${OMDB_KEY}`);
    if (!res.ok) throw new Error('Failed to fetch movies');
    return res.json();
  }
};
