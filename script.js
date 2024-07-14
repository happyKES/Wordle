// script.js
const WORDS = ["apple", "grape", "mango", "berry", "lemon", "peach", "hello", "world"];
const word = WORDS[Math.floor(Math.random() * WORDS.length)];
let currentRow = 0;
const maxRows = 6;

document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const guessInput = document.getElementById("guess-input");
    const submitGuess = document.getElementById("submit-guess");

    for (let i = 0; i < maxRows; i++) {
        for (let j = 0; j < 5; j++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            cell.id = `cell-${i}-${j}`;
            board.appendChild(cell);
        }
    }

    submitGuess.addEventListener("click", () => {
        const guess = guessInput.value.toLowerCase();
        if (guess.length !== 5) {
            alert("Please enter a 5-letter word");
            return;
        }

        if (currentRow >= maxRows) {
            alert("Game over! You've used all your guesses.");
            return;
        }

        for (let i = 0; i < 5; i++) {
            const cell = document.getElementById(`cell-${currentRow}-${i}`);
            cell.textContent = guess[i];

            if (guess[i] === word[i]) {
                cell.classList.add("correct");
            } else if (word.includes(guess[i])) {
                cell.classList.add("present");
            } else {
                cell.classList.add("absent");
            }
        }

        if (guess === word) {
            alert("Congratulations! You've guessed the word!");
            return;
        }

        currentRow++;
        guessInput.value = "";
        if (currentRow === maxRows) {
            alert(`Game over! The word was ${word}.`);
        }
    });
});
