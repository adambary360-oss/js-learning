const prompt = require('prompt-sync')();



function noespace(text) {
    textcompteur = 0
    for (let i = 0 ; text[i] != undefined ; i++ ){
        textcompteur += 1 }


    let resultat = "" 
    for (let i = 0; i <= textcompteur - 1; i++) {
    if (text[i] !==" "){
        resultat += text[i]
    }
}
return console.log(resultat)
}


let chaine = prompt("Entrez une chaine1 :")

noespace(chaine)
