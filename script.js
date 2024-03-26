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

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
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
