
function selection(array){
    for (i = 0 ; i < array.length ; i++){
        let min = i
        for(j = i + 1 ; j < array.length ; j++){
            if (array[j]<array[min]){
                min = j ;
            }
        }
        let tmp = array[i]
        array[i] = array[min]
        array[min] = tmp
    }
    return array
}

array1 = [1,3,4,5,8,7,6,5,4]

selection(array1)

console.log(selection(array1))


