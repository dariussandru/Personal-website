// this is funciton for menu
function ShowSlideBar() {
  //const nav = document.querySelector("nav");
  //nav.classList.toggle("open");
  const sideBar = document.querySelector(".side-bar");
  sideBar.style.display = "flex";
}
function HideSlideBar() {
  //const nav = document.querySelector("nav");
  //nav.classList.toggle("open");
  const sideBar = document.querySelector(".side-bar");
  sideBar.style.display = "none";
}

// this is funciton for slider show
document.addEventListener("DOMContentLoaded", function () {
  // Apelăm funcția showSlides pentru fiecare slideshow
  showSlides(1, 1);
  showSlides(1, 2);
});

let slideIndex1 = 1;
showSlides(1, slideIndex1);

function plusSlides(n, slideshowIndex) {
  showSlides((slideIndex1 += n), slideshowIndex);
}

function currentSlide(n, slideshowIndex) {
  showSlides((slideIndex1 = n), slideshowIndex);
}

function showSlides(n, slideshowIndex) {
  let i;
  let slides = document
    .getElementsByClassName("slideshow-container")
    [slideshowIndex - 1].getElementsByClassName("mySlides");
  let dots = document
    .getElementsByClassName("slideshow-container")
    [slideshowIndex - 1].getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex1 = 1;
  }
  if (n < 1) {
    slideIndex1 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1 - 1].style.display = "block";
  dots[slideIndex1 - 1].className += " active";
}

//function for copied action
function copyText() {
  var textToCopy = document.getElementById("textToCopy");

  // Creează un element textarea temporar pentru a pune textul în clipboard
  var tempTextArea = document.createElement("textarea");
  tempTextArea.value = textToCopy.innerText;
  document.body.appendChild(tempTextArea);

  // Selectează textul din elementul textarea creat
  tempTextArea.select();

  // Copiază textul în clipboard
  document.execCommand("copy");

  // Elimină elementul textarea temporar
  document.body.removeChild(tempTextArea);

  // Afișează notificarea
  var notification = document.getElementById("notification");
  notification.style.display = "block";

  // Ascunde notificarea după câteva secunde
  setTimeout(function () {
    notification.style.display = "none";
  }, 1200);
}
