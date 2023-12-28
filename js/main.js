const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

const MOON = "";
const SUN = "";
const DARK_MODE = "dark";
const LIGHT_MODE = "light";
const DEFAULT_MODE = LIGHT_MODE; // Set the default mode to LIGHT_MODE

const btn = document.querySelector("#theme-switcher");

init();

function init() {
  let storedMode = sessionStorage.getItem("mode");
  if (!storedMode) {
    storedMode = DEFAULT_MODE;
    sessionStorage.setItem("mode", DEFAULT_MODE);
  }
  setMode(storedMode);
}

function setMode(mode = DEFAULT_MODE) {
  if (mode === DARK_MODE) {
    btn.textContent = MOON; // Change to MOON when in DARK_MODE
    document.body.classList.add(DARK_MODE);
  } else if (mode === LIGHT_MODE) {
    btn.textContent = SUN; // Change to SUN when in LIGHT_MODE
    document.body.classList.remove(DARK_MODE);
  }
}

btn.addEventListener("click", function () {
  let mode = sessionStorage.getItem("mode");
  if (mode) {
    let newMode = mode == DARK_MODE ? LIGHT_MODE : DARK_MODE;
    setMode(newMode);
    sessionStorage.setItem("mode", newMode);
  }
});

var slideIndex = 1;
showSlide(slideIndex);

function nextslide(n) {
  showSlide((slideIndex += n));
}

function dotslide(n) {
  showSlide((slideIndex = n));
}

function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("imgslide");
  var dot = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < slides.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";

  dot[slideIndex - 1].className += " active";
}


let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#7e74f1 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


function sendEmail() {
  Email.send({
    SecureToken: "2670d936-4e75-4025-ad48-819c19bd67b5",
    Host : "smtp.elasticemail.com",
    Username : "alyashifa850@gmail.com",
    Password : "AAF81743306E2685599259029863E68DAA12",
    To : 'alyashifa850@gmail.com',
    From : document.getElementById("email").value,
    Subject : "This is the subject",
    Body : "Name: " + document.getElementById("name").value
          + "<br> Email: " + document.getElementById("email").value
          + "<br> Message: " + document.getElementById("message").value
}).then(
  message => alert("Message send successfully!")
);
}