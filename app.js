let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".resetbtn");
let newgamebtn = document.querySelector(".newgame-btn");
let winmsg = document.querySelector(".win-msg");
let msg = document.querySelector("#msg");
let drawmsg = document.querySelector("#draw-msg");
let drw = document.querySelector(".draw");
let turn = document.querySelector(".turn");
let turnmsg = document.querySelector("#turn-msg");



let turnO = true;
let count = 0;
const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
turnmsg.innerText = "O's Turn";
turn.classList.remove("hide");
boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        resgame();
        if(turnO){
            box.innerText = "O";
            box.style.color = "black";
            turnmsg.innerText = "X's Turn";
           
            
            turnO = false;
        }else{
            box.innerText = "X";
            turnmsg.innerText = "O's Turn";
            box.style.color = "red";
            turnO = "true";
        }
        box.disabled = true;
        count++;
        let iswinner = checkwinner();
        if(count ===9 && !iswinner){
            draw();
        }
    
    })
});
const draw = () =>{
    drw.classList.remove("hide");
    drawmsg.innerText = "The Game was a Draw!!!";
    disablebox();

}
const resgame = () =>{
    reset.classList.remove("show");
}
const resetgame = () =>{
    turnO = true;
    enablebox();
    winmsg.classList.add("hide");
    drawmsg.classList.add("hide");
}


const disablebox = () =>{
    for(let i of boxes){
        i.disabled = true;
    }
}

const enablebox = () =>{
    for(let i of boxes){
        i.disabled = false;
        i.innerText = "";
    }
}
const showwinner = (win) =>{
    msg.innerText = `${win} is the WINNER!!!`;
    winmsg.classList.remove("hide");
    reset.classList.add("show");
    turn.classList.add("hide");
    disablebox();
}

const checkwinner = () =>{
    for(let i of  winpattern){
       let pos1 = boxes[i[0]].innerText;
       let pos2 = boxes[i[1]].innerText;
       let pos3 = boxes[i[2]].innerText;


       if(pos1 !="" && pos2 !="" && pos3 !=""){
        if(pos1 === pos2 && pos2 === pos3){
            console.log("winner",pos1);
            showwinner(pos1);

        }

        
      } 
    }
};

newgamebtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);


