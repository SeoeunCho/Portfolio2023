import React, { useEffect } from "react";
import worm from "../assets/img/worm.png";

const Intro = () => {
  return (
    <section id="intro" className="home-hero" data-block="home-hero">
      <div className="container">
        <div className="home-hero__inner">
          <div className="home-hero__heading">
            <h1 className="visually-hidden">Frontend Develop</h1>
            <h1 id="home-hero-heading" className="home-hero__heading-text heading-xl" aria-hidden="true">
              <span className="home-hero__frontend">
                <span className="f">
                  <span className="clip">
                    <span>F</span>
                  </span>
                </span>
                <span className="r">
                  <div className="home-hero__flair home-hero__flair--circles" style={{ display: "none" }}>
                    <svg
                      viewBox="0 0 156 156"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M45.9341 76.316C43.4159 76.8454 40.8068 77.1236 38.1333 77.1236C17.0729 77.1236 0 59.8589 0 38.5618C0 17.2647 17.0729 0 38.1333 0C59.1938 0 76.2666 17.2647 76.2666 38.5618C76.2666 40.3457 76.1469 42.1013 75.915 43.8209H80.0849C79.853 42.1013 79.7332 40.3457 79.7332 38.5618C79.7332 17.2647 96.8061 0 117.867 0C138.927 0 156 17.2647 156 38.5618C156 59.8589 138.927 77.1236 117.867 77.1236C115.499 77.1236 113.182 76.9054 110.934 76.4879V79.5128C113.182 79.0953 115.499 78.8771 117.867 78.8771C138.927 78.8771 156 96.1418 156 117.439C156 138.736 138.927 156.001 117.867 156.001C96.8064 156.001 79.7335 138.736 79.7335 117.439C79.7335 114.736 80.0086 112.097 80.5319 109.551H75.6376C76.0508 111.825 76.2667 114.169 76.2667 116.564C76.2667 137.861 59.1938 155.126 38.1334 155.126C17.0729 155.126 6.30037e-05 137.861 6.30037e-05 116.564C6.30037e-05 95.2671 17.0729 78.0024 38.1334 78.0024C40.8068 78.0024 43.416 78.2806 45.9341 78.8099V76.316Z"
                        fill="url(#paint0_radial_1336_100489)"
                      />
                      <path
                        fillOpacity=".6"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M45.9341 76.316C43.4159 76.8454 40.8068 77.1236 38.1333 77.1236C17.0729 77.1236 0 59.8589 0 38.5618C0 17.2647 17.0729 0 38.1333 0C59.1938 0 76.2666 17.2647 76.2666 38.5618C76.2666 40.3457 76.1469 42.1013 75.915 43.8209H80.0849C79.853 42.1013 79.7332 40.3457 79.7332 38.5618C79.7332 17.2647 96.8061 0 117.867 0C138.927 0 156 17.2647 156 38.5618C156 59.8589 138.927 77.1236 117.867 77.1236C115.499 77.1236 113.182 76.9054 110.934 76.4879V79.5128C113.182 79.0953 115.499 78.8771 117.867 78.8771C138.927 78.8771 156 96.1418 156 117.439C156 138.736 138.927 156.001 117.867 156.001C96.8064 156.001 79.7335 138.736 79.7335 117.439C79.7335 114.736 80.0086 112.097 80.5319 109.551H75.6376C76.0508 111.825 76.2667 114.169 76.2667 116.564C76.2667 137.861 59.1938 155.126 38.1334 155.126C17.0729 155.126 6.30037e-05 137.861 6.30037e-05 116.564C6.30037e-05 95.2671 17.0729 78.0024 38.1334 78.0024C40.8068 78.0024 43.416 78.2806 45.9341 78.8099V76.316Z"
                        fill="url(#pattern-home-hero-circles-0)"
                        style={{ mixBlendMode: "multiply" }}
                      />
                      <defs>
                        <pattern
                          id="pattern-home-hero-circles-0"
                          patternContentUnits="objectBoundingBox"
                          width="0.641025"
                          height="0.641023">
                          <use xlinkHref="#svg-noise" transform="scale(0.00128205)" />
                        </pattern>
                        <radialGradient
                          id="paint0_radial_1336_100489"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(48.0022 111.876) rotate(-90) scale(122.883 122.883)">
                          <stop stopColor="#E193FF" />
                          <stop offset="0.6721" stopColor="#8E78DA" />
                          <stop offset="0.7378" stopColor="#937DDB" />
                          <stop offset="0.8164" stopColor="#A28BDD" />
                          <stop offset="0.9014" stopColor="#BAA3E2" />
                          <stop offset="0.9905" stopColor="#DBC3E7" />
                          <stop offset="1" stopColor="#DFC7E8" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  <span className="clip">
                    <span>
                      <span>r</span>
                    </span>
                  </span>
                </span>
                <span className="o">
                  <div className="home-hero__flair home-hero__flair--windmill">
                    <svg
                      viewBox="0 0 137 135"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true">
                      <path
                        d="M84.1148 67.3453H136.194C136.637 67.3453 137 67.7028 137 68.1397V134.043C137 134.484 136.633 134.845 136.186 134.841C99.0222 134.416 68.9737 104.827 68.502 68.2191V134.206C68.502 134.643 68.1392 135 67.6958 135H0.814284C0.366822 135 -2.06673e-05 134.639 0.00401052 134.198C0.439379 97.2879 30.9354 67.5042 68.498 67.5002H0.806238C0.362807 67.5002 0 67.1427 0 66.7057V0.802561C0 0.361644 0.366822 0.000171863 0.814284 0.00414409C37.9778 0.429172 68.0263 30.0183 68.498 66.6263V0.794617C68.498 0.357672 68.8608 0.000171819 69.3042 0.000171819H136.186C136.633 0.000171819 137 0.361644 136.996 0.802561C136.621 32.4969 114.079 58.94 83.9334 65.7802C83.0022 65.9907 83.1594 67.3453 84.1189 67.3453H84.1148Z"
                        fill="url(#paint0_linear_1655_45397)"
                      />
                      <path
                        d="M84.1148 67.3453H136.194C136.637 67.3453 137 67.7028 137 68.1397V134.043C137 134.484 136.633 134.845 136.186 134.841C99.0222 134.416 68.9737 104.827 68.502 68.2191V134.206C68.502 134.643 68.1392 135 67.6958 135H0.814284C0.366822 135 -2.06673e-05 134.639 0.00401052 134.198C0.439379 97.2879 30.9354 67.5042 68.498 67.5002H0.806238C0.362807 67.5002 0 67.1427 0 66.7057V0.802561C0 0.361644 0.366822 0.000171863 0.814284 0.00414409C37.9778 0.429172 68.0263 30.0183 68.498 66.6263V0.794617C68.498 0.357672 68.8608 0.000171819 69.3042 0.000171819H136.186C136.633 0.000171819 137 0.361644 136.996 0.802561C136.621 32.4969 114.079 58.94 83.9334 65.7802C83.0022 65.9907 83.1594 67.3453 84.1189 67.3453H84.1148Z"
                        fill="url(#pattern-home-hero-windmill-0)"
                        fillOpacity="0.6"
                        style={{ mixBlendMode: "multiply" }}
                      />
                      <defs>
                        <pattern id="pattern-home-hero-windmill-0" patternContentUnits="objectBoundingBox" width="1.45985" height="1.48148">
                          <use xlinkHref="#svg-noise" transform="scale(0.00291971 0.00296296)" />
                        </pattern>
                        <linearGradient
                          id="paint0_linear_1655_45397"
                          x1="-76.6791"
                          y1="-15.6157"
                          x2="165.682"
                          y2="81.0082"
                          gradientUnits="userSpaceOnUse">
                          <stop offset="0.427083" stopColor="#FF8709" />
                          <stop offset="0.791667" stopColor="#F7BDF8" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <span>o</span>
                </span>
                <span className="n">
                  <span>n</span>
                </span>
                <span className="t">
                  <div className="home-hero__flair home-hero__flair--star" style={{ display: "none" }}>
                    <svg
                      viewBox="0 0 157 156"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M82.2214 104.04L105.483 143.586C108.242 148.276 114.274 149.852 118.974 147.112V147.112C123.675 144.371 125.275 138.345 122.552 133.634L99.5971 93.9091L144.009 105.424C149.276 106.79 154.656 103.639 156.042 98.3773V98.3773C157.428 93.1154 154.298 87.7233 149.042 86.317L104.72 74.4593L144.266 51.1978C148.957 48.439 150.533 42.407 147.792 37.7062V37.7062C145.052 33.0054 139.026 31.4057 134.314 34.1282L94.5898 57.0835L106.105 12.6719C107.471 7.40463 104.32 2.02469 99.058 0.638673V0.638673C93.7961 -0.747342 88.4041 2.38242 86.9977 7.63895L75.14 51.9603L51.8786 12.4142C49.1197 7.72403 43.0878 6.14763 38.387 8.8883V8.8883C33.6862 11.629 32.0865 17.6548 34.809 22.3662L57.7643 62.0908L13.3526 50.5758C8.08539 49.2101 2.70545 52.3607 1.31944 57.6226V57.6226C-0.0665745 62.8845 3.06319 68.2766 8.31971 69.6829L52.6411 81.5406L13.095 104.802C8.4048 107.561 6.8284 113.593 9.56907 118.294V118.294C12.3097 122.994 18.3356 124.594 23.0469 121.872L62.7716 98.9164L51.2566 143.328C49.8909 148.595 53.0414 153.975 58.3034 155.361V155.361C63.5653 156.747 68.9573 153.617 70.3637 148.361L82.2214 104.04Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M82.2214 104.04L105.483 143.586C108.242 148.276 114.274 149.852 118.974 147.112V147.112C123.675 144.371 125.275 138.345 122.552 133.634L99.5971 93.9091L144.009 105.424C149.276 106.79 154.656 103.639 156.042 98.3773V98.3773C157.428 93.1154 154.298 87.7233 149.042 86.317L104.72 74.4593L144.266 51.1978C148.957 48.439 150.533 42.407 147.792 37.7062V37.7062C145.052 33.0054 139.026 31.4057 134.314 34.1282L94.5898 57.0835L106.105 12.6719C107.471 7.40463 104.32 2.02469 99.058 0.638673V0.638673C93.7961 -0.747342 88.4041 2.38242 86.9977 7.63895L75.14 51.9603L51.8786 12.4142C49.1197 7.72403 43.0878 6.14763 38.387 8.8883V8.8883C33.6862 11.629 32.0865 17.6548 34.809 22.3662L57.7643 62.0908L13.3526 50.5758C8.08539 49.2101 2.70545 52.3607 1.31944 57.6226V57.6226C-0.0665745 62.8845 3.06319 68.2766 8.31971 69.6829L52.6411 81.5406L13.095 104.802C8.4048 107.561 6.8284 113.593 9.56907 118.294V118.294C12.3097 122.994 18.3356 124.594 23.0469 121.872L62.7716 98.9164L51.2566 143.328C49.8909 148.595 53.0414 153.975 58.3034 155.361V155.361C63.5653 156.747 68.9573 153.617 70.3637 148.361L82.2214 104.04Z"
                        fill="url(#paint0_radial_1413_80169)"
                      />
                      <path
                        fillOpacity=".6"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M82.2214 104.04L105.483 143.586C108.242 148.276 114.274 149.852 118.974 147.112V147.112C123.675 144.371 125.275 138.345 122.552 133.634L99.5971 93.9091L144.009 105.424C149.276 106.79 154.656 103.639 156.042 98.3773V98.3773C157.428 93.1154 154.298 87.7233 149.042 86.317L104.72 74.4593L144.266 51.1978C148.957 48.439 150.533 42.407 147.792 37.7062V37.7062C145.052 33.0054 139.026 31.4057 134.314 34.1282L94.5898 57.0835L106.105 12.6719C107.471 7.40463 104.32 2.02469 99.058 0.638673V0.638673C93.7961 -0.747342 88.4041 2.38242 86.9977 7.63895L75.14 51.9603L51.8786 12.4142C49.1197 7.72403 43.0878 6.14763 38.387 8.8883V8.8883C33.6862 11.629 32.0865 17.6548 34.809 22.3662L57.7643 62.0908L13.3526 50.5758C8.08539 49.2101 2.70545 52.3607 1.31944 57.6226V57.6226C-0.0665745 62.8845 3.06319 68.2766 8.31971 69.6829L52.6411 81.5406L13.095 104.802C8.4048 107.561 6.8284 113.593 9.56907 118.294V118.294C12.3097 122.994 18.3356 124.594 23.0469 121.872L62.7716 98.9164L51.2566 143.328C49.8909 148.595 53.0414 153.975 58.3034 155.361V155.361C63.5653 156.747 68.9573 153.617 70.3637 148.361L82.2214 104.04Z"
                        fill="url(#pattern-home-hero-star-0)"
                        style={{ mixBlendMode: "multiply" }}
                      />
                      <defs>
                        <pattern id="pattern-home-hero-star-0" patternContentUnits="objectBoundingBox" width="0.625" height="0.625">
                          <use xlinkHref="#svg-noise" transform="scale(0.00125)" />
                        </pattern>
                        <radialGradient
                          id="paint0_radial_1413_80169"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(124.192 87.08) rotate(149.757) scale(126.034)">
                          <stop stopColor="#FFEBE7" />
                          <stop offset="0.6721" stopColor="#FF9C7C" />
                          <stop offset="0.8164" stopColor="#FF9983" />
                          <stop offset="0.9014" stopColor="#FF774B" />
                          <stop offset="1" stopColor="#E76F00" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  <span className="clip">
                    <span>t</span>
                  </span>
                </span>
                <span className="e">
                  <span className="clip">
                    <span>e</span>
                  </span>
                </span>
                <span className="n2 clip">
                  <span>n</span>
                </span>
                <span className="d clip">
                  <span>d</span>
                </span>
              </span>
              <span className="home-hero__develop">
                <span className="d clip">
                  <span>d</span>
                </span>
                <span className="e clip">
                  <span>e</span>
                </span>
                <span className="v">
                  <span>v</span>
                </span>
                <span className="e2">
                  <span>e</span>
                </span>
                <span className="l">
                  <div className="home-hero__flair home-hero__flair--bolt" style={{ display: "none" }}>
                    <svg viewBox="0 0 134 229" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path
                        id="bolt-path"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M101.08 11C102.439 11 103.402 12.3264 102.982 13.6187L78.6746 88.3335C78.2542 89.6259 79.2175 90.9522 80.5765 90.9522H108.983C110.634 90.9522 111.574 92.8401 110.579 94.1577L10.2304 227L39.4408 125.708C39.8095 124.429 38.8499 123.154 37.5191 123.154H7.82733C6.44727 123.154 5.48193 121.789 5.94147 120.488L44.1353 12.334C44.4176 11.5346 45.1733 11 46.0211 11H101.08Z"
                        stroke="#0AE448"
                        strokeWidth="4"
                      />
                      <mask
                        id="mask0_1413_68143"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="134"
                        height="227">
                        <rect id="bolt-rect" width="134" height="227" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_1413_68143)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M102.08 10C103.439 10 104.402 11.3264 103.982 12.6187L79.6746 87.3335C79.2542 88.6259 80.2175 89.9522 81.5765 89.9522H109.983C111.634 89.9522 112.574 91.8401 111.579 93.1577L11.2304 226L40.4408 124.708C40.8095 123.429 39.8499 122.154 38.5191 122.154H8.82733C7.44727 122.154 6.48193 120.789 6.94147 119.488L45.1353 11.334C45.4176 10.5346 46.1733 10 47.0211 10H102.08Z"
                          fill="#0AE448"
                        />
                      </g>
                    </svg>
                  </div>
                  <div id="home-hero-squiggle" className="home-hero__flair home-hero__flair--worm" style={{ display: "none" }}>
                    <img src={worm} alt="worm" />
                  </div>
                  <span className="clip">
                    <span>l</span>
                  </span>
                </span>
                <span className="o">
                  <span>o</span>
                </span>
                <span className="p clip">
                  <span>p</span>
                </span>
              </span>
            </h1>
          </div>
          <div className="home-hero__subtitle">
            <h3 className="subtitle subtitle--large subtitle--left" datablock="subtitle" datadelay="2.5">
              <div className="subtitle__brace">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 78" aria-hidden="true">
                  <path
                    fill="#FFFCE1"
                    d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
                  />
                </svg>
              </div>
              <p className="subtitle__label">GSAP – A wildly robust JavaScript animation library built for professionals</p>
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
          <div className="home-hero__button">
            <div className="get-gsap-btn get-gsap-btn--fill" datablock="get-gsap-btn">
              <a href="/" className="get-gsap-btn__button button button--stroke">
                <span className="get-gsap-btn__word">
                  <span className="button__label">Go</span>
                </span>
                <span className="get-gsap-btn__word">
                  <span className="button__label">GITHUB</span>
                  <span className="button__icon">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 11" aria-hidden="true">
                        <path fill="#fffce1" d="M4.055 0v7.71l-3-3L0 5.79l4.805 4.804 4.804-4.805-1.054-1.078-3 3V0h-1.5Z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 11" aria-hidden="true">
                        <path fill="#fffce1" d="M4.055 0v7.71l-3-3L0 5.79l4.805 4.804 4.804-4.805-1.054-1.078-3 3V0h-1.5Z" />
                      </svg>
                    </span>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
