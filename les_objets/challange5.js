const prompt = require('prompt-sync')();



function livre(titre,auteur,annee){
    console.log("les informations du livre  :")
    console.log(`le livre est : ${titre}`);
    console.log(`auteur est : ${auteur}`);
    console.log(`annee de sorte est : ${annee}`);
}


let livre1 = {
    titre1 :prompt("entrez le titre de liver :"),
    auteur1:prompt("entrez l'auteur :"),
    annee1 :prompt("entrez l'annee :")
}

livre(livre1.titre1,livre1.auteur1,livre1.annee1)
