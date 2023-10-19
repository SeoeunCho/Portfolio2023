import React from "react";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <nav class="grid" aria-label="Footer Navigation">
          <div class="col-12 col-tablet-5">
            <form class="footer-global__form">
              <fieldset>
                <legend class="body-m">Subscribe to the Seoeun &reg;newsletter to stay up-to-date with the latest releases</legend>
                <div class="field footer-global__email">
                  <label class="label visually-hidden" for="email">
                    Email <span class="req">*</span>
                  </label>
                  <input type="email" id="email" name="email" placeholder="Email Address" required />
                  <button class="footer-global__button" type="submit" aria-label="Submit">
                    <svg width="41" height="22" viewBox="0 0 41 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M40.002 11.001H0.501953M40.002 11.001L30.002 1.00098M40.002 11.001L30.002 21.001" stroke="#0E100F" />
                    </svg>
                  </button>
                  <p class="js-email-feedback"></p>
                </div>
              </fieldset>
            </form>
          </div>
          <div class="col-12 col-tablet-6 col-desktop-5 col-tablet-start-7 col-desktop-start-8">
            <div class="grid">
              <div class="col-12 col-mobileLarge-2 col-tablet-4 footer__nav-container">
                <h2 class="footer__label">Company</h2>
                <div class="footer__nav">
                  <ul class="footer__menu">
                    <li class="footer__menu-item">
                      <a href="/about/" class="footer__menu-link">
                        About
                      </a>
                    </li>
                    <li class="footer__menu-item">
                      <a href="/blog/" class="footer__menu-link">
                        Blog
                      </a>
                    </li>
                    <li class="footer__menu-item">
                      <a href="/community/contact" class="footer__menu-link">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-6 col-tablet-4 footer__nav-container">
                <h2 class="footer__label">GSAP</h2>
                <div class="footer__nav">
                  <ul class="footer__menu">
                    <li class="footer__menu-item">
                      <a href="/pricing/" class="footer__menu-link">
                        Pricing
                      </a>
                    </li>
                    <li class="footer__menu-item">
                      <a href="/showcase/" class="footer__menu-link">
                        Showcase
                      </a>
                    </li>
                    <li class="footer__menu-item">
                      <a href="/resources/" class="footer__menu-link">
                        Resources
                      </a>
                    </li>
                    <li class="footer__menu-item">
                      <a href="/community/" class="footer__menu-link">
                        Community
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-6 col-tablet-4 footer__nav-container">
                <h2 class="footer__label">Connect</h2>
                <div class="footer__nav">
                  <ul class="footer__menu">
                    <li class="footer__menu-item">
                      <a href="https://codepen.io/GreenSock" class="footer__menu-link" target="_blank" rel="noopener noreferrer">
                        Codepen
                      </a>
                    </li>
                    <li class="footer__menu-item">
                      <a
                        href="https://github.com/greensock/GreenSock-JS"
                        class="footer__menu-link"
                        target="_blank"
                        rel="noopener noreferrer">
                        GitHub
                      </a>
                    </li>
                    <li class="footer__menu-item">
                      <a href="https://www.facebook.com/greensock" class="footer__menu-link" target="_blank" rel="noopener noreferrer">
                        Facebook
                      </a>
                    </li>
                    <li class="footer__menu-item">
                      <a
                        href="https://www.linkedin.com/company/greensock"
                        class="footer__menu-link"
                        target="_blank"
                        rel="noopener noreferrer">
                        LinkedIn
                      </a>
                    </li>
                    <li class="footer__menu-item">
                      <a href="https://www.twitter.com/greensock" class="footer__menu-link" target="_blank" rel="noopener noreferrer">
                        X
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div class="footer-copy">
        <div class="container body-s">
          <p class="footer-copy__text">&copy;2023 SeoeunCho, Inc. All rights reserved.</p>
          <nav class="footer-copy__nav" aria-label="Copyright Navigation">
            <ul class="footer-copy__menu">
              <li class="footer-copy__menu-item">
                <a href="/community/privacy-policy/" class="footer-copy__menu-link">
                  &nbsp;Privacy Policy.
                </a>
              </li>
              <li class="footer-copy__menu-item">
                <a href="/community/terms-of-use/" class="footer-copy__menu-link">
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
