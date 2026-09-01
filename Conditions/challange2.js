const prompt = require('prompt-sync')();

let letter = prompt("Entrez un letter entier :").toLowerCase();

switch (letter){
    case'a':
    case'e':
    case'i':
    case'o':
    case'u':
    case'y':
        console.log(`la lettre "${letter} est une voyelle.`);
        break;
    default:
        console.log(`la lettre "${letter} est une consonne ou (un autre caractére).`);

}