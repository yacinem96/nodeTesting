const http = require('http');
const fs = require('fs');
const path = require('path');


const PORT=3000;

// 1ere tache
const printHello=()=>{
    console.log("HELLO WORLD");
}

printHello();

// 2eme tache
http
    .createServer((req,res)=>{
        res.write("<h1>Hello Node!!!!</h1>")
    })
    .listen(PORT);


// 3eme tache
fs.writeFileSync(path.join(__dirname,"welcome.txt"),"Hello Node")

const logFile=()=>{
    const file =fs.readFileSync("./welcome.txt", "UTF-8");
    console.log(file);
}
logFile();


