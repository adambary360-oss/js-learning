const prompt = require('prompt-sync')();

let Revenuannuel = parseInt(prompt("entre Revenu annuel :"))
let Scoredecrédit = parseInt(prompt("Score de crédit :"))
let Duréeduprêt = parseInt(prompt("entre Durée du prêt :"))

if ( Revenuannuel >= 30000 && Scoredecrédit >= 1000 && Duréeduprêt <= 30 ){
    console.log(`Félicitations ! Vous êtes éligible pour le prêt`)
}
else{
    console.log(`Désolé, vous n'êtes pas éligible`)
}


