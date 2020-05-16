// ANIMATION FOR DROP DOWN HEADING

gsap.from("nav", {
  x: -30,
  opacity: 0,
  duration: 1,
  delay: 1,
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

// PRELOAD TYPEWRITER

window.addEventListener("load", function () {
  let preload = document.querySelector(".preload");
  preload.classList.remove("preload");
});

// HOME REMOVE ALL

let homeBtn = document.querySelector(".home-click");

homeBtn.addEventListener("click", function homeIsActive() {
  let about = document.querySelector(".about");
  let blog = document.querySelector(".blog");
  let portfolio = document.querySelector(".portfolio");
  about.classList.remove("about-active");
  portfolio.classList.remove("portfolio-active");
  blog.classList.remove("blog-active");
});

// ABOUT COME OUT

let aboutBtn = document.querySelector(".about-click");

aboutBtn.addEventListener("click", function aboutIsActive() {
  let portfolio = document.querySelector(".portfolio");
  let blog = document.querySelector(".blog");
  let about = document.querySelector(".about");
  about.classList.toggle("about-active");
  portfolio.classList.remove("portfolio-active");
  blog.classList.remove("blog-active");
});

// PORTFOLIO COME OUT

let portfolioBtn = document.querySelector(".portfolio-click");

portfolioBtn.addEventListener("click", function portfolioIsActive() {
  let about = document.querySelector(".about");
  let blog = document.querySelector(".blog");
  let portfolio = document.querySelector(".portfolio");
  portfolio.classList.toggle("portfolio-active");
  about.classList.remove("about-active");
  blog.classList.remove("blog-active");
});

// BLOG COME OUT

let blogBtn = document.querySelector(".blog-click");

blogBtn.addEventListener("click", function blogIsActive() {
  let about = document.querySelector(".about");
  let blog = document.querySelector(".blog");
  let portfolio = document.querySelector(".portfolio");
  blog.classList.toggle("blog-active");
  about.classList.remove("about-active");
  portfolio.classList.remove("portfolio-active");
});

// BLOG PAGES COME OUT

let pageToggle = document.querySelectorAll(".page-toggle");
let pages = document.querySelectorAll(".page");

for (let i = 0; i < pageToggle.length; i++) {
  pageToggle[i].addEventListener("click", function () {
    removeAll();
    pages[i].classList.toggle("active");
  });
}

function removeAll() {
  for (let i = 0; i < pageToggle.length; i++) {
    pages[i].classList.remove("active");
  }
}

// CROSS CLICKED

let crossToggle = document.querySelectorAll(".cross-clicked");

for (let i = 0; i < crossToggle.length; i++) {
  crossToggle[i].addEventListener("click", function () {
    pages[i].classList.remove("active");
  });
}
