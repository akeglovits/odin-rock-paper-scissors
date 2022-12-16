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
    console.log(`It's a Tie! You both chose ${playerChoice}`);
    return 0;
  } else if (
    (playerChoice == "Rock" && computerSelection == "Scissors") ||
    (playerChoice == "Paper" && computerSelection == "Rock") ||
    (playerChoice == "Scissors" && computerSelection == "Paper")
  ) {
    console.log(`You Win! ${playerChoice} beats ${computerSelection}`);
    return 1;
  } else {
    console.log(`You Lose! ${computerSelection} beats ${playerChoice}`);
    return -1;
  }
}

function game() {
  let winComparison = 0;
  for (let i = 0; i < 5; i++) {
    winComparison += playRound(
      prompt("Enter your move (Rock, Paper, or Scissors)!"),
      getComputerChoice()
    );
  }

  if (winComparison > 0) {
    console.log("You won the game!");
  } else if (winComparison < 0) {
    console.log("The computer won the game!");
  } else {
    console.log("The game ended in a tie!");
  }
}
game();
