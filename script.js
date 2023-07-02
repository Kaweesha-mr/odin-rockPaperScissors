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
        document.querySelectorAll("div.choice").forEach((choice) => {
            choice.addEventListener("click", () => {

                //get the value of div tag which has choice class
                const playerSelection = choice.getAttribute("value");
                const computerSelection = getComputerChoice();
                const result = playRound(playerSelection.toLowerCase(), computerSelection);

                
                document.getElementsByClassName("result")[0].innerHTML = result;

                
                if(result.includes("won")){
                    document.getElementById("user-score").innerHTML = parseInt(document.getElementById("user-score").innerHTML) + 1;
                }
                
                else{
                    document.getElementById("computer-score").innerHTML = parseInt(document.getElementById("computer-score").innerHTML) + 1;
                }
                
                
                if(parseInt(document.getElementById("user-score").innerHTML) == 5){

                    document.getElementsByClassName("result")[0].innerHTML = "You won the game";
                    document.getElementById("user-score").innerHTML = 0;
                    document.getElementById("computer-score").innerHTML = 0;
                }

                else if(parseInt(document.getElementById("computer-score").innerHTML) == 5){
                    document.getElementsByClassName("result")[0].innerHTML = "You lost the game";
                    document.getElementById("user-score").innerHTML = 0;
                    document.getElementById("computer-score").innerHTML = 0;
                }
            
         });

})};

game();