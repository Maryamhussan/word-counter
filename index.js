#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: "Enter Your Text:"
    }]);
const words = answer.sentence.trim().split(" ");
console.log(words);
console.log(`Your Word Count Is :${words.length}`);
