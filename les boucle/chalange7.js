const prompt = require('prompt-sync')();

let n = parseInt(prompt("entrer number :"))

let inverse = 0
let rest = 0
while (n>0){
   rest = n % 10
  inverse = inverse * 10 + rest;
  n = Math.floor(n / 10);
  
}
console.log(`${inverse}`)
