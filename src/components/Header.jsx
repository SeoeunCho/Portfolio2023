import React from "react";
import logo from "../assets/img/logo.png";
import headerShapes from "../assets/img/header-shapes.png";

const Header = () => {
  return (
    <header id="header" className="header" role="banner">
      <div className="container container--wide">
        <div className="header__inner">
          <a href="#intro" className="header__logo">
            <img src={logo} alt="logo" />
          </a>
          <button id="menu-toggle" className="header__menu-toggle" tabIndex="0">
            Menu
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="15" fill="none" viewBox="0 0 33 15">
              <path
                fill="#FFFCE1"
                fillRule="evenodd"
                d="M.834 1.646a1 1 0 0 1 1-1h30a1 1 0 1 1 0 2h-30a1 1 0 0 1-1-1Z"
                clipRule="evenodd"></path>
              <path
                fill="#FFFCE1"
                fillRule="evenodd"
                d="M.834 7.646a1 1 0 0 1 1-1h30a1 1 0 1 1 0 2h-30a1 1 0 0 1-1-1Z"
                clipRule="evenodd"></path>
              <path
                fill="#FFFCE1"
                fillRule="evenodd"
                d="M.834 13.646a1 1 0 0 1 1-1h30a1 1 0 1 1 0 2h-30a1 1 0 0 1-1-1Z"
                clipRule="evenodd"></path>
            </svg>
          </button>
          <div className="header__nav">
            <nav>
              <ul className="header__menu">
                <li className="header__menu-item header__menu-item--has-submenu">
                  <a href="#intro" className="header__menu-link" aria-expanded="false">
                    Home
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
                          <a href="/core/" className="header__dropdown-link">
                            Core
                          </a>
                        </li>
                        <li className="header__menu-item">
                          <a href="/scroll/" className="header__dropdown-link">
                            Scroll
                          </a>
                        </li>
                        <li className="header__menu-item">
                          <a href="/svg/" className="header__dropdown-link">
                            SVG
                          </a>
                        </li>
                        <li className="header__menu-item">
                          <a href="/ui/" className="header__dropdown-link">
                            UI
                          </a>
                        </li>
                        <li className="header__menu-item">
                          <a href="/text/" className="header__dropdown-link">
                            Text
                          </a>
                        </li>
                      </ul>
                      <ul className="header__dropdown-menu header__dropdown-menu--2">
                        <li className="header__menu-item">
                          <a href="/docs/v3/Installation" className="header__dropdown-link">
                            Installation
                          </a>
                        </li>
                        <li className="header__menu-item">
                          <a
                            href="https://stackblitz.com/@GreenSockLearning/collections"
                            target="_blank"
                            className="header__dropdown-link"
                            rel="noreferrer">
                            Starter Templates
                          </a>
                        </li>
                        <li className="header__menu-item">
                          <a href="/resources/React" className="header__dropdown-link">
                            GSAP &amp;React
                          </a>
                        </li>
                        <li className="header__menu-item">
                          <a href="https://www.youtube.com/@GreenSockLearning" className="header__dropdown-link">
                            Video Lessons
                          </a>
                        </li>
                      </ul>
                      <div className="header__dropdown-footer">
                        <p>Professional-grade JavaScript animation for the modern web</p>
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
                  <a href="#career" className="header__menu-link">
                    Career
                  </a>
                </li>
                <li className="header__menu-item">
                  <a href="#projects" className="header__menu-link">
                    Projects
                  </a>
                </li>
                <li className="header__menu-item">
                  <a href="#contact" className="header__menu-link">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <nav>
              <ul className="header__menu header__menu--secondary">
                <li className="header__menu-item header__menu-item--button">
                  <a
                    href="https://github.com/SeoeunCho/Portfolio2023"
                    target="_blank"
                    className="button button--stroke"
                    data-block="button"
                    rel="noreferrer">
                    <span className="button__flair"></span>
                    <span className="button__label">GITHUB</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div id="mobile-nav" className="mobile-nav"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
