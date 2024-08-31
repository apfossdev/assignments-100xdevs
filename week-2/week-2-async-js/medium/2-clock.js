let counter = 0;

function runEveryOneSec() {
  seconds++;
  if(seconds == 60){
    seconds = 0;
    minutes++;
  }
  if(minutes == 60){
    minutes = 0
    hours++;
  }
  if(hours == 25){
    hours = 0;
    minutes = 0;
    seconds = 0;
  }
  if(hours > 12){
    newHours = hours - 12;
    console.log(newHours + ":" + minutes + ":" + seconds + " P.M");
  }
  else{
    console.log(hours + ":" + minutes + ":" + seconds + " A.M.");
  }  
  
}

setInterval(runEveryOneSec, 1000);

console.log("Timer started now buddy");

const d = new Date();

let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();

