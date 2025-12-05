import "./contact.css";
import "../utils.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        "service_9cvfqgp",        
            "template_yu2o6yd"  ,
        form.current,
        {
          publicKey:"TdSJM9P03xSyPGmQP",      
        }
      );
            alert("Thanks for reaching out! I’ll get back to you soon 😊");

      form.current.reset();
      console.log(result.text);

    } catch (error) {
      alert("Failed to send message. Please try again.");
      console.error(error);

    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="fade-in" id="contact">
      <div className="animated-bg"></div>
      <div>

      <div className="contact-container">

        {/* Contact Info */}
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
            <p><strong>Location:</strong> Ganaur, Sonipat, Haryana, India</p>
          </div>

          <div className="social-icons">
            <a href="https://github.com/vijay-126" target="_blank" rel="noopener noreferrer">🐙 GitHub</a>
            <a href="https://www.linkedin.com/in/vijay-kaushik-a11616244" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
            
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <hr className="about-line" />
      </div>

    </section>
  );
}


         
    //  e.preventDefault();
          // }}