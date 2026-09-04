const prompt = require('prompt-sync')();

let text1 = prompt("Entrez une chaine1 :")
let text2 = prompt("Entrez une chaine2 :")

if (text1 === text2){
    console.log(true)
}
else {
    console.log(false )
}


