let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnX = true; //Player X , Player O

let click = 0;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],    
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () => {
    turnX = true;
    enableBtns();
    msgContainer.classList.add("hide");
    click = 0;
};


boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("Box was clicked !");
        click++;

        if(turnX) {
            //box.innerText = "X";
            box.innerHTML = "<p id = 'X'>X</p>";            
            turnX = false;
        } else {
            //box.innerText = "O";
            box.innerHTML = "<p id = 'O'>O</p>";            
            turnX = true;
        }
        box.disabled = true ;

        checkWinner();
    });
});

const disableBtns = () => {
    for(box of boxes) {
        box.disabled = true;
    }
};

const enableBtns = () => {
    for(box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
};

const showWinner = (winner) => {
    msg.innerText= `Congratulations, the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtns();
};

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner is Player",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
    if (click >=9) {
        msg.innerText = "It's a Draw!";
        msgContainer.classList.remove("hide");
    }
};



newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

