const prompt = require("prompt-sync")();


function rectangle(a , b){
    let resultat = a * b
    console.log(`l'aire de rectangleest: ${resultat}`)

}


let rectangle1 = {
    longueur : 4 ,
    largeur : 3
}

rectangle(rectangle1.largeur,rectangle1.longueur)