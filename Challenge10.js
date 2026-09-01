const prompt = require('prompt-sync')();

let r = parseFloat(prompt("entre le rayon :"))
let Volume  = (4/3) * 3.14 * r**3
 
console.log(`le volume de sphère est :${Volume }`)