const prompt = require('prompt-sync')();


let taille = parseInt(prompt("Combien d'éléments voulez-vous dans le tableau ?"));



let valeur = []
for (let i = 0; i < taille; i++){
    valeur[i] = parseInt(prompt(`Entrez l'élément n :`));
}
let min = 0
for (let j = 1 ; j < taille; j++){
    min = valeur[0]
    if(valeur[j] < valeur[j-1]){
        min = valeur[j]
    }
}
console.log("Voici somme :");
console.log(min);
