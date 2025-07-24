import React from "react";
import "./Content.css";
import bg from "./../../assets/bg.jpg";
import Navbar from "../Navbar/Navbar";

const Content = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <img id="bg" src={bg} alt="" />
        <div className="contents">
          <h1>UNLOCK DIGITAL MARKETING MASTERY WITH BEETLE DIGITAL!</h1>
          <p>
            Learn how to harness Al and automation tools to improve content
            creation, deepen customer insights, boost social media production
            and distribution.
          </p>
          <div className="enroll">
            <button className="btns">Enroll Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
