// ANIMATION FOR DROP DOWN HEADING

gsap.from("nav", {
  x: -30,
  opacity: 0,
  duration: 1,
  delay: 3,
  ease: Power1.easeOut,
});

let socialBtn = document.querySelector(".social-btn");

socialBtn.addEventListener("click", function () {
  let navbar = document.querySelector(".social");
  navbar.classList.toggle("active");
});

socialBtn.addEventListener("click", function () {
  socialBtn.classList.toggle("clicked");
});

// HOME REMOVE ALL

let homeBtn = document.querySelector(".home-click");

homeBtn.addEventListener("click", function homeIsActive() {
  let about = document.querySelector(".about");
  let portfolio = document.querySelector(".portfolio");
  about.classList.remove("about-active");
  portfolio.classList.remove("portfolio-active");
});

// ABOUT COME OUT

let aboutBtn = document.querySelector(".about-click");

aboutBtn.addEventListener("click", function aboutIsActive() {
  let portfolio = document.querySelector(".portfolio");
  let about = document.querySelector(".about");
  about.classList.toggle("about-active");
  portfolio.classList.remove("portfolio-active");
});

// PORTFOLIO COME OUT

let portfolioBtn = document.querySelector(".portfolio-click");

portfolioBtn.addEventListener("click", function portfolioIsActive() {
  let about = document.querySelector(".about");
  let portfolio = document.querySelector(".portfolio");
  portfolio.classList.toggle("portfolio-active");
  about.classList.remove("about-active");
});
