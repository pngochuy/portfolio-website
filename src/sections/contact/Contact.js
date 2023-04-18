import "./contact.css";
import data from "./data";

/* Import EmailJs */
import emailjs from "emailjs-com";
import React, { useRef } from "react";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c8qom3m",
        "template_c2eldrf",
        form.current,
        "pyo2MwTYGJV_JD4Od"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    alert("Send email successfully!");
  };

  return (
    <>
      <section id="contact">
        <div className="contact__title-highlight">
          <h2>Contact Me</h2>
        </div>
        <p>
          My inbox is always open - especially whether you want to contact or
          just want to say hi. I'll try my best to get back with you!
        </p>
        <div className="container contact__container">
          <div className="contact__platforms">
            {data.map((item, index) => (
              <article className="contact__platform">
                <span className="contact__platform-icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <h5>{item.desc}</h5>
                <a
                  href={item.contact}
                  className="btn primary contact__platform-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.message}
                </a>
              </article>
            ))}
          </div>

          <form action="" ref={form} onSubmit={sendEmail}>
            <div className="input-data">
              <input type="text" name="name" required />
              <div className="underline"></div>
              <label htmlFor="">Full Name</label>
            </div>
            <div className="input-data" name="email">
              <input type="text" name="email" required />
              <div className="underline"></div>
              <label htmlFor="">Email</label>
            </div>
            <textarea
              name="message"
              rows="20"
              placeholder="Message..."
              required
            ></textarea>
            <div className="button">
              <button type="submit" className="btn-custom">
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
