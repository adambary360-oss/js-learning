const prompt = require('prompt-sync')();

let C = parseFloat(prompt("entre la température en Celsius :"))

if(C < 0) {
    console.log(`l'état de l'eau à cette température est : Solide ` )
}
else if(C>= 0 && C<100) {
    console.log(`l'état de l'eau à cette température est : Liquide ` )
}
else{
    console.log(`l'état de l'eau à cette température est : Gaz ` )
}