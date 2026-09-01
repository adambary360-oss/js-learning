const prompt = require('prompt-sync')();

let A = parseInt(prompt("Entrez une nombre A entier :"));

let B = parseInt(prompt("Entrez une nombre B entier :"));

if (A === B){
    c = (A + B)*3
}
else {
    c = A + B
}
console.log(`la valeur est: ${c}`)