import React from "react";
import "./Goals.css";
import line from "./../../../public/line.png";
import toole from "./../../assets/tools.png";

const Goals = () => {
  const points = [
    "Boost Your Lead Generation: Learn proven strategies to attract and convert potential customers.",
    "Enhance Your Marketing Skills: Gain hands-on experience with the latest digital marketing tools.",
    "Grow Your Business: Implement effective techniques to increase your revenue and reach.",
  ];

  return (
    <div className="goals">
      <div className="heading">
        <h2>It will help you to:</h2>
        <span>
          <h1>GOALS</h1>
          <img src={line} alt="underline" />
        </span>
      </div>

      <div className="goals-points">
        {points.map((text, index) => (
          <div className="check-point" key={index}>
            <i className="fa-solid fa-check"></i>
            <p>
              <b>{text.split(":")[0]}:</b> {text.split(":")[1]}
            </p>
          </div>
        ))}
      </div>
      <div className="tools">
        <div className="tools-img">
          <img src={toole} alt="" />
        </div>
        <div className="gray-img">
          <div className="gray"></div>
          <div className="gray"></div>
          <div className="gray"></div>
          <div className="gray"></div>
          <div className="gray"></div>
          <div className="gray"></div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
