/**************************** 
   Rock paper scissor JS game.
   Play against the computer.
   May the best player win!
*****************************/
const playerSelection = prompt("Pick your play: Rock, Paper or Scissors?");
const computerSelection = computerPlay();
console.log(`Player selection = ${playerSelection}`);
console.log(`Computer selection = ${computerSelection}`);
alert(playRound(playerSelection, computerSelection));

function game() {
  let playerScore;
  let computerScore;
}

function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();
  let playerLoses = `You Lose! ${computerSelection} beats ${playerSelection}!`;
  let draw = "Draw, play again!";
  let playerWins = `You win, ${playerSelection} beats ${computerSelection}`;
  let invalidInput = "Please enter Rock, Paper or Scissors!"; 

  if (
    (playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Rock")
  ) {
    return playerLoses;
  } else if (playerSelection == computerSelection) {
    return draw;
  } else if (playerSelection !== "Rock" || "Paper" || "Scissors") {
    return invalidInput; 
  } else {
    return playerWins;
  }
}

function computerPlay() {
  var myArray = ["Rock", "Paper", "Scissors"];

  var randomItem = myArray[Math.floor(Math.random() * myArray.length)];

  return randomItem;
}
