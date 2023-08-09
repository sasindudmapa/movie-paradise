import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { baseImageUrl } from "../../Utils/requests";
import NavBar from "../NavBar/NavBar";
import "./DP.css";
import Review from "./Review";

function DetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [reviews, setReviews] = useState([]);

  let originalReviews = "";

  useEffect(() => {
    async function fetchingMovieDts() {
      await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=0011195c1370cf6aacc00fd083a0c318&language=en-US`
      )
        .then((response) => response.json())
        .then((data) => {
          setMovie(data);
        });
    }
    fetchingMovieDts();
  }, [movieId]);

  useEffect(() => {
    async function fetchingReviews() {
      await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}/reviews?api_key=0011195c1370cf6aacc00fd083a0c318&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then((data) => {
          const reviews = data.results;
          setReviews(reviews);
        });
    }
    fetchingReviews();
  }, [movieId]);

  return (
    <div className="movie">
      <NavBar />
      <div
        className="bg__image"
        style={{
          backgroundImage: `url(${baseImageUrl}${movie.backdrop_path})`,
        }}
      >
        <div className="details">
          <div className="dt__title">
            {movie.title || movie.name || movie.original_title}
          </div>
          <div className="dt__des">{movie.overview}</div>
          <div className="buttons dt__btns">
            <button className="button dt__btn">Play</button>
            <button className="button dt__btn">Download</button>
            <button className="button dt__btn">Add to WatchList</button>
          </div>
        </div>
      </div>
      <div className="details--fadeBottom"></div>
      <div className="movie__details">
        {originalReviews !== ""
          ? originalReviews.map((review) => {
              return (
                <Review
                  author={review.author}
                  rating={review.author_details.rating}
                  content={review.content}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}

export default DetailsPage;
