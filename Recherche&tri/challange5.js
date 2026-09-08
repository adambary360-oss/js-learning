function rechBINAIRE(array,n){
    let debut = 0 ;
    let fin = array.length;
    while (debut <= fin ){
        let milieu = Math.floor((debut + fin/2))
        if (array[milieu] === n ){
            console.log(`trouveau milieu ! index : ${milieu +1}`)
            break
        }
        else if (n > array[milieu]){
            debut = milieu + 1;
        }else{
            fin = milieu - 1;
        }
    }
}

let array1 = [1,2,3,4,5,6,7,8,9]
let n1 = 5

rechBINAIRE(array1,n1)