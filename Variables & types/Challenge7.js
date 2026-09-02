const prompt = require('prompt-sync')();

let A = parseFloat(prompt("entre 1er nombre :"))
let B = parseFloat(prompt("entre 2er nombre :"))
let C = parseFloat(prompt("entre 3er nombre :"))

let pondération1 = A * 2
let pondération2 = B * 3
let pondération3 = C * 5

let somme = pondération1 + pondération2 + pondération3

let moyenne = somme/10

 console.log(`le moyenne est : ${moyenne}`)