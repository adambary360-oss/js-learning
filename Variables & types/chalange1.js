const prompt = require('prompt-sync')();
let nom = prompt("votre nom :")
let prenom = prompt("votre prenom :")
let age = prompt("votre age :")
let sexe = prompt("votre sexe :")
let email = prompt("votre email :")

console.log(`Voici vos informations :
- Nom : ${nom}
- Prénom : ${prenom}
- Âge : ${age} ans
- Sexe : ${sexe}
- E-mail : ${email}`);
