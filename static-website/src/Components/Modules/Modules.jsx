import React from "react";
import "./Modules.css";
import img from "./../../assets/laptop.jpg";
import line from "./../../../public/line.png";

const Modules = () => {
  return (
    <>
      <div className="modules">
        <div className="digital">
          <h1>digital marketing course</h1>
          <div className="digital-points">
            <div className="module-div">
              <div className="module-content">
                <h2>Session 1 Name</h2>
                <p>Foundations of Digital Marketing</p>{" "}
              </div>
              <div className="boxicons"></div>
            </div>
            <div className="module-div">
              <div className="module-content">
                <h2>Session 1 Name</h2>
                <p>Foundations of Digital Marketing</p>{" "}
              </div>
              <div className="boxicons"></div>
            </div>
            <div className="module-div">
              <div className="module-content">
                <h2>Session 1 Name</h2>
                <p>Foundations of Digital Marketing</p>{" "}
              </div>
              <div className="boxicons"></div>
            </div>
            <span className="span-btn">
              <button className="btns">Enroll now</button>
              <p>
                Accelerate your professional career with more than 17 sessions
              </p>
            </span>
          </div>
        </div>
        <div className="module-img">
          <span className="module-underline">
            <h1>MODULES</h1>
            <img src={line} alt="" />
          </span>

          <img src={img} alt="" />
        </div>
      </div>
      <div className="arrow">
        <h2>
          Struggling to attract leads and grow your business? This course is
          your game-changer
        </h2>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </>
  );
};

export default Modules;
