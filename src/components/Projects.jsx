import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { projectsData } from "../constants/index";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const Projects = () => {
  const [swiperIdx, setSwiperIdx] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isActiveInfo, setIsActiveInfo] = useState(false);
  const projectRef = useRef(null);

  const handleScroll = () => {
    setIsActive(true);
  };

  const createDiv = () => {
    const prevBtn = document.querySelector(".swiper-button-prev");
    const nextBtn = document.querySelector(".swiper-button-next");

    const div = document.createElement("div");
    prevBtn.classList.add("button");
    prevBtn.appendChild(div);

    const div2 = document.createElement("div");
    nextBtn.classList.add("button");
    nextBtn.appendChild(div2);
  };

  useEffect(() => {
    projectRef.current.addEventListener("mouseover", handleScroll);
    createDiv();
  }, []);

  return (
    <section id="projects" className="home-projects" data-block="home-projects" ref={projectRef}>
      <div className="container">
        <div className="home-projects__inner">
          <h3 className="heading-m">Projects</h3>
        </div>
      </div>
      <div className="projects__wrap">
        <Swiper
          speed={1000}
          loop={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={0}
          navigation={true}
          breakpoints={{
            900: {
              slidesPerView: 3,
            },
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          onSlideChange={(swiper) => setSwiperIdx(swiper.realIndex)}>
          {projectsData.map((data, i) => (
            <SwiperSlide key={i}>
              <div className="projects-item">
                <ReactPlayer
                  className="projects-item__video"
                  url={data.video}
                  muted={true}
                  loop={true}
                  playing={i === swiperIdx && isActive ? true : false}
                  width={"100%"}
                  height={"100%"}
                />
                <div className="item__info">
                  <div>{data.info}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="projects__details">
            <div className="projects__detail">
              <span className="projects__title">{projectsData[swiperIdx].title}</span>
              <span className="projects__info">
                <span className="icon" onClick={() => setIsActiveInfo((prev) => !prev)}></span>
                <div
                  className={isActiveInfo ? "header__dropdown header__dropdown--tools active" : "header__dropdown header__dropdown--tools"}>
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
                        <a href="/" className="header__dropdown-link" aria-current="page">
                          {projectsData[swiperIdx].info}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </span>
            </div>
            <div className="projects__label">
              <p>&#123;{projectsData[swiperIdx].stack}&#125;</p>
            </div>
            <div className="projects__menu-item--button">
              <a href={projectsData[swiperIdx].link[0]} target="_blank" className="button-demo" data-block="button" rel="noreferrer">
                <span className="button__label">Demo</span>
                <span className="button__label-arrow"></span>
              </a>
              <a href={projectsData[swiperIdx].link[1]} target="_blank" className="button" data-block="button" rel="noreferrer">
                <span className="button__label pc">View Code for this Project</span>
                <span className="button__label mobile">Github</span>
              </a>
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
