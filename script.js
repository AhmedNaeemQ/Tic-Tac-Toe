let boxes = document.querySelectorAll('#box');
let winner = document.querySelector('#winner');
let resetBtn = document.querySelector('#reset-btn');

let turn = true; // O's turn
let marked = 0;

const WinPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function disableboxes(){
    boxes.forEach(box => {
        box.disabled = true;
    });
}

function enableboxes(){
    boxes.forEach(box => {
        box.disabled = false;
    });
}

function checkCombinations(){
    WinPatterns.forEach(pattern => {
        if(boxes[pattern[0]].innerHTML == "X" && boxes[pattern[1]].innerHTML == "X" && boxes[pattern[2]].innerHTML == "X"){
            // console.log("X Wins");
            winner.innerHTML = "X Wins!";
            disableboxes();
        }
        else if (boxes[pattern[0]].innerHTML == "O" && boxes[pattern[1]].innerHTML == "O" && boxes[pattern[2]].innerHTML == "O"){
            // console.log("O wins");
            winner.innerHTML = "O Wins!";
            disableboxes();
        }
    });
}

function drawCheck(){
    if(marked == 9){
        winner.innerHTML = "Draw!";
    }
}

function mark(box){
    if(turn == true && box.innerHTML == ""){
        box.innerHTML = "X";
        turn = false;
        marked++;
    }
    else if(turn == false && box.innerHTML == ""){
        box.innerHTML = "O";
        turn = true;
        marked++;
    }

    checkCombinations();
    drawCheck();

}

function clearBoxes(){
    boxes.forEach(box => {
        box.innerHTML = "";
    });
}

function resetGame(){
    clearBoxes();
    enableboxes();
    winner.innerHTML = "";
    marked = 0;
}

boxes.forEach(box => {
    box.addEventListener("click", () => mark(box));
});

resetBtn.addEventListener('click', () => resetGame());