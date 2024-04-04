import inquirer from "inquirer";
import chalk from "chalk";

const answer : {
    NumberOne : number
    NumberTwo : number
    Operator : string
} = await inquirer.prompt([
    {type : "number",
    name : "NumberOne",
    message : "Kindly enter you first number:"
},
{type : "number",
name : "NumberTwo",
message : "Kindly enter you second number:"
},
{type : "list",
name : "Operator",
choices : ["+","-","*","/"],
message : "Enter your operator:"
}
])

const{NumberOne, NumberTwo ,Operator} = answer;

let result
switch(Operator) {
    case " + ":
        result = NumberOne + NumberTwo;
        break;
        case"-":
        result = NumberOne - NumberTwo;
        break;
        case"*":
        result = NumberOne * NumberTwo;
        break;
        case"/":
        result = NumberOne / NumberTwo;
        break;
        default:
            console.log("Invalid operator");
}
console.log(`${NumberOne} ${Operator} ${NumberTwo} = ${result}`)