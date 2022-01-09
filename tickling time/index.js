var hour = document.getElementById("clock");
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var sec = document.getElementById("sec");

setInterval(function(){
   hour.textContent = new Date().getHours();
   minute.textContent = new Date().getMinutes();
   sec.textContent = new Date().getSeconds();
},1000);

//instructor answer
// function clock(){
//    return setInterval(()=>{
//       let date = new Date();
//       let tick = date.toLocaleTimeString();
//       hour.textContent = tick;
//    }, 1000)
// }

// clock();