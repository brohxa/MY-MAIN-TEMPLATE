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

// ABOUT COME OUT

let aboutBtn = document.querySelector(".about-click");

aboutBtn.addEventListener("click", function () {
  let about = document.querySelector(".about");
  about.classList.toggle("about-active");
});

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(document.querySelectorAll("*"), function (el) {
  if (el.offsetWidth > docWidth) {
    console.log(el);
  }
});
