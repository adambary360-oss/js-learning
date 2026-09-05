const prompt = require('prompt-sync')();


let taille = parseInt(prompt("Combien d'éléments voulez-vous dans le tableau ?"));



let monTableau = [];

// 3. Boucle de saisie
for (let i = 0; i < taille; i++) {
    let valeur = (prompt(`Entrez l'élément n°${i + 1} :`)*taille);
    
    // 4. Ajout de la valeur à la fin du tableau
    monTableau.push(valeur);
}
console.log(monTableau)