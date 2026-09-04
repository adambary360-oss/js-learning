const prompt = require('prompt-sync')();

let n = parseInt(prompt("entre le number:"));

 for ( let i = 1 ; i <= n; i++) {
    let ligne = ""
    for ( j = 1 ; j <= n-i  ; j++){
      ligne += " "
    }
    for (let k = 1 ; k <= i * 2 - 1 ; k++){
      ligne += "*"
    }
     console.log(ligne) 
 }
