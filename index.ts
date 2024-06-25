#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1 );
console.log("welcome to number guessing game.");

const answers =  await inquirer.prompt([
{
    name: "userGuessNumber",
    type: "number",
    message: "Please guess a number between 1-6: ",
}
]);

if(answers.userGuessNumber === randomNumber){
    console.log("Congratulatios! you guessed right number.")
}else{
    console.log(`You guessed wrong number! correct number is ${randomNumber}`);
}

console.log(answers);

//true condition. run {}
//false- run else block

//pc will generate a random no with math.random
//compare user input with pc generated no. show results

