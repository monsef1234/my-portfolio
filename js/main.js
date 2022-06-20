// Landing Img animation
const img = document.querySelector(".landing img");
const imgAnimation = () => {
  if (window.scrollY >= img.getBoundingClientRect().top) {
    img.style.transform = `translateY(${window.scrollY}px)`;
  } else {
    img.style.transform = `translateY(0px)`;
  }
};
window.addEventListener("scroll", imgAnimation);
//PreLoader
const preloader = document.querySelector(".preloader");
window.addEventListener("load", (eo) => {
  preloader.classList.add("stop");
});
//TypedJS;
var typed = new Typed(".typing", {
  strings: ["Junior Front-End Developer."],
  typeSpeed: 160,
  typeBack: 150,
  loop: false,
});

// ScrollReveal
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 100,
  reset: false,
});
sr.reveal("header .landing .text", { origin: "left" });
sr.reveal("header .landing .img", { origin: "right" });
sr.reveal(".about");
sr.reveal(".about .info-about-me .profile", { origin: "left" });
sr.reveal(".about .info-about-me .skills", { origin: "right" });
sr.reveal(".work");
sr.reveal(".contact");
sr.reveal(".contact form", { origin: "left" });
// DarkMode
const darkMode = document.querySelector(".dark");
console.log(darkMode.firstElementChild);
const lightMode = document.querySelector(".light");
const html = document.querySelector("html");
darkMode.addEventListener("click", (eo) => {
  darkMode.firstElementChild.classList.add("none");
  lightMode.firstElementChild.classList.remove("none");
  html.classList.add("dark");
});
lightMode.addEventListener("click", (eo) => {
  darkMode.firstElementChild.classList.remove("none");
  lightMode.firstElementChild.classList.add("none");
  html.classList.remove("dark");
});
//BackToTop Popup
const backtotop = document.querySelector(".back-to-top");
window.addEventListener("scroll", (eo) => {
  if (window.scrollY > 400) {
    backtotop.classList.add("opacity");
  } else {
    backtotop.classList.remove("opacity");
  }
});
backtotop.addEventListener("click", (eo) => {
  window.scrollTo({
    top: 0,
    left: 0,
  });
});
// NavBar
const body = document.body;
const navBar = document.getElementsByClassName("bars")[0];
const asideBar = document.getElementsByClassName("aside-navbar")[0];
const sectionsBtns = document.querySelectorAll(".aside-navbar li a");
const sections = document.querySelectorAll(".section");
console.log(sections);
const nav = document.querySelector("header nav");
window.addEventListener("scroll", (eo) => {
  if (window.scrollY > nav.offsetHeight) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop) {
      removeActiveCell();
      getID = section.getAttribute("id");
      sectionsBtns.forEach((btn) => {
        if (btn.getAttribute("href").slice("1") === getID) {
          btn.previousElementSibling.classList.add("popup");
        }
      });
    }
  });
});
const removeActiveCell = () => {
  const activeCell = document.querySelectorAll(".aside-navbar li .active");
  activeCell.forEach((cell) => {
    cell.classList.remove("popup");
  });
};
navBar.addEventListener("click", (eo) => {
  navBar.classList.toggle("change");
  asideBar.classList.toggle("show");
});
body.addEventListener("click", (eo) => {
  if (!eo.target.classList.contains("bars")) {
    if (
      navBar.classList.contains("change") ||
      asideBar.classList.contains("show")
    ) {
      navBar.classList.remove("change");
      asideBar.classList.remove("show");
    }
  }
});
sectionsBtns.forEach((sectionBtn) => {
  sectionBtn.addEventListener("click", (eo) => {
    eo.preventDefault();
    navBar.classList.toggle("change");
    asideBar.classList.toggle("show");
    const getID = sectionBtn.getAttribute("href").slice(1);
    const getSection = document.getElementById(getID);
    window.scrollTo({
      top: getSection.offsetTop,
      left: 0,
    });
    removeActiveCell();
    sectionBtn.previousElementSibling.classList.add("popup");
    afterClick();
  });
});
// Animation After Clicking SectionBtn
const afterClick = () => {
  const afterClickAnimation = [
    { transform: "skew(90deg)" },
    { transform: "skew(-90deg)" },
  ];
  const afterClickTiming = {
    duration: 500,
  };
  const afterClick = document.querySelector(".after-click");
  afterClick.animate(afterClickAnimation, afterClickTiming);
};
// Scale Animation of Skills
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
let counter = 0;
const boxes = document.querySelectorAll(".skills .box .before");
const infoSection = document.getElementsByClassName("info-about-me")[0];
console.log(infoSection.getBoundingClientRect().top);
console.log(window.scrollY);
window.addEventListener("scroll", (eo) => {
  if (window.scrollY >= infoSection.getBoundingClientRect().top) {
    boxes.forEach((box) => {
      stopAnimation();
    });
  }
});
const stopAnimation = () => {
  setInterval(() => {
    if (counter < 90) {
      counter++;
      boxes[0].style.width = `${scale(counter, 0, 90, 0, 90)}%`;
      boxes[1].style.width = `${scale(counter, 0, 90, 0, 90)}%`;
      boxes[2].style.width = `${scale(counter, 0, 90, 0, 80)}%`;
      boxes[3].style.width = `${scale(counter, 0, 90, 0, 75)}%`;
    } else {
      clearInterval(stopAnimation);
    }
  }, 900);
};
// Form
const form = document.querySelector("form");
const inputs = document.querySelectorAll("form .input");
inputs.forEach((input) => {
  input.addEventListener("focusin", (eo) => {
    const parent = input.parentElement;
    parent.classList.add("focus");
  });
  input.addEventListener("focusout", (eo) => {
    const parent = input.parentElement;
    if (input.value === "") {
      parent.classList.remove("focus");
    }
  });
});
form.addEventListener("submit", (eo) => {
  inputs.forEach((input) => {
    input.value = "";
  });
});
