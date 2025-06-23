// 1. write a function which has to call 2 different callback functions. The response of first function should be passed to second function and response of second function should be returned as response
// 2. Implement the same above requirement using promises

//nested callbacks
const fs=require("fs");
console.log("writing and reading the file contents");
fs.writeFile("input.txt","hello world",(err)=>{
    if(err){
         console.log(err);

    }
    else{
        fs.readFile("input.txt","utf-8",(err,data)=>{
            if(err){
                console.log(err);
            } else {
                console.log(data);
            }
        })
    }
});
//using promises
const promisefs=require("fs/promises");
new Promise((resolve, reject) => {
    promisefs.writeFile("input.txt", "hello world")
        .then(() => {
            return promise.readFile("input.txt", "utf-8");
        })
        .then((data) => {
            console.log(data);
            resolve(data);
        })
        .catch((err) => {
            console.log(err);
            reject(err);
        });
});
// Using Asyn Await

async function readFile(){
    try{
        await promisefs.writeFile("input.txt","hello world!");
        const data=await promisefs.readFile("input.txt","utf-8");
        console.log(data);
    }
    catch(err){
        console.log(err);
    }

}
readFile();


