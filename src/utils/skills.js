import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollToPlugin);

const horizontalEffect = (horizon, section) => {
  const horizontal = horizon;
  const sections = section;

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: horizontal,
      start: "top top",
      end: () => "+=" + horizontal.offsetWidth,
      pin: true,
      scrub: 1,
      markers: false,
      // snap: {
      //   snapTo: 1 / (sections.length - 1),
      //   inertia: false,
      //   duration: { min: 0.1, max: 0.1 },
      // },
      invalidateOnRefresh: true,
      anticipatePin: 1,
    },
  });

  // let scrollTween = gsap.to(sections, {
  //   xPercent: -120 * (sections.length - 1),
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: horizontal,
  //     start: "top 56px",
  //     end: () => "+=" + horizontal.offsetWidth,
  //     pin: true,
  //     scrub: 1,
  //     markers: false,
  //     invalidateOnRefresh: true,
  //     anticipatePin: 1,
  //   },
  // });
};

export default horizontalEffect;
