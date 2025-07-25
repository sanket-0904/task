import React from "react";
import "./Whyus.css";
import image from "./../../assets/social-media.jpg";

const Whyus = () => {
  return (
    <>
      <div className="Whyus">
        <div className="demo">
          <h1>Why us?</h1>
          <img src={image} alt="" />
        </div>
        <div className="points">
          <div className="number">
            <span>
              <h1>01</h1>
            </span>
            <div>
              <h1>Feature 1</h1>
              <p>
                Learn by doing with live projects, real-world case studies, and
                expert mentorship.
              </p>
            </div>
          </div>
          <div className="number two">
            <span>
              <h1>02</h1>
            </span>
            <div>
              <h1>Feature 2</h1>
              <p>
                Learn by doing with live projects, real-world case studies, and
                expert mentorship.
              </p>
            </div>
          </div>
          <div className="number">
            <span>
              <h1>03</h1>
            </span>
            <div>
              <h1>Feature 3</h1>
              <p>
                Learn by doing with live projects, real-world case studies, and
                expert mentorship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whyus;
