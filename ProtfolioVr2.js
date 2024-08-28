let menuBtn = document.querySelector("#menu-btn");
let menuBtn1 = document.getElementById("menu-btn");
let closeBtn = document.querySelector("#close-btn");
let closeBtn1 = document.getElementById("close-btn");
let navbar = document.querySelector(".header .flex .navbar");

function showNav(){
    navbar.classList.add("active");
    closeBtn1.style.zIndex = 10;
    console.log("hellow")
}


function closeNav(){
    navbar.classList.remove("active");
    console.log("hellow")
    closeBtn1.style.zIndex = 0;
}


 
Window.onscroll = () => {
    navbar.classList.remove("active");
}
