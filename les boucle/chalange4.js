const prompt = require('prompt-sync')();

let number = parseInt(prompt("entre le number:"));

console.log(`resultat est`)


for (i = 1 ; i <= number ; i++){

   let resultat = (i * 2 )-1
console.log(`${resultat}`)
}

