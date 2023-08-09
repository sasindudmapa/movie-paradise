import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { baseImageUrl } from "../../../Utils/requests";
import NavBar from "../NavBar";
import "./SR.css";

function Search() {
  const { movieKeyword } = useParams();
  const [results, setResults] = useState([]);
  const [movie, setMovie] = useState(movieKeyword);

  useEffect(() => {
    // async function gettingResults() {
    //   await fetch(
    //     `https://api.themoviedb.org/3/search/movie?api_key=0011195c1370cf6aacc00fd083a0c318&language=en-US&query=${movie}&page=1&include_adult=false`
    //   )
    //     .then((response) => response.json())
    //     .then((data) => {
    //       const movies = data.results;
    //       setResults(movies);
    //     });
    // }
    // gettingResults();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=0011195c1370cf6aacc00fd083a0c318&language=en-US&query=${movie}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((data) => {
        const movies = data.results;
        setResults(movies);
      });
  }, [movie]);

  function handleLiveSeach(event) {
    const nowMovie = event.target.value;
    setMovie(nowMovie);
    console.log(movie);
  }

  return (
    <div className="search__results">
      <NavBar />
      <div className="MainSearchBox">
        <input
          type="text"
          placeholder="Enter a Movie"
          onChange={handleLiveSeach}
        />
        <button>Search</button>
      </div>
      <div id="resultsMain" className="row">
        <div className="title">Results</div>

        <div id="searchedResutls" className="row__movies">
          {results.map((movie) => (
            <div className="row__movie">
              <img
                className="poster"
                src={`${baseImageUrl}${movie.poster_path}`}
                alt=""
              />
              <div className="HoveredDetails">
                <div className="HContents">
                  <h1 className="rating">{movie.vote_average}</h1>
                  <div className="movie__buttons">
                    <button className="details__button">
                      <Link id="link__hover" to={`/movie/${movie.id}`}>
                        Details
                      </Link>
                    </button>
                    <button className="details__button">
                      Add to Watchlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
