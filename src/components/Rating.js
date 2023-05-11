import React, { useState } from "react";
import star from "../images/icon-star.svg";

import { Link } from "react-router-dom";

const Rating = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleOnFocus = (e) => {
    setSelectedRating(e.target.value);
    setButtonClicked(true);
  };
  return (
    <div className="container">
      <header>
        <div className="icon-background">
          <img src={star} className="star-icon" alt="orange star icon"></img>
        </div>

        <h3>How did we do?</h3>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </header>

      <div className="buttons">
        <button
          className="btn btn-margin-right"
          onFocus={handleOnFocus}
          value="1"
        >
          1
        </button>
        <button
          onFocus={handleOnFocus}
          className="btn btn-margin-right"
          value="2"
        >
          2
        </button>
        <button
          onFocus={handleOnFocus}
          className="btn btn-margin-right"
          value="3"
        >
          3
        </button>
        <button
          onFocus={handleOnFocus}
          className="btn btn-margin-right"
          value="4"
        >
          4
        </button>
        <button onFocus={handleOnFocus} className="btn" value="5">
          5
        </button>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <Link to="/card" state={{ selectedRating: selectedRating }}>
          <button type="submit" className="btn-submit">
            SUBMIT
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Rating;
