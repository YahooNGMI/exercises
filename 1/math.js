// 1. Using the `prompt-promise` npm library, ask the user a math question, 
// ie: "What is 5 + 7?". Verify the user has provided answer, and if not, 
// tell the user it is incorrect. The user can have a maximum amount of guesses of 3 -
//  after that, they can no longer guess and the program should exit. 
// If the user is correct, let them know, and the program should exist.

const prompt = require('prompt-promise');


var guesses = 0;

async function guess() {
    while (guesses < 3) {
        const answer = await prompt("What is 5 + 7?\n");
        if (answer === "12") {
            console.log("Correct! The answer is 12");
            break
        } else {
            console.log("Incorrect!")
            guesses += 1;
            console.log("Remaining guesses:", 3 - guesses);
        }
    }
}
guess();
