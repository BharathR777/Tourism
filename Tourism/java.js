var date=new Date();
var hr=document.getElementById('hr');
var min=document.getElementById("min");
var sec=document.getElementById("sec");

function timer(){
        hr.innerHTML=new Date().getHours();
        if(hr.innerHTML<10)hr.innerHTML="0"+hr.innerHTML;
        min.innerHTML=new Date().getMinutes();
        if(min.innerHTML<10)min.innerHTML="0"+min.innerHTML;
        sec.innerHTML=new Date().getSeconds();
        if(sec.innerHTML<10)sec.innerHTML="0"+sec.innerHTML;

}
setInterval(timer,1000);

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