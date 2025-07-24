import React from "react";
import "./Demo.css";
import bg from "./../../assets/bg.jpg";

const Demo = () => {
  return (
    <>
      <div className="main">
        <div className="demo">
          <h1 id="demo">get a demo</h1>
          <img src={bg} alt="" />
        </div>
        <div className="box">
          <h2>
            Up-skill, Earn Certifications, and Get Ready for a Digital Future!
          </h2>
          <div className="check-box">
            <div className="check">
              <input type="checkbox" />
              <label>Key Points</label>
            </div>
            <div className="check">
              <input type="checkbox" />
              <label>Key Points</label>
            </div>
            <div className="check">
              <input type="checkbox" />
              <label>Key Points</label>
            </div>
            <div className="check">
              <input type="checkbox" />
              <label>Key Points</label>
            </div>
          </div>
          <div className="input">
            <input type="text" placeholder="Enter Your Full Name" />
            <input type="text" placeholder="Enter Your E-mail Address" />
            <input type="text" placeholder="Contact Number" />
            <input type="text" placeholder="Select" />
          </div>
          <div className="box-btn">
            <button className="btns">Enroll Now</button>
            <i class="fa-solid fa-arrow-left fa-bounce"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;
