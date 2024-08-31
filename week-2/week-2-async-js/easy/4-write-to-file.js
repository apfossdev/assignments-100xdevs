const fs = require('fs');
function callback(err, data){
    console.log("The writing part is done, check yourself");
}
fs.writeFile("a.txt","data data data","utf-8",callback);