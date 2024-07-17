let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
    [0, 4, 8], [2, 4, 6]             // diagonal
];

function placeMarker(cellIndex) {
    if (gameActive && board[cellIndex] === '') {
        board[cellIndex] = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
        if (checkWin()) {
            document.getElementById('message').innerText = `¡${currentPlayer} ha ganado!`;
            gameActive = false;
        } else if (board.every(cell => cell !== '')) {
            document.getElementById('message').innerText = '¡Empate!';
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    return winPatterns.some(pattern => {
        return pattern.every(index => {
            return board[index] === currentPlayer;
        });
    });
}

function resetBoard() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('message').innerText = '';
    Array.from(document.getElementsByClassName('cell')).forEach(cell => {
        cell.innerText = '';
    });
}
