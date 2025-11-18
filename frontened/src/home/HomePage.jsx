import { Link } from "react-router-dom";
import "./home.css";

export default function HomePage() {
  return (
    <>
      <section className="fade-in" id="home" >
         <div className="animated-bg">
        <div className="circles">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
        <div id="home-page">
          <div className="text-home">
            <h3>Hi, I am</h3>
            <h1>Vijay Kaushik</h1>
            <h2>Front-End Web Developer / UI Designer</h2>
            <p>
              I design and develop modern, responsive websites and web applications
              using technologies like React, JavaScript, and Tailwind CSS. My passion
              lies in crafting interactive digital experiences that are both visually
              appealing and highly functional.
            </p>
            <Link className="btn" to="/hireme">Hire Me</Link>
          </div>

          <div className="img-home">
            <img className="my-image" src="/src/assets/my.jpg" alt="Vijay Kaushik" />
          </div>
        </div>
      </section>
    </>
  );
}
