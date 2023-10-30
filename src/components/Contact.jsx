import React from "react";
import contactIcon from "../assets/img/contact-icon.svg";

const Contact = () => {
  return (
    <section id="contact" className="home-contact" data-block="home-contact">
      <div className="container">
        <div className="contact__box">
          <div className="contact__wrap">
            <img src={contactIcon} width="148" alt="contact" />
            <div className="contact__content">
              <h1 className="contact__title">Contact Me</h1>
              <p className="contact__desc body-r">
                꾸준히 업데이트하는 프론트엔드 개발자 조서은입니다.
                <br />
                궁금한 점이 있으시면 메일로 연락주세요.
              </p>
              <a href="mailto:jowestsilver@gmail.com" className="button">
                <span>Send E-mail</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
