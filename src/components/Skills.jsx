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
      xPercent: -120 * (sections.length - 1),
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
    // console.log("scrollTween", scrollTween);

    return () => {
      scrollTween.kill();
    };
  }, []);

  return (
    <section id="skills" ref={horizontalRef}>
      <div className="container">
        <div className="home-skills__inner">
          <div className="skills__fixed">
            <h2>Skill Card</h2>
          </div>
          <div className="skills__wrap">
            <ul className="skills__panels">
              {skillsData.map((skill, i) => (
                <li className="skills__panel" key={i} ref={(el) => (sectionRef.current[i] = el)}>
                  <div className="skills__content">
                    <h3 className="body-4 skills__heading">{skill.title}</h3>
                    {skill.label ? (
                      <div className="skills__label">
                        <p>&#123;{skill.label}&#125;</p>
                      </div>
                    ) : null}
                    <ul className="skills__description">
                      {skill.desc.map((desc, i) => (
                        <li className="skills__desc" key={i}>
                          {desc}
                        </li>
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
