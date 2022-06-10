let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2


let sa = document.getElementById("sum-el")

function add(){
    result = num1 + num2
    sa.textContent = "Sum: " + result
}

function subtract(){
    result = num1 - num2
    sa.textContent = "Sub: " + result
}

function divide(){
    result = num1 / num2
    sa.textContent = "Divide: " + result
}

function multiply(){
    result = num1 * num2
    sa.textContent = "Multiplication: " + result
}






