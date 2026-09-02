const prompt = require('prompt-sync')();

let number = parseInt(prompt("entre le number:"));

for (i = 1 ; i<= 10 ;i++){
    let resultat = number * i ;
    console.log(`${number}*${i} = ${resultat}`)
}