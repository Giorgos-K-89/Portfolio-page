//---------------welcome screen------------------------
// Wrap every letter in a span
const mainContent = document.querySelector("main");
const landingPage = document.getElementById("landing-page");
var textWrapper = document.querySelector(".ml13");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: false })
  .add({
    targets: ".ml13 .letter",
    translateY: [100, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i,
  })
  .add({
    targets: ".ml13 .letter",
    translateY: [0, -100],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i,
    complete: function () {
      // Animation completed, update the styles
      landingPage.style.display = "none";
      mainContent.style.display = "block";
    },
  });
//---------------welcome screen------------------------
//
//onscroll navbar-------
window.onscroll = scrollFunction;

function scrollFunction() {
  var divMenu = document.querySelector(".div-menu");

  var navbar = document.getElementById("navbar");
  var home = document.getElementById("home");

  if (divMenu && getComputedStyle(divMenu).display === "block") {
    home.classList.remove("selected");
    navbar.classList.remove("scrolled");
  } else {
    var scrollCondition =
      document.body.scrollTop > 500 || document.documentElement.scrollTop > 500;

    navbar.classList.toggle("scrolled", scrollCondition);
    home.classList.toggle("selected", !scrollCondition);
  }
}

//onscroll navbar---------
//
//-----------responsive navbar-------------
function myFunction() {
  var x = document.getElementById("nav-container");
  if (x.classList.contains("responsive")) {
    x.style.animation = "nav-slide-out 1s ease 0s 1 normal forwards";
    setTimeout(function () {
      x.className = "topnav";
      x.style.animation = "none";
    }, 1000);
  } else {
    x.classList.add("responsive");
    x.style.animation = "nav-slide-in 1s ease 0s 1 normal forwards";
  }
}
//-----------responsive navbar-------------
//
const swiper = new Swiper(".swiper", {
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//for footer---
const year = document.querySelector("#current-year");
year.innerHTML = new Date().getFullYear();
//
//animations trigger when in viewport
//
// Get the element to be animated
const welcomeHeader = document.getElementById("welcome-header");
const avatar = document.getElementById("avatar");
const contact = document.getElementById("contact-flex");
// Options for the Intersection Observer
const options = {
  root: null, // use the viewport as the root
  rootMargin: "0px",
  threshold: 0.01, // trigger when 20% of the element is in the viewport
};
const optionsContact = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};
// Function to handle animation
function playWelcomeAnimation() {
  welcomeHeader.style.animation = "slide-in-left 2s ease 0s 1 normal forwards";
}
function playAvatarAnimation() {
  avatar.style.animation = "slide-in 2s ease 0s 1 normal forwards";
}
function playContactAnimation() {
  contact.style.animation =
    "wobble-top 1s ease 0s 1 normal forwards, breathe 3s infinite";
}

// Create Intersection Observers for each element
const welcomeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Element is in the viewport
      playWelcomeAnimation();
    } else {
      // Element is not in the viewport, reset animation
      welcomeHeader.style.animation = "none";
    }
  });
}, options);

const avatarObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Element is in the viewport
      playAvatarAnimation();
    } else {
      // Element is not in the viewport, reset animation
      avatar.style.animation = "none";
    }
  });
}, options);

const contactObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Element is in the viewport
      playContactAnimation();
    } else {
      // Element is not in the viewport, reset animation
      contact.style.animation = "none";
    }
  });
}, optionsContact);

// Observe the target elements
welcomeObserver.observe(welcomeHeader);
avatarObserver.observe(avatar);
contactObserver.observe(contact);
// Reset the animations when the user scrolls
window.addEventListener("scroll", () => {
  if (!welcomeHeader.style.animation) {
    playWelcomeAnimation();
  }
  if (!avatar.style.animation) {
    playAvatarAnimation();
  }
  if (!contact.style.animation) {
    playContactAnimation();
  }
});
