const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const result = document.getElementById('result');

const randomNumber = Math.floor(Math.random() * 100) + 1;
let numGuesses = 0;

submitButton.addEventListener('click', () => {
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        result.textContent = 'Please enter a valid number between 1 and 100.';
    } else {
        numGuesses++;
        if (guess === randomNumber) {
            result.textContent = `Congratulations! You guessed the number in ${numGuesses} guesses.`;
            submitButton.disabled = true;
        } else if (guess < randomNumber) {
            result.textContent = 'Too low, try again.';
        } else {
            result.textContent = 'Too high, try again.';
        }
    }
});
