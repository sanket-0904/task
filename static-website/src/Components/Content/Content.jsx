import "./Content.css";
import bg from "../../assets/bg.jpg";
import Navbar from "../Navbar/Navbar";

const Content = () => {
  return (
    <div className="content-wrapper">
      <Navbar />
      <div className="content">
        <img id="bg" src={bg} alt="Digital Marketing Background" />
        <div className="contents">
          <h1>Unlock Digital Marketing Mastery with Beetle Digital!</h1>
          <p>
            Learn how to harness AI and automation tools to improve content
            creation, deepen customer insights, and boost social media
            production and distribution.
          </p>
          <div className="enroll">
            <button className="btn-enroll">Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
