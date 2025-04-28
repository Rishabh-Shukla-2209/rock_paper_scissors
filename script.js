async function getComputerChoice() {
    return new Promise((resolve) => {
      let computerChoice;
      const interval = setInterval(() => {
        computer_choices.forEach(ch => {
          ch.classList.remove("choosing");
        });
  
        let randomNumber = Math.floor(Math.random() * 3);
        computer_choices[randomNumber].classList.add("choosing");
        computerChoice = randomNumber;
      }, 100);
  
      setTimeout(() => {
        clearInterval(interval);
        resolve(computer_choices[computerChoice].innerText);
      }, 1500);
    });
  }
  


function playRound(userChoice, computerChoice){

    if(userChoice == computerChoice) {
        return "Draw";
    }

    if(userChoice == 'rock' && computerChoice == 'scissors'  || userChoice == 'paper' && computerChoice == "rock" || userChoice == 'scissors' && computerChoice == "paper"){
        return "User Won"
    }

    else {
        return "Computer Won"
    }


}

let userScore = 0;
let computerScore = 0;

async function playgame(){
        
    let computerChoice = await getComputerChoice();
    let userChoice = choice
    
    const winner = playRound(userChoice.toLowerCase(), computerChoice.toLowerCase());
        
    document.querySelector("h1").innerText = winner;
}

const user_choices = document.querySelectorAll(".user.selection");
const computer_choices = document.querySelectorAll(".comp.selection");
let choice = ""

user_choices.forEach(btn => {
    btn.addEventListener("click", (e) => {
        choice = e.target.innerText;
        user_choices.forEach(ch => {
            ch.classList.remove("choosing");
        });
        e.target.classList.add("choosing");        
    })
})

document.querySelector(".play_button").addEventListener("click", playgame);



