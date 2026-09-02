const prompt = require('prompt-sync')();

let n = parseInt(prompt("entrer number :"))

let compter = 0

while ( n > 0 ){
  n = Math.floor(n / 10)
  compter += 1
}
console.log(`${compter}`)