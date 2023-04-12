// List of possible moves
const moves = ['rock', 'paper', 'scissors'];

// Play a round of the game
function play(playerMove) {
    // Generate a random computer move
    const computerMove = moves[Math.floor(Math.random() * moves.length)];

    // Determine the winner
    let result;
    if (playerMove === computerMove) {
        result = "It's a tie!";
    } else if (playerMove === 'rock' && computerMove === 'scissors' ||
        playerMove === 'paper' && computerMove === 'rock' ||
        playerMove === 'scissors' && computerMove === 'paper') {
        result = 'You win!';
    } else {
        result = 'Computer wins!';
    }

    // Display the result
    const resultContainer = document.getElementById('result');
    resultContainer.textContent = `You played ${playerMove}, computer played ${computerMove}. ${result}`;
}
