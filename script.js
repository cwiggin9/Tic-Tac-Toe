const gameBoard = (() => {
    const gameboard = [
        ['X', 'X', 'X'],
        ['O', 'O', 'O'],
        ['X', 'O', 'X']
    ];
    return {
        gameboard
    };
})();

const displayController = (() => {

})();

const players = () => {

};

const gameboard = document.getElementById("gameboard");

function renderContents() {
    const boardRef = gameBoard.gameboard;

    for(var i = 0; i < boardRef.length; i++){
        for(var j = 0; j < boardRef.length; j++){
            let tile = document.createElement("div");
            tile.classList.add('square');
            tile.textContent = boardRef[i][j];
            gameboard.appendChild(tile);
        }
    }
}

renderContents();
