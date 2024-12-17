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


function getHumanChoice(){

const humanChoice = prompt("What do you choose?").toLowerCase();

     if(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors"){
        alert(`You chose: ${humanChoice}`)
        return humanChoice;
    } else {
        alert("I don't understand your choice");
        return null;        
    }
}




const humanSelection = getHumanChoice();
console.log(`human: ${humanSelection}`);

const computerSelection = getComputerChoice();
console.log(`computer: ${computerSelection}`);




function playGame(){

    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice){
        
        if(humanChoice === computerChoice){
         alert("No one wins! You both choosed the same!")
       } else if (humanChoice === "rock" && computerChoice === "scissors"){
         alert("You win! Rock beats scissors")
         humanScore++;
       } else if (humanChoice === "scissors" && computerChoice === "paper"){
         alert("You won! Scissors beats paper!")
         humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock"){
            alert("You won! Paper beats rock!")
            humanScore++;
        } else {
            alert("You lost!");
            computerScore++;
        }
     
      
    }


for (let i = 0; i < 5; i++){
    console.log(`Iteration: ${i}`);
    let humanSelection = getHumanChoice()
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

console.log(`human score ${humanScore}`);
console.log(`computer score ${computerScore}`);
  
}

        
playGame();

    
