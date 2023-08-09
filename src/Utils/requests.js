const API_KEY = "0011195c1370cf6aacc00fd083a0c318";

const requests = {
  fetchingTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
  fetchTopRatedMoves: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovie: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;

const urls = {
  MovieDetails:
    "https://api.themoviedb.org/3/movie/{movie_id}?api_key=0011195c1370cf6aacc00fd083a0c318&language=en-US",
  videoClips:
    "https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=0011195c1370cf6aacc00fd083a0c318&language=en-US",
  WatchUrl:
    "https://api.themoviedb.org/3/movie/{movie_id}/watch/providers?api_key=0011195c1370cf6aacc00fd083a0c318",
  Reviews:
    "https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=0011195c1370cf6aacc00fd083a0c318&language=en-US&page=1",
  Recommendations:
    "https://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key=0011195c1370cf6aacc00fd083a0c318&language=en-US&page=1",
  SearchMovie:
    "https://api.themoviedb.org/3/search/movie?api_key=0011195c1370cf6aacc00fd083a0c318&language=en-US&query=inception&page=1&include_adult=false",
  Genre:
    "https://api.themoviedb.org/3/movie/{movie_id}?api_key=0011195c1370cf6aacc00fd083a0c318&language=en-US",
};

export { urls };

const baseImageUrl = "https://image.tmdb.org/t/p/original";

export { baseImageUrl };
