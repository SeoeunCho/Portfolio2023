import React from "react";
import profileImg from "../assets/img/seoeuncho.png";
import blueStarImg from "../assets/img/blue-star.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner"></div>
        {/* <div className="footer-top">
          <div className="profile-img">
            <div>
              <img src={profileImg} alt="조서은" />
              <img src={blueStarImg} alt="" />
            </div>
            <div className="profile-info">
              <div>
                <h3>조서은</h3>
                <p>1995. 12. 14</p>
                <p>Front-End Developer</p>
                <p> jowestsilver@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="site-menu">
            <div>
              <p>Site Map</p>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#career">Career</a>
              <a href="#contact">Contact</a>
            </div>
            <div>
              <p>Contact</p>
              <a href="#about">Github</a>
              <a href="#skills">Notion Resume</a>
              <a href="#projects">Another Portfolio</a>
              <a href="#career">KakaoTalk</a>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className="footer-copy">
        <div className="container body-s">
          <p className="footer-copy__text">&copy;2023 SeoeunCho, Inc. All rights reserved.</p>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
