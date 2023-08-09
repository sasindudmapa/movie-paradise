/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import base from "../../Utils/axios";
import { baseImageUrl } from "../../Utils/requests";
import "./Row.css";

function Row({ title, fetchUrl }) {
  const [rowMovies, setRowMovies] = useState([]);

  useEffect(() => {
    async function fetchingMovies() {
      const req = await base.get(fetchUrl);
      const movies = req.data.results;
      setRowMovies(req.data.results);
      // console.log(req.data.results);
      movies.map((movie) => {
        console.log(movie.media_type);
      });
      return req;
    }
    fetchingMovies();
  }, [fetchUrl]);

  rowMovies.map((movie) => {
    // console.log(movie.vote_average);
  });

  function handleDetailsButton(movie) {
    console.log(movie);
  }

  return (
    <div className="row">
      <div className="title">{title}</div>
      <div className="row__movies">
        {rowMovies.map((movie) => (
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
                  <button
                    className="details__button"
                    onClick={() => {
                      handleDetailsButton(movie);
                    }}
                  >
                    <Link to={`/movie/${movie.id}`}>Details</Link>
                  </button>
                  <button className="details__button">Add to Watchlist</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;

{
  /* <img src="" alt={`${movie.title || movie.name || movie.original_title}`} />; */
}
