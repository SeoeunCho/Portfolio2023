import React, { useEffect } from "react";
import { stringEffect, handEffect } from "../utils/about";

const About = () => {
  useEffect(() => {
    stringEffect();
    // handEffect();
  }, []);

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
              <p className="subtitle__label">About Me</p>
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
            <h2 className="body-xl">
              안녕하세요 <span className="hand">👋</span> <br />
              꾸준히 업데이트하는 프론트엔드 개발자 조서은입니다.
              <span className="split">
                더 효율적인 방식이 무엇일까? 가독성 좋은 코드와 유지보수에 좋은 코드를 작성하기 위해 고민하고 발전시키기 위해 노력합니다.
                새로운 기술에 호기심이 많고 도전하여 얻은 경험을 공유하는 것을 좋아합니다.
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
