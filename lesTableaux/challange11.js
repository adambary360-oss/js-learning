const prompt = require('prompt-sync')();


let taille = parseInt(prompt("Combien d'éléments voulez-vous dans le tableau ?"));
let resultat = []

for (let i = 0; i < taille; i++) {
    let valeur = prompt(`Entrez l'élément n°${i + 1} :`);
    resultat.push(valeur);
}
let elementA = prompt("entrez l element puor romplacer :")

let elementB = prompt("entrez l element puor ajouter :")
let resultatSH = []
for (i = 0 ; i <= taille ; i++){
    if (resultat[i] === elementA){
        resultat[i] = elementB
    }
    

}
console.log(resultat)



