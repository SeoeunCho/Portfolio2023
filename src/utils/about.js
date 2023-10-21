import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const stringEffect = () => {
  const targets = gsap.utils.toArray(".split");

  targets.forEach((target) => {
    let SplitClient = new SplitType(target, { type: "lines, words, chars" });
    let chars = SplitClient.chars;

    gsap.from(chars, {
      yPercent: 100,
      autoAlpha: 0,
      duration: 1,
      ease: "circ.out",
      stagger: {
        amount: 1,
        from: "random",
      },
      scrollTrigger: {
        trigger: target,
        start: "top bottom",
        end: "+=400",
        markers: false,
      },
    });
  });
};

const handEffect = () => {
  const tl = gsap.timeline({ ease: "power2.out", duration: 0.6 });
  const hand = document.querySelector(".hand");
  console.log(hand)

  tl.from(hand, {
    // rotation: 10,
    // duration: 1,
  });

  tl.to(hand, {
    rotation: 20,
    duration: 0.5,
    repeat: -1,
    repeatDelay: 2,
  });
};

export { stringEffect, handEffect };
