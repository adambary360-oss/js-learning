const prompt = require('prompt-sync')();


let taille = parseInt(prompt("Combien d'éléments voulez-vous dans le tableau ?"));



let multiplication = 0 ;

let valeur = []
for (let i = 0; i < taille; i++) {
    valeur[i] = (parseInt(prompt(`Entrez l'élément n :`)))*3;
    multiplication *= valeur[i]  
}
console.log(multiplication)