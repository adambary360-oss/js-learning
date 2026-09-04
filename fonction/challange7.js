const prompt = require('prompt-sync')();


function Rebours (x){
    for (i = x ; i >=0 ; i-- ){
        
        console.log(i)
    }
}


let a = parseInt(prompt("enter a :"))

console.log(Rebours (a))
