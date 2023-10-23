import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const setupMenuTimelines = () => {
  const toggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const mobileNavBackground = document.getElementById("mobile-nav-background");
  const mobileNavPanel1 = document.getElementById("mobile-nav-panel-1");
  const mobileNavPanel2 = document.getElementById("mobile-nav-panel-2");
  const togglePaths = document.getElementById("menu-toggle").querySelectorAll("path");
  const togglePathTop = togglePaths[0];
  const togglePathMiddle = togglePaths[1];
  const togglePathBottom = togglePaths[2];
  // Menu toggle timeline
  const tlMenuToggle = gsap.timeline({
    paused: true,
    defaults: {
      duration: 0.13,
      ease: "power2.inOut",
    },
  });

  tlMenuToggle
    .to(togglePathMiddle, {
      opacity: 0,
      scaleX: 0,
      transformOrigin: "50% 50%",
    })
    .to(
      togglePathTop,
      {
        y: 6,
        rotate: 45,
        scaleX: 0.625,
        transformOrigin: "50% 50%",
      },
      ">-0.1"
    )
    .to(
      togglePathBottom,
      {
        y: -6,
        rotate: -45,
        scaleX: 0.625,
        transformOrigin: "50% 50%",
      },
      "<"
    )
    .to(
      togglePaths,
      {
        x: 4,
      },
      0
    );

  // Mobile menu timeline
  const tlMobileMenu = gsap.timeline({
    paused: true,
    onReverseComplete: () => {
      // If the menu was scrolled previously return it to the top
      gsap.set(mobileNav, { scrollTop: 0 });
    },
  });

  tlMobileMenu
    .fromTo(
      mobileNav,
      {
        visibility: "hidden",
      },
      {
        visibility: "visible",
      }
    )
    .to(
      mobileNavBackground,
      {
        opacity: 1,
        ease: "power3.out",
        duration: 0.3,
      },
      0
    )
    .to(
      toggle,
      {
        color: "#0e100f",
      },
      0
    )
    // .to(
    //   [logoG, logoLettersPath],
    //   {
    //     fill: "#0E100F",
    //   },
    //   0
    // )
    // .to(
    //   [logoGLine],
    //   {
    //     backgroundColor: "#0E100F",
    //   },
    //   0
    // )
    .fromTo(
      mobileNavPanel1,
      {
        xPercent: -100,
      },
      {
        xPercent: 0,
        ease: "power3.out",
        duration: 0.3,
      },
      0.2
    )
    .fromTo(
      mobileNavPanel2,
      {
        xPercent: 100,
      },
      {
        xPercent: 0,
        ease: "power3.out",
        duration: 0.3,
      },
      "<+0.1"
    );
};

export { setupMenuTimelines };
