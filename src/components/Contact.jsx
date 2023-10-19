import React from "react";
import contactIcon from "../assets/img/contact-icon.svg"

const Contact = () => {
  return (
    <section id="contact" className="home-contact" data-block="home-contact">
      <div className="contact__box">
        <div className="contact__wrap">
          <img src={contactIcon} width="148" alt="contact" />
          <div className="contact__content">
            <h1 className="contact__title">Contact Me</h1>
            <p className="contact__desc body-r">Find answers, learn from the pros, and share your knowledge.</p>
            <a href="/" className="button">
              <span>Send E-mail</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
