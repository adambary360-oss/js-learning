

let nombres = [1,4,5,7,3] 

console.log("tableau avant le tri:"+ nombres.join(", "))

for (i = 0 ; i <= nombres.length ; i++){
    let resultat = []
    for(let k = 0 ; k <= nombres.length-i-1;k++){
        if(nombres[k] < nombres[k-1] ){
            let temp = nombres[k]
            nombres[k] =nombres[k - 1]
            nombres[k -1] = temp
        }
    }
}
 console.log(nombres)
