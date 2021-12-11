const body = document.querySelector("body");
const menu = document.querySelector("#menu");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.onclick = () => {
    menuBtn.classList.add("hide");
    closeBtn.classList.add("show");
    menu.classList.add("show");
}

closeBtn.onclice = () => {
    menu.classList.remove("show");
    menuBtn.classList.remove("hide");
}