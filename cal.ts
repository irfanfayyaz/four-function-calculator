#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message: "Enter your first number", type: "number", name: "firstNumber"},
    {message: "Enter your second number", type: "number", name: "secondNumber"},
    {message: "Select operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
])

// conditional formatting

if(answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber)
} else if(answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber)
} else if(answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber)
} else if(answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber)
} else {
    console.log("Select valid operator")
}
console.log('THE END');