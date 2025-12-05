import "./about.css";
import "../utils.css"
import { useState } from "react";

export default function About() {
  const [animate, setAnimate] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setAnimate(true);

    // navigate after animation duration
    setTimeout(() => {
      window.location.href = "/service";
    }, 2000); // matches animation duration
  };

  return (
    <section className="fade-in" id="about">
      <div className="about-container">
        <div className="about-image">
          <img
            src="/src/assets/about.png"
            alt="Vijay Kaushik"
            className="about-pic"
          />
        </div>

        <div className="about-text">
          <h2>About Me</h2>
          <h3>Front-End Developer & UI Designer</h3>
          <p>
            Hello! I'm <span><strong>Vijay Kaushik</strong></span>, a passionate
            front-end web developer and UI designer who loves building clean,
            modern, and responsive websites. I specialize in creating interactive
            digital experiences using <strong>React, JavaScript, and Tailwind CSS</strong>.
          </p>
          <p>
            My goal is to craft visually stunning designs that offer seamless
            user experiences. I enjoy turning complex ideas into elegant and
            functional web interfaces that users love to interact with.
          </p>
        </div>

        <hr className="about-line" />

        {/* Only updated button to trigger animation */}
        <button className="Skill-link" onClick={handleClick}>
          Skill & Project <i className="fa-solid fa-magnifying-glass-arrow-right"></i>
        </button>
      </div>

      {/* Animation overlay */}
      {animate && (
        <div className="man-container man-animate">
          <div className="man"></div>
          <div className="rope rope-animate"></div>
        </div>
      )}
    </section>
  );
}
