const prompt = require('prompt-sync')();


function Parité (x){
   
    if (x % 2 === 0 ){
         return true
    }
    else{
         return false
    }
}


let a = parseInt(prompt("enter a :"))

console.log(Parité (a))
