const prompt = require('prompt-sync')();

let A = parseFloat(prompt("entre 1er nombre :"))
let B = parseFloat(prompt("entre 2er nombre :"))
let C = parseFloat(prompt("entre 3er nombre :"))

let Moyennegéométrique = (A * B * C)**(1/3)
 
console.log(`Moyenne géométrique est :${Moyennegéométrique}`)