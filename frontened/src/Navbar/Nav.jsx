import "./nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
 let [Text ,setText]= useState("Vijay");

 let chngeText=()=>{
  setText("Vijay Kaushik");
  console.log("change");
 }
 let resetText=()=>{
  setText("Vijay");
  console.log("change");
 }

  return (
    <>
      <section id="nav-bar">
        <nav>
          <div className="nav-logo">
          <img  id="logo-img" src="/src/assets/logo.png" alt="img" />

            <h2 onMouseEnter={chngeText} onMouseLeave={resetText}>{Text}</h2>
          </div>
          <div>
            <ul className="nav-bar">
              <li className="nav-link"><Link to="/">Home</Link></li>
              <li className="nav-link"><Link to="/about"> About Me</Link></li>
              <li className="nav-link"><Link to="/service"> Craft</Link></li>
              <li className="nav-link"><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <a href="/Resume.pdf" target="_blank" className="about-btn" >
          <span >Download CV</span>
            </a>
          </div>
        </nav>
      </section>
    </>
  );
}
