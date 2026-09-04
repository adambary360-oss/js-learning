const prompt = require('prompt-sync')();


function Factorielle (a){
    let resultat = 1
    for (let i = 1 ; i <= a ; i++){
        
         resultat =  resultat * i
        
    }
    return resultat
}



let y = parseInt(prompt("enter a :"))

console.log(Factorielle (y))
