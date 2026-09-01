const prompt = require('prompt-sync')();

let température = parseFloat(prompt("entre températur :"))

let températurekel = température + 273.15

console.log(` la température en kelvin form : ${températurekel}` )