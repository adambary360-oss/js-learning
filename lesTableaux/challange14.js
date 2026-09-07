const prompt = require('prompt-sync')();


let taille = parseInt(prompt("Combien d'éléments voulez-vous dans le tableau ?"));
let resultat = []

for (let i = 0; i < taille; i++) {
    let valeur = prompt(`Entrez l'élément n°${i + 1} :`);
    parseInt(resultat.push(valeur));
}
let somme = 0
let moyen = 0

for (i = 0 ; i < taille  ; i++){
    somme += parseInt(resultat[i])
}

console.log(somme)
moyen = somme/taille
console.log(moyen)