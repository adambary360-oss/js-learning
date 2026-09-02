const prompt = require('prompt-sync')();

let n = parseInt(prompt("entrer number :"))
let a = 0 
let b = 1
let suivant = 0

for ( i = 1 ; i <= n ; i ++) {
  suivant = a + b 
  a = b
  b = suivant

}
console.log(`${suivant}`)
