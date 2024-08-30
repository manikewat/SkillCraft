const board = document.getElementById('game-board');
const cells = document.querySelectorAll('.cell');
const restartButton = document.getElementById('restart-button');

let currentPlayer = 'X'; // Current player ('X' or 'O')
let gameBoard = Array(9).fill(null); // Track the state of the game

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]              // Diagonals
];

const checkWinner = () => {
    for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return gameBoard[a]; // Return the winner ('X' or 'O')
        }
    }
    return gameBoard.includes(null) ? null : 'Draw'; // Return 'Draw' if board is full
};

const handleClick = (event) => {
    const index = event.target.dataset.index;
    if (!gameBoard[index]) {
        gameBoard[index] = currentPlayer;
        event.target.textContent = currentPlayer;
        const winner = checkWinner();
        if (winner) {
            setTimeout(() => alert(winner === 'Draw' ? 'It\'s a draw!' : `${winner} wins!`), 10);
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
};

const restartGame = () => {
    gameBoard = Array(9).fill(null);
    currentPlayer = 'X';
    cells.forEach(cell => cell.textContent = '');
};

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartButton.addEventListener('click', restartGame);

// Optionally, add computer player logic
// For a full implementation, consider adding AI to handle computer moves
