const prompt = require('prompt-sync')();


let taille = parseInt(prompt("Combien d'éléments voulez-vous dans le tableau ?"));


let somme = 0;

let valeur = []
for (let i = 0; i < taille; i++) {
    valeur[i] = parseIntprompt(`Entrez l'élément n :`);
    somme += valeur[i]  
}



console.log("Voici somme :");
console.log(somme);