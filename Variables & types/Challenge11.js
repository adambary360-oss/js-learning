const prompt = require('prompt-sync')();

let Longueur = parseFloat(prompt("entre la Longueur :"))
let Largeur = parseFloat(prompt("entre la Largeur :"))

let Surface = Longueur * Largeur 

console.log(`la surface est :${Surface}`)