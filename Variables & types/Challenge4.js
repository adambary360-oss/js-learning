const prompt = require('prompt-sync')();

let vitesse  = parseFloat(prompt("entre la vitesse  :"))

let mètresparseconde = vitesse  * 0.27778

console.log(` vitesse en mètres par seconde form : ${mètresparseconde}` )