import React, { useState } from "react";
import { projectsData } from "../constants/index";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const Projects = () => {
  const [swiperIdx, setSwiperIdx] = useState(0);

  return (
    <section id="projects" className="home-projects" data-block="home-projects">
      <div className="container">
        <div className="home-projects__inner">
          <h3 className="heading-m">Projects</h3>
        </div>
      </div>
      <div className="projects__wrap">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={1000}
          loop={true}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={0}
          navigation={false}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
          onSlideChange={(swiper) => setSwiperIdx(swiper.realIndex)}>
          {projectsData.map((data, i) => (
            <SwiperSlide key={i}>
              <div className="projects-item">
                <a href="/">
                  <img src={data.video} alt="" />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="projects__details">
          <div className="projects__title">{projectsData[swiperIdx].title}</div>
          <div className="projects__label">
            <p>&#123;{projectsData[swiperIdx].stack}&#125;</p>
          </div>
          <div className="projects__menu-item--button">
            <a href={projectsData[swiperIdx].link[0]} target="_blank" className="button" data-block="button" rel="noreferrer">
              <span className="button__label">Get Code</span>
            </a>
            <a href={projectsData[swiperIdx].link[1]} target="_blank" className="button" data-block="button" rel="noreferrer">
              <span className="button__label">Check Demo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
