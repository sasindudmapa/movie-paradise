import "./Banner.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../Utils/axios";
import requests, { baseImageUrl } from "../../Utils/requests";

function Banner() {
  const [bannerMovie, setBannerMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchingTrending);

      setBannerMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${baseImageUrl}${bannerMovie.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <div className="banner__title">
          {bannerMovie.title || bannerMovie.name || bannerMovie.original_title}
        </div>
        <div className="banner__des">{truncate(bannerMovie.overview, 150)}</div>
        <div className="banner__buttons">
          <button className="button play-btn" id="play-btn">
            <Link id="links" to={`/movie/${bannerMovie.id}`}>
              Play
            </Link>
          </button>
          <button className="button">Favourites</button>
          <button className="add__button">+</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
