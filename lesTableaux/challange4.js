const prompt = require('prompt-sync')();


let taille = parseInt(prompt("Combien d'éléments voulez-vous dans le tableau ?"));



let valeur = []
for (let i = 0; i < taille; i++){
    valeur[i] = parseInt(prompt(`Entrez l'élément n :`));
}
let max = 0
for (let j = 1 ; j < taille; j++){
    max = valeur[0]
    if(valeur[j]  > valeur[j-1]){
        max = valeur[j]
    }
}
console.log("Voici somme :");
console.log(max);
