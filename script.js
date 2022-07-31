/**************************** 
   Rock paper scissor JS game.
   Play against the computer.
   May the best player win!
*****************************/

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  alert("You Clicked Paper"); 
}); 

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
  alert("You Clicked Scissors"); 
}); 

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
  alert("You Clicked Rock"); 
}); 

//rock paper scissors core game function
function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase().trim();
  let playerLoses = `You Lose! ${computerSelection} beats ${playerSelection}!`;
  let draw = "Draw, play again!";
  let playerWins = `You Win! ${playerSelection} beats ${computerSelection}`;
  let invalidInput = "Please enter Rock, Paper or Scissors!";

  if (
    (playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Rock")
  ) {
    return playerLoses;
  } else if (playerSelection == computerSelection) {
    return draw;
  } else if (
    playerSelection != "Rock" &&
    playerSelection != "Paper" &&
    playerSelection != "Scissors"
  ) {
    return invalidInput;
  } else {
    return playerWins;
  }
}

//computer play function
function computerPlay() {
  var myArray = ["Rock", "Paper", "Scissors"];

  var randomItem = myArray[Math.floor(Math.random() * myArray.length)];

  return randomItem;
}

/*********** 
  Removed functionality that played best of 5 rounds with computer via console.log. 
  Now that we are introducing a UI this is no longer needed.
  Will look to permanantly remove this once UI is up and working! 
  **********

game();

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let draws = 0;

  for (i = 1; i <= 5; i++) {
    const playerSelection = prompt("Pick your play: Rock, Paper or Scissors?");
    const computerSelection = computerPlay();

    console.log(`*****ROUND ${i}*****`);
    console.log(`Player selection = ${playerSelection}`);
    console.log(`Computer selection = ${computerSelection}`);

    let roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);

    if (roundResult.includes("You Win!")) {
      playerScore++;
    } else if (roundResult.includes("You Lose!")) {
      computerScore++;
    } else {
      draws++;
    }
    console.log(`Player Score = ${playerScore}`);
    console.log(`Computer Score = ${computerScore}`);
    console.log(`Draws = ${draws}`);
  }

  if (playerScore > computerScore) {
    console.log(`You win best of 5 rounds!\
    You won ${playerScore} rounds!`);
  } else if (computerScore > playerScore) {
    console.log(`You lost best of 5 rounds!\
    Computer won ${computerScore} rounds!`);
  } else {
    console.log("Best of 5 was a draw!");
  }
} 
*/ 
