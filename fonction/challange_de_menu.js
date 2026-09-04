const prompt = require('prompt-sync')();

function Somme(a, b) {
    let result = a + b
    return result
}
function Multiplication(a, b) {
    let result = a * b
    return result
}
function Soustraction(a, b) {
    let result = a - b
    return result
}
function Division(a, b) {
    let result = a / b
    return result
}

console.log("===Menu=== \n 1.Somme\n2.Soustraction\n3.Multiplication\n4.Division\n5.Quitter")

let choice = parseInt(prompt(" choise une option :"))

if (choice == 1 ){
    let a = parseInt(prompt("enter a :"))
    let b = parseInt(prompt("enter b:"))
    console.log(Somme(a ,b))
}
else if (choice == 2){
    let a = parseInt(prompt("enter a :"))
    let b = parseInt(prompt("enter b:"))
    console.log(Soustraction(a ,b))
    
}
else if (choice == 3 ){
    let a = parseInt(prompt("enter a :"))
    let b = parseInt(prompt("enter b:"))
    console.log(Multiplication(a ,b))
    
}
else if (choice == 4){
    let a = parseInt(prompt("enter a :"))
    let b = parseInt(prompt("enter b:"))
    console.log(Division(a ,b)) 
}
else{
    console.log("quit")
}
  


