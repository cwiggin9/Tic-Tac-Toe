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

const players = (mark) => {
    return { mark };
};

const displayController = (() => {
    const X = players('X');
    const O = players('O');
    
    let currentPlayer = X;

    AddMark = (event) => {
        event.currentTarget.textContent = currentPlayer.mark;
        currentPlayer = currentPlayer === X ? O : X
    }

    return { AddMark }
})();

const gameboard = document.getElementById("gameboard");
const squares = document.querySelectorAll(".square");

function RenderContents() {
    const boardRef = gameBoard.gameboard;
    let counter = 0;

    for(let i = 0; i < boardRef.length; i++){
        for(let j = 0; j < boardRef.length; j++){
            squares[counter].textContent = boardRef[i][j];
            counter++;
        }
    }
};

RenderContents();

squares.forEach(square => {
    square.addEventListener("click", displayController.AddMark);
});
