var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wins = 0;
var losses = 0;
var guesses = 9;
var guessed = [];
var gameOver = false;
var winsText = document.getElementById("games-won");
var lossesText = document.getElementById("games-lost");
var guessesLeft = document.getElementById("guesses-left");
var lettersGuessed = document.getElementById("letters-guessed");
var directions = document.getElementById("game-directions");
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

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

            if (gameOver === false) {
                losses++;
                lettersGuessed.textContent = "Letters guessed: " + guessed;
                directions.textContent = "You lose! Press any key play again.";
                lossesText.textContent = "Games lost: " + losses;
                guessesLeft.textContent = "Guesses left: 0";
                gameOver = true;
                guessed = [];

            } else {
                guesses = 9;
                directions.textContent = "I'm thinking of a new letter better start guessing!";
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                gameOver = false;
                guessesLeft.textContent = "Guesses left: 10";
                lettersGuessed.textContent = "Letters guessed: " + guessed;
            }

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
            guesses = 0;
            guessed = [];
            wins++;
            directions.textContent = "You won! Press any key play again.";
            winsText.textContent = "Games won: " + wins;
            gameOver = true;
        }

    } else {
        directions.textContent = "Make sure you only press letters!";

    }
}