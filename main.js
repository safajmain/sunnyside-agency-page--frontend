const mobileNavButon = document.querySelector(".mobile-menu");
const mobileNav = document.querySelector(".mobile-nav");

function displayMobileNav() {
  if (mobileNav.classList.contains("active")) {
    mobileNav.classList.remove("active");
    mobileNavButon.style.opacity = 1;
  } else {
    mobileNav.classList.add("active");
    mobileNavButon.style.opacity = 0.5;
  }
}

mobileNavButon.addEventListener("click", displayMobileNav);