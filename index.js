"use strict";

const args = process.argv.slice(2);

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// console.log('This is Bob\'s best "friend".');

function calculator () {

const operation = args[0];
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);

let result;
switch (operation) {
  case "add":
    result = add(num1, num2);
    break;
  case "subtract":
    result = subtract(num1, num2);
    break;
  case "multiply":
    result = multiply(num1, num2);
    break;
  case "divide":
    result = divide(num1, num2);
    break;
  default:
    result = "Unknown Operation.";
}

console.log(`Result: ${result}`);
}

module.exports = calculator