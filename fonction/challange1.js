const prompt = require('prompt-sync')();


function  additionner(a , b ){
    return a+b
}




let x = parseInt(prompt("enter a :"))
let y = parseInt(prompt("enter b :"))

let resultat = additionner( x , y)

console.log(resultat)

