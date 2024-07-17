const boardSize = 10;
const mineCount = 10;
let board = [];
let minePositions = [];

function createBoard() {
    const boardElement = document.getElementById('minesweeper');
    boardElement.innerHTML = '';
    board = [];
    minePositions = [];

    for (let i = 0; i < boardSize; i++) {
        board.push([]);
        for (let j = 0; j < boardSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('click', () => revealCell(i, j));
            boardElement.appendChild(cell);
            board[i].push({
                element: cell,
                isRevealed: false,
                isMine: false,
                adjacentMines: 0
            });
        }
    }

    placeMines();
    calculateAdjacentMines();
}

function placeMines() {
    let placedMines = 0;
    while (placedMines < mineCount) {
        const row = Math.floor(Math.random() * boardSize);
        const col = Math.floor(Math.random() * boardSize);
        if (!board[row][col].isMine) {
            board[row][col].isMine = true;
            minePositions.push([row, col]);
            placedMines++;
        }
    }
}

function calculateAdjacentMines() {
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            if (board[i][j].isMine) continue;
            let adjacentMines = 0;
            for (let x = -1; x <= 1; x++) {
                for (let y = -1; y <= 1; y++) {
                    const newRow = i + x;
                    const newCol = j + y;
                    if (newRow >= 0 && newRow < boardSize && newCol >= 0 && newCol < boardSize && board[newRow][newCol].isMine) {
                        adjacentMines++;
                    }
                }
            }
            board[i][j].adjacentMines = adjacentMines;
        }
    }
}

function revealCell(row, col) {
    if (board[row][col].isRevealed || board[row][col].isFlagged) return;
    board[row][col].isRevealed = true;
    board[row][col].element.classList.add('revealed');

    if (board[row][col].isMine) {
        board[row][col].element.innerHTML = '💣';
        gameOver();
        return;
    }

    if (board[row][col].adjacentMines > 0) {
        board[row][col].element.innerHTML = board[row][col].adjacentMines;
    } else {
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                const newRow = row + x;
                const newCol = col + y;
                if (newRow >= 0 && newRow < boardSize && newCol >= 0 && newCol < boardSize) {
                    revealCell(newRow, newCol);
                }
            }
        }
    }
}

function gameOver() {
    minePositions.forEach(([row, col]) => {
        board[row][col].isRevealed = true;
        board[row][col].element.classList.add('revealed');
        board[row][col].element.innerHTML = '💣';
    });
    alert('Game Over');
}

function resetGame() {
    createBoard();
}

document.addEventListener('DOMContentLoaded', () => {
    createBoard();
});
