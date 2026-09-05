const prompt = require('prompt-sync')();


let taille = parseInt(prompt("Combien d'éléments voulez-vous dans le tableau ?"));
let resultat = []

for (let i = 0; i < taille; i++) {
    var valeur = prompt(`Entrez l'élément n°${i + 1} :`);
    
    
    resultat.push(valeur);
}
console.log(resultat)
console.log("resultat")

for (let  k = 0 ; k < taille; k++){
    
    for(let j = 0 ; j <= taille - j - 1 ; j++ ){
        let temp = resultat[j]
        resultat[j] = resultat[j + 1]
        resultat[j + 1] = temp
    }
}
console.log(resultat)
// let taille = 4
// let valeur = [1 , 2 , 3 ,4]
// let resultat2 = []
// for (let i = 0 ; i < taille; i++){
//     for(let j = 0 ; j <= taille - j - 1 ; j++ ){
//         let temp = valeur[j]
//         valeur[j] = valeur[j + 1]
//         valeur[j] = temp
//     }
//     return valeur
// }


// console.log(valeur)

