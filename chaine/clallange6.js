const prompt = require('prompt-sync')();



function leutrcompteur (text , leutr){

    let textcompteur = 0
    for (let i = 0 ; text[i] != undefined ; i++ ){
        textcompteur += 1 }
        
    let compteur = 0 
    for (let i = 0 ; i <= textcompteur ; i++ ){
        if (text[i] === leutr){
            compteur += 1
        }
    }
return console.log(compteur)
}
let text = prompt("Entrez une chaine1 :")
let leutr = prompt("Enter le letre :")

leutrcompteur(text , leutr)



