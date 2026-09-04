const prompt = require('prompt-sync')();


function  compareson(a , b ){
    let resolt = 0
    if (a >b){
        resolt = a
    
    }
    else if (a = b ){
        resolt = "Égal"
    }
    else {
        resolt = b 
    }
    return resolt
}




let x = parseInt(prompt("enter a :"))
let y = parseInt(prompt("enter b :"))

let produit = compareson( x , y)

console.log(produit)

