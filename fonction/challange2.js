const prompt = require('prompt-sync')();


function  Multiplication(a , b ){
    return a*b
}




let x = parseInt(prompt("enter a :"))
let y = parseInt(prompt("enter b :"))

let produit = Multiplication( x , y)

console.log(produit)

