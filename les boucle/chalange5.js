const prompt = require('prompt-sync')();

let base = parseInt(prompt("entre la base:"));
let exposant = parseInt(prompt("entre la exposant:")); 

let resultat = 1
for ( i = 1 ; i <= exposant ; i++){
   resultat *= base
}

console.log(`resultat est ${resultat}`)