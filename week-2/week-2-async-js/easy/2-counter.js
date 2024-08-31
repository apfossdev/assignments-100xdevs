let counter = 0;

function runEveryOneSec() {
  counter++;
  console.log(counter);
}

setInterval(runEveryOneSec, 1000);

console.log("Timer started now buddy");
