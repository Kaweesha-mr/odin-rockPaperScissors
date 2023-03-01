function playRound(playerSelection, computerSelection) {

    if(playerSelection == "rock" && computerSelection == "rock"){

    }
    else if(playerSelection == "paper" && computerSelection == "paper"){
        
    }
    else if(playerSelection == "scissors" && computerSelection == "scissors"){
        
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        
    }
    else if(playerSelection == "scissors" && computerSelection == "scissors"){
        
    }
  }

function getComputerChoice(){

    const array = ["rock","paper","scisors"];
    
    const randomIndex = Math.floor(Math.random()*array.length);

    return array[randomIndex].toLowerCase;
}
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));