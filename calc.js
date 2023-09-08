var colors = require('ansi-colors');
var prompt = require('prompt-sync')();



function  calc (num1, num2, op) {

    if (op === "+" || op === "-" || op ===  "/" || op === "*") {
      return  eval (num1 + op + num2)
    } else {
        return;
    }
}


var num1 = prompt("Enter first number: ")
var num2 = prompt("Enter second number: ")
var op = prompt("Enter operator: ")

console.log(calc(num1,num2,op));
