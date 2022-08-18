const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("fa-times");

  if (menuBtn.classList.contains("fa-times")) {
    navbar.style.clipPath = "circle(100%)";
  } else {
    navbar.style.clipPath = "circle(0%)";
  }
});
