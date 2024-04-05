function playRound(playerSelection, computerSelection) {
    // your code here!
  }
  
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  
function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let length = choices.length;
    let choiceIndex = Math.floor*(Math.random() * length);
    let choice = choices[choiceIndex];
    console.log(choice);
}