const prompt = require('prompt-sync')();

let number = parseInt(prompt("entre le number:"));
let s = 0 ;

for ( let i = 1 ; i <= number ; i++ ){

    s += i
}
console.log(`${number} = ${s}`)