let toggle = document.querySelector(".toggle-menu");
let menu = document.querySelector("header .main > ul");

toggle.onclick = function () {
  if (menu.style.display == "" || menu.style.display == "none") {
    menu.style.display = "flex";
    console.log("hel");
  } else if (menu.style.display === "flex") {
    menu.style.display = "none";
  }
};
console.log(toggle);
console.log(menu);
console.log(window.screen.width);
