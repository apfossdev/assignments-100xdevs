const fs = require("fs");

function cleaner(err,data){
    let contents = data.replace(/\s+/g,' ').trim();
    fs.writeFile("../../week-2-async-js/a.txt",contents,"utf-8",callback) //callback functions always not required while defining fs.writeFile
}
function callback(err,data){
    console.log("The writing part is done, check your file");
}

fs.readFile("../../week-2-async-js/a.txt","utf-8",cleaner);