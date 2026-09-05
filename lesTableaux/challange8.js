const prompt = require('prompt-sync')();


let taille = parseInt(prompt("Combien d'éléments voulez-vous dans le tableau ?"));
let resultat = []

for (let i = 0; i < taille; i++) {
    var valeur = prompt(`Entrez l'élément n°${i + 1} :`);
    
    
    resultat.push(valeur);
}
console.log(resultat)

let resultat2 = []
for (let i = 0; i < taille; i++) {
    var valeur2 = prompt(`Entrez l'élément n°${i + 1} :`);
    
    
    resultat2.push(valeur2);
}
console.log(resultat2)



let compareson = null
for (i =0 ;i<taille;i++){
    if (valeur[i] == valeur2[i]){
        compareson = true
    }
    else{
        compareson = false
        break
    }
}
console.log(compareson)