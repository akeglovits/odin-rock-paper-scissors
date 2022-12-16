function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  const playerChoice =
    playerSelection.substring(0, 1).toUpperCase() +
    playerSelection.substring(1).toLowerCase();

  if (playerChoice == computerSelection) {
    return `It's a Tie! You both chose ${playerChoice}`;
  } else if (
    (playerChoice == "Rock" && computerSelection == "Scissors") ||
    (playerChoice == "Paper" && computerSelection == "Rock") ||
    (playerChoice == "Scissors" && computerSelection == "Paper")
  ) {
    return `You Win! ${playerChoice} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerChoice}`;
  }
}

const playerSelection = "rock";

const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
