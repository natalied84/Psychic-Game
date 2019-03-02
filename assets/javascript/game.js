var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wins = 0;
var losses = 0;
var guesses = 9;
var guessed = [];






// var computerChoiceText = document.getElementById("computer-choice-text")
var winsText = document.getElementById("games-won");
var lossesText = document.getElementById("games-lost");
var guessesLeft = document.getElementById("guesses-left");
var lettersGuessed = document.getElementById("letters-guessed");
var directions = document.getElementById("game-directions");

// Randomly chooses a choice from the options array. This is the Computer's guess.

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log(guessed);

document.onkeyup = function (event) {

    var userGuess = event.key;

    directions.textContent = " ";
    winsText.textContent = "Games won: " + wins;
    lossesText.textContent = "Games lost: " + losses;
    guessesLeft.textContent = "Guesses left: " + (guesses + 1);
    lettersGuessed.textContent = "Letters guessed: " + guessed;

    console.log("U: " + userGuess);
    console.log("C: " + computerGuess);
    console.log(computerChoices.includes(userGuess))

    if (computerChoices.includes(userGuess)) {

        if (guesses === 0) {

            guessesLeft.textContent = "Guesses left: 0";
            guesses = 9;
            guessed = [];
            losses++;
            lettersGuessed.textContent = "Letters guessed: " + guessed;
            directions.textContent = "You lose! I'm thinking of a new letter guess a new letter to play again.";
            lossesText.textContent = "Games lost: " + losses;
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        } else if (guessed.includes(userGuess)) {

            directions.textContent = "You already guessed that! Guess again.";
            console.log(guessed);

        } else if (userGuess != computerGuess) {

            guesses--;
            guessed.push(userGuess);
            guessesLeft.textContent = "Guesses left: " + (guesses + 1);
            lettersGuessed.textContent = "Letters guessed: " + guessed;
            directions.textContent = "Wrong letter, keep guessing!";

        } else {

            guessesLeft.textContent = "Guesses left: " + (guesses + 1);
            lettersGuessed.textContent = "Letters guessed: " + guessed;
            guesses = 9;
            guessed = [];
            wins++;
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            directions.textContent = "You won! I'm thinking of a new letter guess a new letter to play again.";
            winsText.textContent = "Games won: " + wins;

        }
    } else {

        directions.textContent = "Make sure you only press letters!";

    }


}



// }



// tiesText.textContent = "You've tied " + ties + " games";
// winsText.textContent