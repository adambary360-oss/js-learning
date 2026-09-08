function triRapide(arry){
    let midle = arry[0]
    let lift = []
    let reight = []
    
    for(let i = 0 ; i < arry.length ; i++){

        if(arry[i] < midle){
            lift.push(arry[i])
        } 
        else{
            reight.push(arry[i])
        }
        
    }
    return [...triRapide(lift), midle, ...triRapide(reight)];
}

console.log(triRapide([9,4,7,2,1,6,7]))


