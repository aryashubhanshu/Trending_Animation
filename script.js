// Logo Title
gsap.fromTo(
  "#title",
  {
    y: -180,
    scale: 3.2,
  },
  {
    y: 0,
    scale: 1,
    duration: 1,
    scrollTrigger: {
      trigger: "#title",
      end: "bottom top",
      invalidateOnRefresh: true,
      scrub: 2,
      ease: "expoScale(0.5, 7, none)",
    },
  }
);

// Discover Section
const discover_tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".slide",
    start: "top 20%",
    scrub: 2,
    ease: "ease",
  },
});

discover_tl
  .to(".slide1", {
    y: 220,
  })
  .to(".slide2", {
    y: 220,
  })
  .to(".slide3", {
    y: 220,
  })
  .to(".slide4", {
    y: 220,
  });

// Image Section
gsap.to("#img_section2", {
  clipPath: "circle(100% at 50% 50%)",
  scrollTrigger: {
    trigger: "#image-section > .container",
    start: "top top",
    bottom: "bottom bottom",
    scrub: 2,
    pin: true,
    onEnter: () => {
      document.body.classList.add("dark-theme");
    },
    onLeaveBack: () => {
      document.body.classList.remove("dark-theme");
    },
  },
});
