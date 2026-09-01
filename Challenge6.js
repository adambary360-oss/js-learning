const prompt = require('prompt-sync')();

let A = parseFloat(prompt("entre A :"))

let B = parseFloat(prompt("entre B :"))

let Addition = A + B
let Soustraction = A - B
let Multiplication = A * B
let Division = A / B

console.log(`Voici la calcul :
- Addition : ${Addition}
- Soustraction : ${Soustraction}
- Multiplication : ${Multiplication} 
- Division : ${Division}
`);
