const prompt = require('prompt-sync')();

// let n = parseInt(prompt("entre le number:"));

//  for ( let i = 1 ; i <= n; i++) {
//     let ligne = ""
//     for ( j = 1 ; j <= n-i  ; j++){
//       ligne += " "
//     }
//     for (let k = 1 ; k <= i * 2 - 1 ; k++){
//       ligne += "*"
//     }
//      console.log(ligne) 
//  }


let row = 5 

for (let i = 0 ; i <= row ; i++){
  let espace = ""
  for(j = 0 ; j <= row-1-i ; j++ ){
    espace += " "
  }
  
  for(j = 1 ; j <= i * 2 - 1   ; j++ ){
    espace += "*"
  }

  console.log(espace)
}