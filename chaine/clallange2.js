const prompt = require('prompt-sync')();

let text = prompt("Entrez une chaine :")
let compteur = 0 

for (let caractere of text ){
    compteur++
}
console.log(`La longueuer de ${text} est de ${compteur}.`)
