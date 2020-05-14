// ANIMATION FOR DROP DOWN HEADING

gsap.from(".main-heading", {
  y: -50,
  opacity: 0,
  duration: 2,
  ease: Power1.easeOut,
});
gsap.from("nav", {
  x: -30,
  opacity: 0,
  duration: 1,
  delay: 3,
  ease: Power1.easeOut,
});
