import "./about.css";
export default function About() {
  return (
    <section  className="fade-in" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src="/src/assets/my.jpg" alt="Vijay Kaushik" className="about-pic" />
        </div>

        <div className="about-text">
          <h2>About Me</h2>
          <h3>Front-End Developer & UI Designer</h3>
          <p>
            Hello! I'm <strong>Vijay Kaushik</strong>, a passionate front-end web developer
            and UI designer who loves building clean, modern, and responsive websites.
            I specialize in creating interactive digital experiences using
            <strong> React, JavaScript, and Tailwind CSS</strong>.
          </p>
          <p>
            My goal is to craft visually stunning designs that offer seamless user
            experiences. I enjoy turning complex ideas into elegant and functional
            web interfaces that users love to interact with.
          </p>
          <button className="about-btn">Download CV</button>
        </div>
      </div>
    </section>
  );
}
