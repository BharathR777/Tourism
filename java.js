
/*var close=document.getElementsById("close-button");
var side=document.querySelectorAll("side-bar");
console.log(side);
close.addEventListener('click',function(){
        side.classList.add("none");
})*/

const hamburger=document.querySelector(".hamburger-main");
let side=document.querySelector(".side-bar");
const close=document.querySelector(".close-button");
console.log(hamburger);
console.log(side);
close.addEventListener("click",function(){
        side.classList.add("none");
})
hamburger.addEventListener("click",function(){
        side.classList.remove("none");
})
const about=document.querySelector(".side-bar .options .about");
let insta=document.querySelector(".insta");
console.log(about);
console.log(insta);
about.addEventListener("click",function(){
        side.classList.add("none");
})
insta.addEventListener("click",function(){
        side.classList.remove("none");
})