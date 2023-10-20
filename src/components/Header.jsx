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
                      <ul className="header__dropdown-menu header__dropdown-menu--2">
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
            <nav>
              <ul className="header__menu header__menu--secondary">
                <li className="header__menu-item header__menu-item--button">
                  <a
                    href="https://github.com/SeoeunCho/Portfolio2023"
                    target="_blank"
                    className="button"
                    data-block="button"
                    rel="noreferrer">
                    <span className="button__label">Go GITHUB</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div id="mobile-nav" class="mobile-nav">
            <div id="mobile-nav-background" class="mobile-nav__background"></div>
            <div id="mobile-nav-panel-1" class="mobile-nav__panel mobile-nav__panel--primary">
              <div class="mobile-nav__menu-wrapper">
                <nav class="mobile-nav__menu">
                  <ul class="mobile-nav__list">
                    <li class="mobile-nav__item">
                      <button id="mobile-nav-toggle" class="mobile-nav__link">
                        Tools
                      </button>
                      <svg id="accordion-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                        <path fill="#000" fill-rule="evenodd" d="M4 10V0h2v10H4Z" clip-rule="evenodd"></path>
                        <path fill="#000" fill-rule="evenodd" d="M0 4h10v2H0V4Z" clip-rule="evenodd"></path>
                      </svg>
                      <ul id="mobile-nav-accordion" class="mobile-nav__list mobile-nav__list--secondary">
                        <li class="mobile-nav__item">
                          <a href="/core/" class="mobile-nav__link mobile-nav__link--medium">
                            Core
                          </a>
                        </li>
                        <li class="mobile-nav__item">
                          <a href="/scroll/" class="mobile-nav__link mobile-nav__link--medium">
                            Scroll
                          </a>
                        </li>
                        <li class="mobile-nav__item">
                          <a href="/svg/" class="mobile-nav__link mobile-nav__link--medium">
                            SVG
                          </a>
                        </li>
                        <li class="mobile-nav__item">
                          <a href="/ui/" class="mobile-nav__link mobile-nav__link--medium">
                            UI
                          </a>
                        </li>
                        <li class="mobile-nav__item">
                          <a href="/text/" class="mobile-nav__link mobile-nav__link--medium">
                            Text
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="mobile-nav__item">
                      <a class="mobile-nav__link" href="/pricing/" aria-current="page">
                        Pricing
                      </a>
                    </li>
                    <li class="mobile-nav__item">
                      <a class="mobile-nav__link" href="/showcase/">
                        Showcase
                      </a>
                    </li>
                    <li class="mobile-nav__item">
                      <a class="mobile-nav__link" href="/resources/">
                        Resources
                      </a>
                    </li>
                    <li class="mobile-nav__item">
                      <a class="mobile-nav__link" href="/community/">
                        Community
                      </a>
                    </li>
                    <li class="mobile-nav__item">
                      <a class="mobile-nav__link" href="/docs/v3/">
                        Docs
                      </a>
                    </li>
                  </ul>
                  <ul class="mobile-nav__list">
                    <li class="mobile-nav__item">
                      <button id="mobile-login-open" class="mobile-nav__link mobile-nav__link--small js-guest-ui">
                        Login/Create Account
                      </button>
                    </li>
                    <li class="mobile-nav__item js-member-ui">
                      <button id="mobile-account-open" class="js-account-mobile"></button>
                    </li>
                  </ul>
                </nav>
              </div>
              <nav id="mobile-account-panel" class="mobile-nav__hidden mobile-account">
                <button id="mobile-account-close" class="mobile-account__close">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                    <path
                      fill="#0E100F"
                      d="M9.96 5.086 3.587 11.46 3.07 12l.516.54 6.375 6.374 1.078-1.078-5.086-5.086H21v-1.5H5.953l5.086-5.086-1.078-1.078Z"></path>
                  </svg>
                </button>
                <div class="user user--light js-account-submenu"></div>
                <ul class="mobile-account__list">
                  <li class="mobile-account__link">
                    <a href="/community/account-dashboard">Dashboard</a>
                  </li>
                  <li class="mobile-account__link">
                    <a href="/community/clients/orders">Orders &amp;Billing</a>
                  </li>
                  <li class="mobile-account__link">
                    <a href="/community/settings">Account Settings</a>
                  </li>
                  <li class="mobile-account__link">
                    <a class="js-logout" href="#">
                      Logout
                    </a>
                  </li>
                  <li class="mobile-account__link mobile-account__link--small mobile-account__link--messages" data-count="2">
                    <a href="/community/messenger/">Messages</a>
                  </li>
                  <li class="mobile-account__link mobile-account__link--small" data-count="2">
                    <a href="/community/notifications/">Notifications</a>
                  </li>
                </ul>
              </nav>
              <nav id="mobile-login-panel" class="mobile-nav__hidden mobile-login">
                <button id="mobile-login-close" class="mobile-login__close">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                    <path
                      fill="#0E100F"
                      d="M9.96 5.086 3.587 11.46 3.07 12l.516.54 6.375 6.374 1.078-1.078-5.086-5.086H21v-1.5H5.953l5.086-5.086-1.078-1.078Z"></path>
                  </svg>
                </button>
                <h4 class="mobile-login__title">Sign In</h4>
                <form class="mobile-form" action="/community/login/" method="post">
                  <div class="mobile-form-group">
                    <input type="hidden" name="_processLogin" value="usernamepassword" />
                    <input type="hidden" name="csrfKey" />
                    <input type="hidden" name="remember_me" value="0" />
                    <input type="hidden" name="remember_me_checkbox" value="1" />
                    <input type="email" class="mobile-input heading-s" name="auth" placeholder="Email Address" />
                    <input type="password" class="mobile-input heading-s" name="password" placeholder="Password" />
                  </div>
                  <button type="submit" class="button button--fill" data-block="button">
                    <span class="button__flair"></span>
                    <span class="button__label">Login</span>
                  </button>
                  <a class="mobile-form__link" href="/community/lostpassword/">
                    Forgot your password?
                  </a>
                </form>
                <h4 class="mobile-login__subtitle">Not got an account?</h4>
                <a href="/community/register" class="button button--stroke" data-block="button">
                  <span class="button__flair"></span>
                  <span class="button__label">Create an Account</span>
                </a>
              </nav>
            </div>
            <div id="mobile-nav-panel-2" class="mobile-nav__panel mobile-nav__panel--secondary">
              <nav class="mobile-nav__menu">
                <ul class="mobile-nav__list">
                  <li class="mobile-nav__item">
                    <a class="mobile-nav__link mobile-nav__link--small" href="https://codepen.io/GreenSock">
                      CodePen
                    </a>
                  </li>
                  <li class="mobile-nav__item">
                    <a class="mobile-nav__link mobile-nav__link--small" href="https://github.com/greensock/GreenSock-JS/">
                      GitHub
                    </a>
                  </li>
                  <li class="mobile-nav__item">
                    <a class="mobile-nav__link mobile-nav__link--small" href="https://www.facebook.com/greensock/">
                      Facebook
                    </a>
                  </li>
                  <li class="mobile-nav__item">
                    <a class="mobile-nav__link mobile-nav__link--small" href="https://www.linkedin.com/company/greensock">
                      LinkedIn
                    </a>
                  </li>
                  <li class="mobile-nav__item">
                    <a class="mobile-nav__link mobile-nav__link--small" href="https://www.twitter.com/greensock/">
                      Twitter
                    </a>
                  </li>
                </ul>
              </nav>
              <div class="mobile-nav__asset">
                <img alt="" loading="lazy" decoding="async" src="/img/header-shapes.png" width="450" height="322" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
