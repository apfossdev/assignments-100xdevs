const fs = require('fs');

function printContent(err,data){
    console.log(data);
}

fs.readFile("a.txt","utf-8",printContent);

let c = 0;
for(let i = 1; i < 100000000000; i++){
    c++;
}

console.log(c);