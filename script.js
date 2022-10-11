const gameBoard = (() => {
    let gameboard = [
        ['A', 'AA', 'AAA'],
        ['B', 'BB', 'BBB'],
        ['C', 'CC', 'CCC']
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
            currentPlayer = currentPlayer === X ? O : X

            RenderContents(event, currentPlayer.mark);

            if(WinCheck() == true) RemoveListeners();
        };
    }
    return { AddMark }
})();

// Adds 'click' listeners to grid elements
const squares = document.querySelectorAll(".square");
squares.forEach(square => {
    square.addEventListener("click", displayController.AddMark);
});

// A function that removes the 'click' listeners from the grid elements
function RemoveListeners(){
    squares.forEach(square => {
        square.removeEventListener("click", displayController.AddMark);
    });
}

function RenderContents(event, mark){
    event.currentTarget.textContent = mark;
    let x = event.target.getAttribute('data-x');
    let y = event.target.getAttribute('data-y');
    gameBoard.gameboard[x][y] = mark;
}

// A function that checks for a winning match on the board
function WinCheck(){
    let boardRef = gameBoard.gameboard;
    let win = false;

    for(let i = 0; i < 3; i++){
        // horizontal match check
        if((boardRef[i][0] === boardRef[i][1]) && (boardRef[i][0] === boardRef[i][2])){
            win = true;
        }

        // vertical match check
        if((boardRef[0][i] === boardRef[1][i]) && (boardRef[0][i] === boardRef[2][i])){
            win = true;
        }
    }
    // diagonal match checks
    if((boardRef[0][0] === boardRef[1][1]) && (boardRef[0][0] === boardRef[2][2])) win = true;
    if((boardRef[0][2] === boardRef[1][1]) && (boardRef[0][2] === boardRef[2][0])) win = true;
    return win;
}
