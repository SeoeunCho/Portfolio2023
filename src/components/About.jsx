import React from "react";

const About = () => {
  return (
    <section id="about" className="home-about" data-block="home-about">
      <div className="container">
        <div className="home-about__inner">
          <div className="home-about__section-heading">
            <h3 className="subtitle subtitle--regular subtitle--left">
              <div className="subtitle__brace">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 78" aria-hidden="true">
                  <path
                    fill="#FFFCE1"
                    d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
                  />
                </svg>
              </div>
              <p className="subtitle__label">Why GSAP®</p>
              <div className="subtitle__brace">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 78" aria-hidden="true">
                  <path
                    fill="#FFFCE1"
                    d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
                  />
                </svg>
              </div>
            </h3>
          </div>

          <div className="home-intro__copy">
            <h2 className="visually-hidden">
              GSAP allows you to effortlessly animate anything JS can touch. Delivering silky-smooth performance and unmatched support so
              you can focus on the fun stuff.
            </h2>
            <h2 className="body-xl">
              GSAP allows you to effortlessly animate anything JS can touch. Delivering silky-smooth performance and unmatched support so
              you can focus on the fun stuff.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
