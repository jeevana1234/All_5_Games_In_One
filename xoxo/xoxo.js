const board = document.querySelector('.board');
const cells = document.querySelectorAll('.cell');
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6], // diagonals
];
let currentPlayer = 'X';
let gameEnded = false;

// Handle cell click event
function handleCellClick(event) {
    const cell = event.target;
    if (gameEnded || cell.textContent !== '') {
        return;
    }

    // Mark cell with current player's symbol
    cell.textContent = currentPlayer;

    // Check if the game has ended
    if (checkForWinner()) {
        alert(`${currentPlayer} wins!`);
        gameEnded = true;
        return;
    }
    if (checkForDraw()) {
        alert("It's a draw!");
        gameEnded = true;
        return;
    }

    // Switch to the other player's turn
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Check if any player has won the game
function checkForWinner() {
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (cells[a].textContent !== '' && cells[a].textContent === cells[b].textContent && cells[b].textContent === cells[c].textContent) {
            return true;
        }
    }
    return false;
}

// Check if the game has ended in a draw
function checkForDraw() {
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].textContent === '') {
            return false;
        }
    }
    return true;
}

// Add event listeners to each cell
cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});
