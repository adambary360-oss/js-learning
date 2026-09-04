const prompt = require('prompt-sync')();



function textmaju(maju){
    textcompteur = 0
    for (let i = 0 ; maju[i] != undefined ; i++ ){
        textcompteur += 1 
    }
    let resultat = ""
    for (i = 0 ; i < textcompteur ; i++){
        
        let code = maju.charCodeAt(i)
        if (code >= 97 && code <= 122) {
            resultat +=String.fromCharCode(code - 32 )
        }
        
    }
    return console.log(resultat)
}

let text = prompt("Entrez une chaine1 :")


textmaju(text)
