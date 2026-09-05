const prompt = require('prompt-sync')();


let taille = parseInt(prompt("Combien d'éléments voulez-vous dans le tableau ?"));
let resultat = []

for (let i = 0; i < taille; i++) {
    let valeur = prompt(`Entrez l'élément n°${i + 1} :`);
    
    
    resultat.push(valeur);
}
    console.log(resultat)
    let resultat1 = []

    
for (k = 0 ; k < taille ;k++) 
    {for(let j = 0 ; j < taille - k - 1 ; j++){
        if(resultat[j] < resultat[j+1]){
            let temp = resultat[j]
            resultat[j] = resultat[j+1]
            resultat[j + 1] = temp
        }           
    }
 }
 console.log(resultat)