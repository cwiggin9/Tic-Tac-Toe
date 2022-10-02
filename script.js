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
        if(event.currentTarget.textContent === ""){
            event.currentTarget.textContent = currentPlayer.mark;
            currentPlayer = currentPlayer === X ? O : X
            RenderContents();
        };
    }

    return { AddMark }
})();

const gameboard = document.getElementById("gameboard");

const squares = document.querySelectorAll(".square");
squares.forEach(square => {
    square.addEventListener("click", displayController.AddMark);
});

function RenderContents() {
    const boardRef = gameBoard.gameboard;
    let counter = 0;

    for(let i = 0; i < boardRef.length; i++){
        for(let j = 0; j < boardRef.length; j++){
            boardRef[i][j] = squares[counter].textContent;
            counter++;
        }
    }
};

function RemoveListeners(){
    squares.forEach(square => {
        square.removeEventListener("click", displayController.AddMark);
    });
}
