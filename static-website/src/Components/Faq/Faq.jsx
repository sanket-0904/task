import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <>
      <div className="faq">
        <div className="faq-heading">
          <h1>FREQUENTLY ASKED QUESTIONS</h1>
        </div>
        <div className="faq-div">
          <details>
            <summary>
              1. Who can benefit the most from this digital marketing course?
            </summary>
            <p>We offer a 30-day return policy on all items.</p>
          </details>
          <details>
            <summary>
              2. Do I need any prior knowledge or experience in marketing to
              join this course?
            </summary>
            <p>We offer a 30-day return policy on all items.</p>
          </details>
          <details>
            <summary>
              3. Are there hands-on projects or practical assignments included
              in the course?
            </summary>
            <p>We offer a 30-day return policy on all items.</p>
          </details>
        </div>

        <div className="join-section">
          <div className="join-text">
            <h2>Start Your Digital Marketing Journey Today!</h2>
            <p>
              Unlock opportunities, transform your career, and achieve your
              goals.
            </p>
          </div>

          <div className="join-cta">
            <i class="fa-solid fa-arrow-right"></i>
            <button className="join-btn">Join the course now !</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
