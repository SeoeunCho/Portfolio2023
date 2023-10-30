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
              </div>
            </SwiperSlide>
          ))}
          <div className="projects__details">
            <div className="projects__title">{projectsData[swiperIdx].title}</div>
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
