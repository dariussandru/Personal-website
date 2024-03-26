var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

//animation production page //
var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");
SmallImg[0].onclick = function () {
  ProductImg.src = SmallImg[0].src;
};
SmallImg[1].onclick = function () {
  ProductImg.src = SmallImg[1].src;
};
SmallImg[2].onclick = function () {
  ProductImg.src = SmallImg[2].src;
};
SmallImg[3].onclick = function () {
  ProductImg.src = SmallImg[3].src;
};

//animation account page//
//login and register//
var LoginFrom = document.getElementById("logare");
var RegFrom = document.getElementById("inregistrare");
var Indicator = document.getElementById("indicator");

function register() {
  RegFrom.style.transform = "translateX(0px)";
  LoginFrom.style.transform = "translateX(0px)";
  Indicator.style.transform = "translateX(100px)";
}
function login() {
  RegFrom.style.transform = "translateX(300px)";
  LoginFrom.style.transform = "translateX(300px)";
  Indicator.style.transform = "translateX(0px)";
}
