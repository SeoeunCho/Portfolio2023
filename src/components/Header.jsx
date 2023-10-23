import React, { useState } from "react";
// import logo from "../assets/img/logo.png";
// import logoBlack from "../assets/img/logo-b.png";
import headerShapes from "../assets/img/header-shapes.png";

const Header = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive((prev) => !prev);
  };

  return (
    <header id="header" className="header" role="banner">
      <div className="container container--wide">
        <div className="header__inner">
          <a href="#intro" className={isActive ? "header__logo active" : "header__logo"}></a>
          <button
            id="menu-toggle"
            className={isActive ? "header__menu-toggle active" : "header__menu-toggle"}
            tabIndex="0"
            onClick={handleToggle}>
            Menu
            <div className={isActive ? "ham active" : "ham"}>
              <span className="bar"></span>
            </div>
          </button>
          <div className="header__nav">
            <nav>
              <ul className="header__menu">
                <li className="header__menu-item header__menu-item--has-submenu">
                  <a href="#intro" className="header__menu-link" aria-expanded="false">
                    Site Map
                  </a>
                  <div className="header__dropdown header__dropdown--tools">
                    <div className="header__dropdown-wrapper">
                      <svg className="header__dropdown-notch" xmlns="http://www.w3.org/2000/svg" width="45" height="17" fill="none">
                        <path
                          fill="#161614"
                          d="M37.214 12.85a7 7 0 0 0 4.95 2.05H45V17H0v-2.1h2.564a7 7 0 0 0 4.95-2.05l9.9-9.9a7 7 0 0 1 9.9 0l9.899 9.9Z"></path>
                        <path
                          fill="#FFFCE1"
                          d="M42.164 16a9 9 0 0 1-6.364-2.636l-9.9-9.9a5 5 0 0 0-7.071 0l-9.9 9.9A9 9 0 0 1 2.565 16H0v-2h2.565a7 7 0 0 0 4.95-2.05l9.9-9.9a7 7 0 0 1 9.9 0l9.899 9.9a7 7 0 0 0 4.95 2.05H45v2h-2.836Z"></path>
                      </svg>
                      <ul className="header__dropdown-menu header__dropdown-menu--1">
                        <li className="header__menu-item">
                          <a href="#about" className="header__dropdown-link">
                            About
                          </a>
                        </li>
                        <li className="header__menu-item">
                          <a href="#skills" className="header__dropdown-link">
                            Skills
                          </a>
                        </li>
                        <li className="header__menu-item">
                          <a href="#projects" className="header__dropdown-link">
                            Projects
                          </a>
                        </li>
                        <li className="header__menu-item">
                          <a href="#career" className="header__dropdown-link">
                            Career
                          </a>
                        </li>
                        <li className="header__menu-item">
                          <a href="#contact" className="header__dropdown-link">
                            Contact
                          </a>
                        </li>
                      </ul>
                      <ul className="header__dropdown-menu">
                        <li className="header__menu-item">
                          <a href="https://github.com/SeoeunCho" target="_blank" className="header__dropdown-link" rel="noreferrer">
                            Github
                          </a>
                        </li>
                        <li className="header__menu-item">
                          <a
                            href="https://enchanting-drip-66d.notion.site/Secho-661e000688d04abf94686ae02d8983ff?pvs=4"
                            target="_blank"
                            className="header__dropdown-link"
                            rel="noreferrer">
                            Notion Resume
                          </a>
                        </li>
                        <li className="header__menu-item">
                          <a
                            href="https://SeoeunCho.github.io/Portfolio01"
                            target="_blank"
                            className="header__dropdown-link"
                            rel="noreferrer">
                            Another Portfolio
                          </a>
                        </li>
                        <li className="header__menu-item">
                          <a href="https://open.kakao.com/o/sTuSneIf" target="_blank" className="header__dropdown-link" rel="noreferrer">
                            KakaoTalk
                          </a>
                        </li>
                      </ul>
                      <div className="header__dropdown-footer">
                        <p>꾸준히 업데이트하는 프론트엔드 개발자 조서은의 포트폴리오입니다.</p>
                        <div className="header__dropdown-footer-asset">
                          <img alt="" loading="lazy" decoding="async" src={headerShapes} width="450" height="322" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="header__menu-item">
                  <a href="#about" className="header__menu-link" aria-current="page">
                    About
                  </a>
                </li>
                <li className="header__menu-item">
                  <a href="#skills" className="header__menu-link">
                    Skills
                  </a>
                </li>
                <li className="header__menu-item">
                  <a href="#projects" className="header__menu-link">
                    Projects
                  </a>
                </li>
                <li className="header__menu-item">
                  <a href="#career" className="header__menu-link">
                    Career
                  </a>
                </li>
                <li className="header__menu-item">
                  <a href="#contact" className="header__menu-link">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className="header__menu">
              <div className="header__menu-item--button">
                <a
                  href="https://github.com/SeoeunCho/Portfolio2023"
                  target="_blank"
                  className="button"
                  data-block="button"
                  rel="noreferrer">
                  <span className="button__label">Go GITHUB</span>
                </a>
              </div>
            </div>
          </div>
          <div id="mobile-nav" className={isActive ? "mobile-nav active" : "mobile-nav"}>
            <div id="mobile-nav-background" className="mobile-nav__background"></div>
            <div
              id="mobile-nav-panel-1"
              className={isActive ? "mobile-nav__panel mobile-nav__panel--primary active" : "mobile-nav__panel mobile-nav__panel--primary"}>
              <div className="mobile-nav__menu-wrapper">
                <nav className="mobile-nav__menu">
                  <ul className="mobile-nav__list">
                    <li className="mobile-nav__item">
                      <a className="mobile-nav__link" href="#about">
                        About
                      </a>
                    </li>
                    <li className="mobile-nav__item">
                      <a className="mobile-nav__link" href="#skills">
                        Skills
                      </a>
                    </li>
                    <li className="mobile-nav__item">
                      <a className="mobile-nav__link" href="#projects">
                        Projects
                      </a>
                    </li>
                    <li className="mobile-nav__item">
                      <a className="mobile-nav__link" href="#career">
                        Career
                      </a>
                    </li>
                    <li className="mobile-nav__item">
                      <a className="mobile-nav__link" href="#contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div
              id="mobile-nav-panel-2"
              className={
                isActive ? "mobile-nav__panel mobile-nav__panel--secondary active" : "mobile-nav__panel mobile-nav__panel--secondary"
              }>
              <nav className="mobile-nav__menu">
                <ul className="mobile-nav__list">
                  <li className="mobile-nav__item">
                    <a
                      className="mobile-nav__link mobile-nav__link--small"
                      href="https://github.com/SeoeunCho"
                      target="_blank"
                      rel="noreferrer">
                      Github
                    </a>
                  </li>
                  <li className="mobile-nav__item">
                    <a
                      className="mobile-nav__link mobile-nav__link--small"
                      href="https://enchanting-drip-66d.notion.site/Secho-661e000688d04abf94686ae02d8983ff?pvs=4"
                      target="_blank"
                      rel="noreferrer">
                      Notion Resume
                    </a>
                  </li>
                  <li className="mobile-nav__item">
                    <a
                      className="mobile-nav__link mobile-nav__link--small"
                      href="https://SeoeunCho.github.io/Portfolio01"
                      target="_blank"
                      rel="noreferrer">
                      Another Portfolio
                    </a>
                  </li>
                  <li className="mobile-nav__item">
                    <a
                      className="mobile-nav__link mobile-nav__link--small"
                      href="https://open.kakao.com/o/sTuSneIf"
                      target="_blank"
                      rel="noreferrer">
                      KakaoTalk
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="mobile-nav__asset">
                <img alt="" loading="lazy" decoding="async" src={headerShapes} width="450" height="322" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
