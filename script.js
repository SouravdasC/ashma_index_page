let companyName = document.querySelector(".company");
// Select the company menu link and submenu
const companyLink = document.getElementById("company");
const companyItems = document.getElementById("company-items");

// Add event listeners for mouseenter and mouseleave
companyLink.addEventListener("mouseenter", () => {
  companyItems.style.display = "block"; // Show the submenu
});

companyItems.addEventListener("mouseleave", () => {
  companyItems.style.display = "none"; // Hide the submenu
});
// CAROUSEL
var myIndex = 0;
carousel(myIndex);
function currentSlide(n) {
  carousel((myIndex = n));
}
function carousel(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > x.length) {
    myIndex = 1;
  }
  if (n < 1) {
    myIndex = x.length;
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  dots[myIndex - 1].className += " active";
  setTimeout(carousel, 2000);
}
// OUR PRODUCT
// SLIDER
// var count = 0;
// var inc = 0;
// var margin = 0;
// var slider = document.getElementsByClassName("slider-width")[0];
// var itemDisplay = 0;
// (console.log (screen.width))
// if(screen.width > 1440){
//   itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-d")
// }

// if (screen.width > 990) {
//   itemDisplay = document
//     .getElementsByClassName("slider-container")[0]
//     .getAttribute("item-display-d");
//   margin = itemDisplay * 5;
// }
// if (screen.width > 700 && screen.width < 990) {
//   itemDisplay = document
//     .getElementsByClassName("slider-container")[0]
//     .getAttribute("item-display-t");
//   margin = itemDisplay * 6;
// }
// if (screen.width > 280 && screen.width < 700) {
//   itemDisplay = document
//     .getElementsByClassName("slider-container")[0]
//     .getAttribute("item-display-m");
//   margin = itemDisplay * 20;
// }
// console.log(itemDisplay)
// var item = document.getElementsByClassName("item");
// var itemLeft = item.length % itemDisplay;
// var itemSlide = Math.floor(item.length / itemDisplay) - 1;
// console.log(itemSlide)
// for (let i = 0; i < item.length; i++) {
//   item[i].style.width = screen.width / itemDisplay - margin + "px";
// }
// function next() {
//   if (inc !== itemSlide + itemLeft) {
//     if (inc === itemSlide) {
//       inc = inc + itemLeft;
//       count = count - (screen.width / itemDisplay) * itemLeft;
//     } else {
//       inc++;
//       count = count - screen.width;
//     }
//   }

//   slider.style.left = count + "px";
// }
// function prev() {
//   if (inc !== 0) {
//     if (inc === itemLeft) {
//       inc = inc - itemLeft;
//       count = count + (screen.width / itemDisplay) * itemLeft;
//     } else {
//       inc--;
//       count = count + screen.width;
//     }
//   }

//   slider.style.left = count + "px";
// }

// CONTACT US
let headoffice = document.getElementById("headOffice");
let manufacturingoffice = document.getElementById("manufacturingOffice");

// function transfer(){
// if(manufacturingoffice.style.display === "none" || manufacturingoffice.style.display === ""){
//   manufacturingoffice.style.display = "block"; // Show the div
// }else{
//   manufacturingoffice.style.display = "none"; // Hide the div
// }
// }

function button1() {
  headoffice.style.display = "block"; // Show Div 1
  manufacturingoffice.style.display = "none"; // Hide Div 2
}
function button2() {
  headoffice.style.display = "none"; // Show Div 1
  manufacturingoffice.style.display = "block"; // Hide Div 2
}

// HEADER TOOGLE
let toggleMenu = document.getElementById("navMenu-responsive");
toggleMenu.style.display = 'none'
function toggleBtn() {
  if (toggleMenu.style.display == "none") {
    toggleMenu.style.display = "block";
  } else {
    toggleMenu.style.display = "none";
  }
}

let subMenuToggle = document.getElementById("reSubMenuList");
let downIcons_1 = document.getElementById("downIcons");
let downIcons_2 = document.getElementById("upIcons");
subMenuToggle.style.display = "none";
downIcons_2.style.display = "none";
function subMenu() {
  if (subMenuToggle.style.display == "none") {
    subMenuToggle.style.display = "block";
    downIcons_2.style.display = "block";
    downIcons_1.style.display = "none";
  } else {
    subMenuToggle.style.display = "none";
    downIcons_2.style.display = "none";
    downIcons_1.style.display = "block";
  }
}

let subMenuToggle2 = document.getElementById("reSubMenuList2");
let downIcons = document.getElementById("downIcons1");
let downIconS_2 = document.getElementById("upIcons2");
subMenuToggle2.style.display = "none";
downIconS_2.style.display = "none";
function subMenu2() {
  if (subMenuToggle2.style.display == "none") {
    subMenuToggle2.style.display = "block";
    downIconS_2.style.display = "block";
    downIcons.style.display = "none";
  } else {
    subMenuToggle2.style.display = "none";
    downIconS_2.style.display = "none";
    downIcons.style.display = "block";
  }
}


