import React from "react";
import requests from "../../Utils/requests";
import NavBar from "../NavBar/NavBar";
import Banner from "./Banner";
import Row from "./Row";

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <Banner />
      <Row title="Trending Now" fetchUrl={requests.fetchingTrending} />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Top Action" fetchUrl={requests.fetchActionMovie} />
    </div>
  );
}

export default Home;
