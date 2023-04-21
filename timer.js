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