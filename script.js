function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let length = choices.length;
    let choiceIndex = Math.floor((Math.random() * length));
    let choice = choices[choiceIndex];
    console.log(`Computer selects ${choice}`);
    return choice.toLowerCase;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        let message = "It's a tie! You both chose " + playerSelection;
        return message;
    } 
    else if ((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == scissors') || (playerSelection == 'scissors' && computerSelection == 'rock')) {
        let message = `You Lose! ${computerSelection} beats ${playerSelection}!`
        return message;
    }
    else {
        let message = `You Win! ${playerSelection} beats ${computerSelection}!`
        return message;
    }
  }

  function playGame() {
      for (let i = 0; i < 4; i++) {
        playRound(playerSelection, computerSelection)

      }
  }
  
  function promptPlayer() {
    let playerSelection = 'Default'
    while (!(playerSelection in ['rock', 'paper', 'scissors'])) {
        playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    }
    return playerSelection;
  }


  const playerSelection = promptPlayer();
  console.log(`User selects ${playerSelection}`)
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));