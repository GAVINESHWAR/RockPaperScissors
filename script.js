let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");
const button = document.querySelector(".btn1")
const genComputerChoice = ()=>{
    const options =["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    // rock, paper, scissors
    return options[randIdx]
}

const drawGame = () =>{
    console.log("Game was Draw play again!")
    msg.innerText="Game was Draw play again!";
    msg.style.backgroundColor="#081b31";
    msg.style.color = "white";
};

const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);   
    // Generate computer choice-> modular
    const compChoice = genComputerChoice();
    console.log("comp choice = ",compChoice );
    if (userChoice===compChoice){
        // Draw
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice==="rock") {
            userWin  = compChoice === "paper" ? false:true   
        }else if(userChoice==="paper"){
            userWin = compChoice==="rock"?false:true;
        }else{
            userWin= compChoice==="paper"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};
//  showing winner

const showWinner  = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++
        msg.innerText = "You Won the game! Your "+userChoice+" beats "+compChoice;
        msg.style.backgroundColor = "green"
        msg.style.color = "white"
        user.innerText = userScore;
        button.addEventListener("click",()=>{
            console.log("restart");
            userScore = 0;
            user.innerText = userScore;
            msg.innerText="Play your move";
            msg.style.backgroundColor="#081b31";
    msg.style.color = "white";
});
    }else{
        compScore++
        console.log("You Lose ");
        msg.innerText = "You Lose The Game Your "+userChoice+" beats "+compChoice;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    comp.innerText = compScore;
    button.addEventListener("click",()=>{
        console.log("restart");
        compScore = 0;
        comp.innerText = compScore;
        msg.innerText = "Play your move";
        msg.style.backgroundColor="#081b31";
    msg.style.color = "white";
});
        
    
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});