const prompt = require('prompt-sync')();


let taille = parseInt(prompt("Combien d'éléments voulez-vous dans le tableau ?"));
let resultat = []

for (let i = 0; i < taille; i++) {
    let valeur = prompt(`Entrez l'élément n°${i + 1} :`);
    
    
    resultat.push(valeur);
}
let element = prompt("entrez l element puor sercher :")
let resultatSH = false
for (i = 0 ; i <= taille ; i++){
    if ( element === resultat[i]){
        resultatSH = true
    }
}
console.log(resultatSH)



