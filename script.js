function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*4);

    if (randomNumber == 1) return "rock";
    else if (randomNumber == 2) return "paper";
    else return "scissors";

}

function getHumanChoice(){
    let userInput = prompt("Enter your Choice: ").toLowerCase()
    return userInput
}

function playRound(userChoice, computerChoice){

    if(userChoice == computerChoice) {
        console.log("Draw");
        return;
    }

    if(userChoice == 'rock' && computerChoice == 'scissors'  || userChoice == 'paper' && computerChoice == "rock" || userChoice == 'scissors' && computerChoice == "paper"){
        userScore++;
        alert(`You win! ${userChoice} beats ${computerChoice}`);
    }

    else {
        computerScore++;
        alert(`You lose! ${computerChoice} beats ${userChoice}`);
    }


}

let userScore = 0;
let computerScore = 0;

function playgame(){

    for(let i=0; i<5; i++){
        
        let userChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        alert(`Computer chose ${computerChoice}`)
        
        playRound(userChoice, computerChoice);
        
    }

    let winner = userScore > computerScore ? "You" : "Computer";
    alert(`${winner} win!`);
}

playgame();


