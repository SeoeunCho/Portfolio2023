import { gsap } from "gsap";

const animate = () => {
  const tl = gsap.timeline({ ease: "power2.out", duration: 0.6 });
  const windmill = document.querySelector(".home-hero__flair--windmill>svg");
  const char = document.querySelector(".i>span");

  tl.from(windmill, {
    rotation: -360,
    duration: 1,
  });

  tl.to(windmill, {
    rotation: 90,
    duration: 0.3,
    repeat: -1,
    repeatDelay: 1,
  });

  tl.from(char, { duration: 0.1 });
  tl.to(char, {
    rotationX: 540,
    duration: 1.5,
    repeat: -1,
    repeatDelay: 3,
    yoyo: true,
    yoyoEase: "power2.out",
  });
};

const initSquiggleMouseMovement = () => {
  const squiggle = document.querySelector("#home-hero-squiggle");
  let windowWidth;
  let windowHeight;

  const setWindowSize = () => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
  };

  setWindowSize();

  const xTo = gsap.quickTo(squiggle, "xPercent", {
    duration: 1,
    ease: "power3",
  });
  const yTo = gsap.quickTo(squiggle, "yPercent", {
    duration: 1,
    ease: "power3",
  });
  const rotateTo = gsap.quickTo(squiggle, "rotation", {
    duration: 1,
    ease: "power3",
  });

  window.addEventListener("resize", () => {
    setWindowSize();
  });

  window.addEventListener("mousemove", (e) => {
    const xPercent = gsap.utils.mapRange(0, windowWidth, -20, 20, e.x);
    const yPercent = gsap.utils.mapRange(0, windowHeight, -20, 20, e.y);
    const rotateRange = gsap.utils.clamp(-1, 1, gsap.utils.mapRange(windowWidth * 0.25, windowWidth * 0.75, 1, -1, e.x));

    rotateTo(yPercent * 1 * rotateRange);
    xTo(xPercent);
    yTo(yPercent);
  });
};

export { animate, initSquiggleMouseMovement };
