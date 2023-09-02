const gameAsset = (function () {
    // const cells = document.querySelectorAll('.cell');
    const cells = document.querySelector('.cells');
    const playerStatus = document.querySelector('.playerStatus');
    const gameStatus = document.querySelector('.gameStatus');
    const resetButton = document.querySelector('.resetButton');
    const winCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    return {
        cells,
        playerStatus,
        winCondition,
        gameStatus,
        resetButton,
    };
})();
function gameInit() {
    this.board = [
        '', '', '',
        '', '', '',
        '', '', '',
    ];
    this.currentPlayer = 'X';
    this.gameRunning = true;
    gameAsset.playerStatus.textContent = `${this.currentPlayer}'s turn`;
    gameAsset.gameStatus.textContent = '';
    if (this.gameRunning === true) {
        gameAsset.cells.addEventListener('click', (event) => {
            var _a;
            if (((_a = event.target) === null || _a === void 0 ? void 0 : _a.className) === 'cell') {
                cellClicked.call(gameInit, event.target);
            }
        });
    }
    displayResetButton.call(this);
}
function cellClicked(cell) {
    if (this.gameRunning === true) {
        const cellIndex = parseInt(cell.getAttribute('data-cellIndex'));
        updateBoard.call(gameInit, cell, cellIndex);
    }
}
function updateBoard(cell, cellIndex) {
    this.board[cellIndex] = this.currentPlayer;
    cell.textContent = this.currentPlayer;
    switchPlayers.call(gameInit);
    displayResetButton.call(gameInit);
    console.log(this.board);
}
function switchPlayers() {
    if (checkWinner.call(gameInit)) {
        gameAsset.gameStatus.textContent = `${this.currentPlayer} wins`;
        disableClickEvent.call(gameInit);
        resetGame.call(gameInit);
    }
    else {
        this.currentPlayer = (this.currentPlayer === 'X') ? 'O' : 'X';
        gameAsset.playerStatus.textContent = `${this.currentPlayer}'s turn`;
    }
}
function checkWinner() {
    return gameAsset.winCondition.some((condition) => {
        return condition.every((index) => {
            return this.board[index] === this.currentPlayer;
        });
    });
}
function disableClickEvent() {
    this.gameRunning = false;
    gameAsset.cells.removeEventListener('click', function (event) {
        var _a;
        if (((_a = event.target) === null || _a === void 0 ? void 0 : _a.className) === 'cell') {
            cellClicked.call(gameInit, event.target);
        }
    });
}
function displayResetButton() {
    gameAsset.resetButton.style.display = (this.gameRunning) ? 'none' : 'block';
}
function resetGame() {
    gameAsset.resetButton.addEventListener('click', () => {
        // for (let i = 0; i < 9; i += 1) {
        //   gameAsset.cells.children[i].firstElementChild.textContent = ''
        // }
        Array.from(gameAsset.cells.children).forEach((cell) => cell.textContent = '');
        gameAsset.cells.addEventListener('click', (event) => {
            var _a;
            if (((_a = event.target) === null || _a === void 0 ? void 0 : _a.className) === 'cell') {
                cellClicked.call(gameInit, event.target);
            }
        });
    });
    this.gameRunning = true;
    gameInit.call(gameInit);
}
gameInit.call(gameInit);
