const prompt = require('prompt-sync')();


function Fibonacci (x){
    let a = 0 
    let b = 1
    let suit = 0
    for (let i = 1 ; i < x ; i++ ){
        suit = a + b 
        a = b
        b = suit
    }
    return suit
}



let a = parseInt(prompt("enter a :"))

console.log(Fibonacci (a))
