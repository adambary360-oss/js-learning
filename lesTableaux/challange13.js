const prompt = require('prompt-sync')();


let taille = parseInt(prompt("Combien d'éléments voulez-vous dans le tableau ?"));
let resultat = []

for (let i = 0; i < taille; i++) {
    let valeur = prompt(`Entrez l'élément n°${i + 1} :`);
    resultat.push(valeur);
}
let impaireresultat =[]
for (i = 0 ; i <= taille ; i++){
    if (resultat[i] % 2 !== 0){
         impaireresultat += resultat[i]
}   
}
console.log(impaireresultat)