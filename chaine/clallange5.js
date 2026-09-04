const prompt = require('prompt-sync')();


function textinvers(text){
let textcompteur = 0
    for (let i = 0 ; text[i] != undefined ; i++ ){
    textcompteur += 1 }

let textinvers = ""
    for (let i = textcompteur - 1; i >= 0; i--) {
        textinvers += text[i]
    }
    return console.log(textinvers)
}
let text1 = prompt("Entrez une chaine1 :")

textinvers(text1)