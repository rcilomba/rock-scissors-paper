const gameContainer = document.querySelector("#game-container");
const resultContainer = document.querySelector("#result-container");

const rock = "rock";
const scissors = "scissors";
const paper = "paper";

const gameSelection = ["rock", "scissors", "paper"]

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * gameSelection.length); //skriver ut index
    let chosenValue = gameSelection[computerChoice] //skriver ut värdet istället för index
    return chosenValue;
}

getComputerChoice();

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice){
        
        if(humanChoice === computerChoice){
            resultContainer.innerHTML += "<br> No one wins! You both choosed the same!";
       } else if (humanChoice === "rock" && computerChoice === "scissors"){
         resultContainer.innerHTML += "<br> You win! Rock beats scissors <br>"
         humanScore++;
       } else if (humanChoice === "scissors" && computerChoice === "paper"){
         resultContainer.innerHTML += "<br> You won! Scissors beats paper! <br>";
         humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock"){
            resultContainer.innerHTML += "You won! Paper beats rock! <br>";
            humanScore++;
        } else {
            resultContainer.innerHTML += "You lost! <br>";
            computerScore++;
        } 
    
        resultContainer.innerHTML += `<br> Current Scores - Human: ${humanScore}, Computer: ${computerScore} <br>`

        if(humanScore === 5){
            resultContainer.innerHTML ="Congrats! You won!"
            disableButtons();
        } else if (computerScore === 5){
            resultContainer.innerHTML = "Game over! You lost!"
            disableButtons();
        }
    }


    

    function disableButtons(){
        rockBtn.disabled = true;
        scissorsBtn.disabled = true;
        paperBtn.disabled = true;
    }

    
    const rockBtn = document.createElement("button");
    const paperBtn = document.createElement("button");
    const scissorsBtn = document.createElement("button");

    rockBtn.textContent = "Rock";
    paperBtn.textContent = "Paper";
    scissorsBtn.textContent = "Scissors";

    gameContainer.append(rockBtn)
    gameContainer.append(scissorsBtn)
    gameContainer.append(paperBtn)

    rockBtn.addEventListener("click", () => {
        if(humanScore < 5 && computerScore < 5){
            const humanSelection = "rock";
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
            console.log("Human clicked on:", rock);
            console.log("Computer:", computerSelection); 
        }
           

    })

    scissorsBtn.addEventListener("click", () =>{
        if(humanScore < 5 && computerScore < 5){
            const humanSelection = "scissors";
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
            console.log("Human clicked on:", scissors);
        }
        
    })

    paperBtn.addEventListener("click", () => {
        if(humanScore < 5 && computerScore < 5){
            const humanSelection = "paper";
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
            console.log("Human clicked on:", paper);
        }
        
    })

    
console.log(`Human score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);
  
//result div
resultContainer.innerHTML = `Human score: ${humanScore} <br> Computer score: ${computerScore}`
 


}

        
playGame();


    
