const prompt = require('prompt-sync')();

let n = parseInt(prompt("entrer number :"))

for (i = 1; i <= n ; i ++){
  let resutat = i * 2
   console.log(`${resutat}`)
}