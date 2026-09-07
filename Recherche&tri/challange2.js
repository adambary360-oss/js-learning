let nombres = [8, 3, 5, 1, 9, 2];
console.log("Avant le tri : " + nombres.join(", "));

for (let i = 1; i < nombres.length; i++) {
    let cle = nombres[i]; 
    let j = i - 1;

    while (j >= 0 && nombres[j] > cle) {
        nombres[j + 1] = nombres[j];
        j--; 
    }

    nombres[j + 1] = cle;
}

console.log("Après le tri : " + nombres.join(", "));