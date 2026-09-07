const prompt = require("prompt-sync")();

function Pyramide(a){
            

    for(i = 0 ; i<= a; i++){
        let espace = ""
        for (let j = 0 ; j <=a-1-i ; j++ ){
            espace += " "  
        }
        espace += "*"
        for(let k = 1 ; k <= (i*2)-1 ; k++ ){
            
            if(i == a){
                espace += "*"
            }   
            else{
                espace +=" "
            }
        }
        if(i > 0){
            espace += "*"
        }
        console.log(espace)
}
}

Pyramide(7)
