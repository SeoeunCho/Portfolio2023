import React from "react";
import profileImg from "../assets/img/seoeuncho.png";
import blueStarImg from "../assets/img/blue-star.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
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
          {/* <h1 className="footer__title">
            깃헙으로 오시면 더 많은 작업물을 확인할 수 있습니다.
          </h1> */}
          {/* <div className="footer-github">
            <svg width="41" height="22" viewBox="0 0 41 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M40.002 11.001H0.501953M40.002 11.001L30.002 1.00098M40.002 11.001L30.002 21.001" stroke="#0E100F" />
            </svg>
          </div> */}
        </div>
      </div>
      <div className="footer-copy">
        <div className="container body-s">
          <p className="footer-copy__text">&copy;2023 SeoeunCho, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
