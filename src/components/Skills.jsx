import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillsData } from "../constants/index";

const Skills = () => {
  const horizontalRef = useRef(null);
  const sectionRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const horizontal = horizontalRef.current;
    const sections = sectionRef.current;

    let scrollTween = gsap.to(sections, {
      xPercent: -200 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontal,
        start: "top 56px",
        end: () => "+=" + horizontal.offsetWidth,
        pin: true,
        scrub: 1,
        markers: false,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    return () => {
      scrollTween.kill();
    };
  }, []);

  return (
    <section id="skills">
      <div className="container">
        <div className="home-skills__inner">
          <div className="skills__wrap" ref={horizontalRef}>
            <div className="skills__fixed">
              SKILL <span>CARD</span>
            </div>
            <ul className="skills__panels">
              {skillsData.map((skill, i) => (
                <li className="skills__panel" key={i} ref={(el) => (sectionRef.current[i] = el)}>
                  <div className="skills__content">
                    <h3 className="skills__heading">
                      {skill.title}
                      {skill.logo.length !== 0 && i !== 1 ? (
                        <div className="skills__logo">
                          <img src={skill.logo[0]} alt="logo" />
                        </div>
                      ) : null}
                      {i === 1 ? (
                        <div className="skills__logo htmlcss">
                          <img src={skill.logo[0]} alt="logo" />
                          <img src={skill.logo[1]} alt="logo" />
                        </div>
                      ) : null}
                    </h3>
                    {skill.label ? (
                      <div className="skills__label">
                        <p>&#123;{skill.label}&#125;</p>
                      </div>
                    ) : null}
                    <ul className="skills__description">
                      {skill.desc.map((desc, i) => (
                        <li className="skills__desc" key={i} dangerouslySetInnerHTML={{ __html: desc }}></li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
