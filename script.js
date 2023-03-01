function playRound(playerSelection, computerSelection) {

    if(playerSelection == "scissors" && computerSelection == "paper"){
        return "You won!, Scissors cuts the paper";
        
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        return "you lose!, rock breaks the scissors";
        
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        return "you lose!, Scissors cuts the paper";
        
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        return "you won!, paper covers the rock";

        
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        return "you won!, rock breaks the scissors";
        
    }
    else if(playerSelection == "rock" && computerSelection == "paper"){
        return "you lose!, paper covers the rock";
        
    }
    else{
        return "tie,tie"
    }
  }



function getComputerChoice(){

    const array = ["rock","paper","scisors"];
    
    const randomIndex = Math.floor(Math.random()*array.length);
    console.log(randomIndex);
    return array[randomIndex];  
}

function game(){

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice:");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection.toLowerCase(), computerSelection));
     }

}

game();