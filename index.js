let boxes= document.querySelectorAll(".box")
let turn ="O";
let para = document.querySelector("p");
let resetBtn= document.querySelector("#reset");
const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [2,4,6],[0,4,8]
];
const reset=()=>{
resetBtn.addEventListener("click",()=>{
    boxes.forEach((e)=>{
        e.innerHTML=""
        e.disabled=false;
        turn="O";
        para.innerText="Player1's Turn";
    })
});
}

boxes.forEach((box) =>{

    box.addEventListener("click",()=>{
        if(turn=="O"){
        turn="X"
        box.innerText="O";
        box.disabled = true;
        para.innerText="Player2's Turn";
       
    }else{
       turn="O"; 
       box.innerText="X";
       box.disabled = true;
    para.innerText="Player1's Turn";
    }
    checkWinner();
    });
});
const checkWinner=()=>{
    for(pattern of winPatterns){
        let pos1val =boxes[pattern[0]].innerHTML
        let pos2val =boxes[pattern[1]].innerHTML
        let pos3val =boxes[pattern[2]].innerHTML
       if(pos1val!="" && pos2val !="" && pos3val !=""){
       if(pos1val==pos2val && pos2val==pos3val)
        {
            if(turn=="X"){
                alert("Player 1 is Winner!!")
            }else{
                alert("Player 2 is a winner!!")
            }
            boxes.forEach((e)=>{
                e.innerHTML=""
                e.disabled=false;
                turn="O";
                para.innerText="Player1's Turn";
            })
       }    
    }
    }
    }
