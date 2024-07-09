


let boxes = document.querySelectorAll(".box");
let resetGameBtn = document.querySelector("#reset-game-btn");
let newGameBtn = document.querySelector("#new-game-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;
let count = 0;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{

    
        if (turnO){
            box.innerText = "O"
            box.style.color = "#353535"
            turnO = false;
        }else{
            box.innerText = "X"
            box.style.color = "#d9d9d9"
            turnO = true;
        }
        box.disabled = true ;
        count++;

        let isWinner = checkWinner();

         if (count === 9 && !isWinner) {
            gameDraw();
       }

    });
});


const resetGame = () =>{
    turnO = true ;
    count = 0 ;
    enableBoxes();
    msgContainer.classList.add("hide");
    resetGameBtn.style.display = "block";
}

const winPatterns= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];


const checkWinner = ()=>{
   for(let pattern of winPatterns){

    let pos1Val = boxes[pattern[0]].innerText ;
    let pos2Val = boxes[pattern[1]].innerText ;
    let pos3Val = boxes[pattern[2]].innerText ;


    if(pos1Val!= "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val=== pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
            return true;
        }
    }
   }

};

const disableBoxes = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
}

const showWinner = (winner)=>{
    msg.innerText = `Congratulation, The winner is ${winner}`
    msgContainer.classList.remove("hide");
    resetGameBtn.style.display = "none"
    disableBoxes();
};

const gameDraw = () =>{
    msg.innerText = `Opps ! The Game is Draw.`;
    msgContainer.classList.remove("hide");
    resetGameBtn.style.display = "none"
    disableBoxes();
}


newGameBtn.addEventListener ("click",resetGame);
resetGameBtn.addEventListener ("click",resetGame);












