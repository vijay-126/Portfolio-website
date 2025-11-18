import "./contact.css";
import {Link} from "react-router-dom"
export default function Contact() {
  return (
    <section className="fade-in" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Me</h2>
          <p>
            I’d love to hear from you! Whether you have a question, a project idea, 
            or just want to say hello, feel free to reach out using the form or 
            my contact details below.
          </p>

          <div className="contact-details">
            <p><strong>Email:</strong> Kaushikvijay251@gmail.com</p>
            <p><strong>Phone:</strong> +91 9671795544</p>
            <p><strong>Location:</strong> Ganaur sonipat ,Haryana, India</p>
          </div>

          <div className="social-icons">
            <Link href="https://github.com/" target="_blank">🐙 GitHub</Link>
            <Link href="https://linkedin.com/" target="_blank">💼 LinkedIn</Link>
            <Link href="mailto:vijaykaushik@email.com">📧 Email</Link>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
