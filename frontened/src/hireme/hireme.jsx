import "./hireme.css";
import{Link} from "react-router-dom"
export default function HireMe() {
  return (
    <section id="hire">
      {/* 🌈 Animated Gradient Background */}
      <div className="animated-bg"></div>

      {/* 💼 Hire Me Content */}
      <div className="hire-container">
        <h1>Let's Work Together 💼</h1>
        <p>
          I’m always open to exciting opportunities — whether it’s freelance
          work, a new project, or a full-time role. Let’s build something
          amazing together!
        </p>

        <form
          className="hire-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks for reaching out! I’ll get back to you soon 😊");
          }}
        >
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </form>

        <div className="hire-links">
          <Link href="mailto:vijaykaushik@email.com" className="hire-btn">
            ✉️ Email Me
          </Link>
          <Link
            href="/src/assets/VijayKaushik_Resume.pdf"
            className="hire-btn"
            download
          >
            📄 Download Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
