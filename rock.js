let user_score=0;
let comp_score=0;
const compara=document.querySelector("#compscore");
const userpara=document.querySelector("#userscore");

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
function drawgame(){
    console.log("game was draw,try again");
    msg.innerText="Game Draw!!!"
    msg.style.backgroundColor="plum";
}
gen_comp_choice=()=>{
    opt=["rock","paper","scissor"];
   let c= Math.floor(Math.random()*3)
  
    return(opt[c])
}
winner=(userwin,userchoice,compchoice)=>{
    if(userwin){
    user_score++; 
     console.log(`you win!! `);
     msg.innerText=`you win!!  ${userchoice} defeated ${compchoice}`
     msg.style.backgroundColor="skyblue";
     userpara.innerText=user_score;
    }
    else{
        comp_score++;
        console.log("computer wins");
        msg.innerText=`Computer Wins ${compchoice} defeated ${userchoice}` ;
        compara.innerText=comp_score;
         msg.style.backgroundColor="lightgreen";
    }
}
playgame=(userchoice)=>{
    console.log("you choosed ==>",userchoice)
    
    compchoice=gen_comp_choice();
    console.log("computer selected =>",compchoice);
    if(userchoice===compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if (userchoice==="rock"){
            //paper,scissor
            userwin=compchoice==="paper" ?false:true;
        }
        else if(userchoice==="paper"){
            //rock,scissor
            userwin=compchoice==="scissor" ?false:true;
        }
        else {
            //rock,paper
            userwin= compchoice==="rock" ? false:true;
        }
        winner(userwin,userchoice,compchoice);
    }
  
 }
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    //   console.log("choice was clicked");
      let userchoice=choice.getAttribute("id");
      playgame(userchoice)
    })
})
