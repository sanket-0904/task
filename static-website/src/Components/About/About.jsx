import React from "react";
import "./About.css";
import line from "./../../../public/line.png"; // Assuming you have a line image for decoration

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-content">
          <div className="heading">
            <h1>ABOUT COURSE</h1>
            <img src={line} alt="" />
          </div>

          <p>
            Master the art of digital marketing with our hands-on course
            designed for beginners and professionals alike. Learn SEO, social
            media strategies, Google Ads, and analytics while working on live
            projects to earn an industry-recognized certification. Transform
            your career today!
          </p>
          <button className="btns">Get Started Now</button>
        </div>
        <div className="list">
          <h1>What's Inside the Beetle Digital Marketing Course?</h1>
          <ul>
            <li>Learn SEO, SEM, and Content Marketing.</li>
            <li>
              Master Social Media Strategies (Facebook, Instagram, LinkedIn).
            </li>
            <li>Hands-on experience with Google Ads and Analytics.</li>
            <li>Get access to live projects and real-time feedback.</li>
            <li>Industry-recognized certification.</li>
            <li>
              Master Social Media Strategies (Facebook, Instagram, LinkedIn).
            </li>
            <li>Get access to live projects and real-time feedback.</li>
          </ul>
        </div>
      </div>
      <div className="rating">
        <div className="cutomer">
          <div className="img">
            <div className="imgs"></div>
            <div className="imgs"></div>
            <div className="imgs"></div>
          </div>
          <div className="rating-content">
            <p>3,000+</p>
            <p>customers</p>
          </div>
        </div>
        <div className="star">
          <div>
            <i class="fa-solid fa-star"></i>
          </div>
          <div>
            <p>4.84 rating</p>
            <p>out of 5</p>
          </div>
        </div>
        <div className="master">
          <div className="master-content">
            <p>
              Curated essential tools you must master to save time, stay
              focused, and succeed.
            </p>
          </div>
          <div>
            <button className="btns">Enroll Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
