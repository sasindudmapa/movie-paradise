import React from "react";
import "./Rview.css";

function Review({ author, rating, content }) {
  return (
    <div className="review">
      <div className="review">
        <div className="mini">
          <h1 className="authorName">{author}</h1>
          <h1 className="rating">{rating}</h1>
        </div>
        <p className="content">{content}</p>
      </div>
    </div>
  );
}

export default Review;


