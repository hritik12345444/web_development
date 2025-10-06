
let boxes = document.querySelectorAll(".box");
let res_btn = document.querySelector("#res-btn");
let turnO= false;  // for track turn of which player
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let newGameBtn = document.querySelector("#new-gamebtn");


// winnign patter (innme se koi bhi pattern mathch krr gya to smjho ki wo banda match winn krr gya)
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


boxes.forEach((box) =>{
    
    box.addEventListener("click", ()=>{
        // console.log("box is clicked");
        if(turnO==false){
            box.innerHTML = "X";
            box.style.color = "red";
            turnO = true;
        }else{
            box.innerHTML = "O";
            box.style.color = "black";
            turnO = false;
        }
        box.disabled = true;
        checkwinner();
    })
});


// after winning the game the remaining box is empty but we cant write any operations on it 
function disabledBox(){
    // boxes.forEach ((box) =>{
    //     if(box.innerText === ""){
    //         box.disabled= true;
    //     }
    // })

    // both method is true for disabled remaining boxes
    for(let box of boxes){
        if(box.innerText === ""){
            box.disabled = true;
        }
    }
}


// check is the game draw or not 
const checkDraw = ()=>{
    let filled = true;

    boxes.forEach((box) =>{
        if(box.innerText === ""){
            filled = false;
        }
    });

    if(filled){
        msg.innerText = "Game Draw!";
        msgContainer.classList.remove("hide");
        // res_btn.style.display = "none";
    }
};



// show who is winner
const showWinner = (winner)=>{
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide"); // abb msgcontainer ko css me hide kiye the to abb unhide krr denge taki winner show kre
    disabledBox(); // jeetne ke badh bacche hue box me kuch fill nhi krr skre uske liye ye function
    //res_btn.style.opacity = 0;
    res_btn.style.display = "none";   // hide the reset btn after alounced the winner
};



// check fro winner or call for checkDraw
const checkwinner = () =>{

    let winnerFound = false;  // ye  last me hmme btayega ki winnermilla hai ya nahi agaar nhi milla hai to draw ka condition hit krega
    for(let pattern of winPattern){
        // console.log(pattern);
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        // console.log(pos1val, pos2val, pos3val);

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val); // winner show krne ke liye yeah pos1val per jo value hai wo game winn krr jayega
                winnerFound = true;
            }
        }
    }

    if(!winnerFound){
        checkDraw();
    }
}


// reset the game 2 method for reset game   // location.reload(); it's method 1 working fully but not perfect
res_btn.addEventListener("click",()=>{
    // location.reload();

    boxes.forEach((box) =>{
        box.innerText = "";
        box.disabled = false;
    });
    turnO = false;
    msgContainer.classList.add("hide");
    msg.innerText = "";
})



// after winn the game than we will able to start a new game 
newGameBtn.addEventListener("click", ()=>{
    // location.reload();
    boxes.forEach((box) =>{
        box.innerText = "";
        box.disabled = false;
    });

    turnO = false;
    msgContainer.classList.add("hide");
    msg.innerText ="";
})
