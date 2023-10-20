import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-global">
        <div className="container">
          <nav className="grid" aria-label="Footer Navigation">
            <div className="col-12 col-tablet-5">
              <form className="footer-global__form">
                <fieldset>
                  <legend className="body-m">깃헙으로 오시면 더 많은 </legend>
                  <div className="field footer-global__email">
                    <label className="label visually-hidden" htmlFor="email">
                      Email <span className="req">*</span>
                    </label>
                    <input type="email" id="email" name="email" placeholder="Email Address" required />
                    <button className="footer-global__button" type="submit" aria-label="Submit">
                      <svg width="41" height="22" viewBox="0 0 41 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M40.002 11.001H0.501953M40.002 11.001L30.002 1.00098M40.002 11.001L30.002 21.001" stroke="#0E100F" />
                      </svg>
                    </button>
                    <p className="js-email-feedback"></p>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="col-12 col-tablet-6 col-desktop-5 col-tablet-start-7 col-desktop-start-8">
              <div className="grid">
                <div className="col-tablet-4 footer__nav-container">
                  <h2 className="footer__label">Site Map</h2>
                  <div className="footer__nav">
                    <ul className="footer__menu">
                      <li className="footer__menu-item">
                        <a href="#intro" className="footer__menu-link" rel="noopener noreferrer">
                          Home
                        </a>
                      </li>
                      <li className="footer__menu-item">
                        <a href="#about" className="footer__menu-link" rel="noopener noreferrer">
                          About
                        </a>
                      </li>
                      <li className="footer__menu-item">
                        <a href="#skills" className="footer__menu-link" rel="noopener noreferrer">
                          Skills
                        </a>
                      </li>
                      <li className="footer__menu-item">
                        <a href="#projects" className="footer__menu-link" rel="noopener noreferrer">
                          Projects
                        </a>
                      </li>
                      <li className="footer__menu-item">
                        <a href="#career" className="footer__menu-link" rel="noopener noreferrer">
                          Career
                        </a>
                      </li>
                      <li className="footer__menu-item">
                        <a href="#contact" className="footer__menu-link" rel="noopener noreferrer">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="footer-copy">
        <div className="container body-s">
          <p className="footer-copy__text">&copy;2023 SeoeunCho, Inc. All rights reserved.</p>
          <nav className="footer-copy__nav" aria-label="Copyright Navigation">
            <ul className="footer-copy__menu">
              <li className="footer-copy__menu-item">
                <a href="/community/privacy-policy/" className="footer-copy__menu-link">
                  &nbsp;Privacy Policy.
                </a>
              </li>
              <li className="footer-copy__menu-item">
                <a href="/community/terms-of-use/" className="footer-copy__menu-link">
                  &nbsp;Terms of Use.
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
