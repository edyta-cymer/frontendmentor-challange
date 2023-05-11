import React from "react";
// import { useLocation } from "react-router-dom";
import illustration from "../images/illustration-thank-you.svg";

const ThankYou = ({ selectedRating }) => {
  // const location = useLocation();

  return (
    <div className="container container-center">
      <img src={illustration} alt="Thank you" className="illustration" />
      <div className="orange-box">
        <p className="orange-rate">You selected {selectedRating} out of 5</p>
      </div>
      <h3 className="h3-thank-you">Thank You!</h3>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankYou;
