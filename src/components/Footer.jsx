import React from "react";
import profileImg from "../assets/img/seoeuncho.png";
import blueStarImg from "../assets/img/blue-star.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer_icon">
            <a href="https://github.com/SeoeunCho" className="github" target="_blank" rel="noreferrer">
              <span className="visually-hidden">github</span>
            </a>
            <a
              href="https://enchanting-drip-66d.notion.site/Secho-661e000688d04abf94686ae02d8983ff?pvs=4"
              className="notion"
              target="_blank"
              rel="noreferrer">
              <span className="visually-hidden">notion</span>
            </a>
            <a href="https://open.kakao.com/o/sTuSneIf" className="kakao" target="_blank" rel="noreferrer">
              <span className="visually-hidden">kakao</span>
            </a>
          </div>
          <div className="footer_copyright">© 2023. Cho Seo Eun. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
