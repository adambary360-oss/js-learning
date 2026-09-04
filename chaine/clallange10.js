const prompt = require('prompt-sync')();



function SousString(text1 , text2) {
    textcompteur1 = 0
    for (let i = 0 ; text1[i] != undefined ; i++ ){
        textcompteur1 += 1 
    }
    textcompteur2 = 0
    for (let i = 0 ; text2[i] != undefined ; i++ ){
        textcompteur2 += 1 
    }


    let sous = false
    for (let i = 0 ; i <= textcompteur1 - textcompteur2 ; i++){
        let match = true
        for(let j = 0 ; j <textcompteur2 ; j++)
            if ( text1[i ,j] !== text2[j]){
                match = false
                break
            }
            if (match === true){
        sous = true
        break
    }
    }
return console.log(sous)
}


let chaine1 = prompt("Entrez une chaine1 :")
let chaine2 = prompt("Entrez une chaine2 :")

SousString(chaine1  , chaine2)
