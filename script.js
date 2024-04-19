function getComputerChoice() {
    let length = CHOICES.length;
    let choiceIndex = Math.floor((Math.random() * length));
    let choice = CHOICES[choiceIndex];
    console.log(`Computer selects ${choice}`);
    let lowerChoice = choice.toLowerCase();
    return lowerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("It's a tie! You both chose " + playerSelection);
        return 0;
    } 
    else if ((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'rock')) {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
        return -1;
    }
    else {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}!`);
        return 1;
    }
  }

function playGame() {
  let score = 0;
    for (let i = 0; i < 5; i++) {
      let playerSelection = promptPlayer();
      console.log(`User selects ${playerSelection}`);
      let computerSelection = getComputerChoice();
      score += playRound(playerSelection, computerSelection);
    }
  if (score > 0) {
    console.log(`You Win!`);
  }
  else if (score == 0) {
    console.log('You Tied!');
  }
  else {
    console.log('You Lose!');
  }
}
  
function promptPlayer() {
  do {
      let userText = prompt("Rock, Paper, or Scissors?").toLowerCase();
      return userText;
  }
  while (CHOICES.indexOf(userText)==-1);
}
  const CHOICES = ['rock', 'paper', 'scissors'];  
  playGame();