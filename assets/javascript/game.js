var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wins = 0;
var losses = 0;
var guesses = 8;
var guessed = [];

winsText.textContent = " ";
lossesText.textContent = " ";
guessesLeft.textContent = " ";
lettersGuessed.textContent = " ";
endStatement.textContent = "I'm thinking of a letter,";





// var computerChoiceText = document.getElementById("computer-choice-text")
var winsText = document.getElementById("games-won");
var lossesText = document.getElementById("games-lost");
var guessesLeft = document.getElementById("guesses-left");
var lettersGuessed = document.getElementById("letters-guessed");
var endStatement = document.getElementById("end-statement");

// Randomly chooses a choice from the options array. This is the Computer's guess.

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log(guessed);

document.onkeyup = function (event) {

    var userGuess = event.key;
    endStatement.textContent = " ";
    console.log("U: " + userGuess);
    console.log("C: " + computerGuess);
    console.log(computerChoices.includes(userGuess))

    if (computerChoices.includes(userGuess)) {

        if (guesses === 0) {

            guesses = 8;
            guessed = [];
            losses++;
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            endStatement.textContent = "You lose! I'm thinking of a new letter guess a new letter to play again."
            lossesText.textContent = losses;
            guessesLeft.textContent = guesses + 1;

        } else if (guessed.includes(userGuess)) {

            alert("You already guessed that! Guess again.");
            console.log(guessed);

        } else if (userGuess != computerGuess) {

            guesses--;
            guessed.push(userGuess);
            lettersGuessed.textContent = guessed;
            guessesLeft.textContent = guesses + 1;

        } else {

            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            guesses = 8;
            guessed = [];
            wins++;
            winsText.textContent = wins;
            endStatement.textContent = "You won! I'm thinking of a new letter guess a new letter to play again."
            guessesLeft.textContent = guesses + 1;

        }
    } else {

        alert("You pressed a non-letter!")

    }


}



// }



// tiesText.textContent = "You've tied " + ties + " games";
// winsText.textContent