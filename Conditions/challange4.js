const prompt = require('prompt-sync')();

let A = parseInt(prompt("Entrez une nombre A entier :"));

let B = parseInt(prompt("Entrez une nombre B entier :"));

let C = parseInt(prompt("Entrez une nombre C entier :"));

let delta = ( B * B ) - (4 * A * C)

if ( delta > 0 ){
    let x1 = (-B -Math.sqrt(delta))/(2 * A) 
    let x2 = (-B +Math.sqrt(delta))/(2 * A)   
    console.log(`la solution est ${x1}et ${x2}`)
}
else if ( delta === 0){
    let x = (-B)/(2*A)
     console.log(`la solution est ${x1}et ${x2}`)
   
}
else(
    console.log(`il n a pas solution`)
)