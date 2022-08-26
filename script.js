/**************************** 
   Rock paper scissor JS game.
   Play against the computer.
   May the best player win!
   Sounds from Zapsplat.com
*****************************/

let playerScore = 0;
let computerScore = 0; 
const winnerAudio = new Audio('sounds/crowdCheering.mp3');
const loserAudio = new Audio('sounds/youLose.mp3');
const resultsDiv = document.querySelector('.results'); 
const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score'); 

//rock paper scissors core game function
function playRound(playerSelection, computerSelection) {
  let playerLoses = `You Lose! ${computerSelection} beats ${playerSelection}!`;
  let draw = "Draw, play again!";
  let playerWins = `You Win! ${playerSelection} beats ${computerSelection}`;

  if (
    (playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Rock")
  ) {
    computerScore++;
    const p = document.createElement('p');
    p.innerText = playerLoses;
    resultsDiv.appendChild(p); 
  } else if (playerSelection == computerSelection) {
    const p = document.createElement('p');
    p.innerText = draw;
    resultsDiv.appendChild(p); 
  } else {
    playerScore++; 
    const p = document.createElement('p');
    p.innerText = playerWins;
    resultsDiv.appendChild(p); 
  }
}

//computer play function
function computerPlay() {
  var myArray = ["Rock", "Paper", "Scissors"];
  var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
  return randomItem;
}

function checkForWinner(playerScore, computerScore) {
  if (playerScore === 5) { 
    const h2 = document.createElement('h2');
    h2.classList.add('player-won');
    h2.innerText = `You won ${playerScore} to ${computerScore}. You beat the machine!`
    resultsDiv.appendChild(h2); 
    const winnerGif = document.createElement("img"); 
    winnerGif.src = "images/winnerGif.gif";
    resultsDiv.appendChild(winnerGif);
    winnerAudio.play();
  } else if (computerScore === 5) { 
    const h2 = document.createElement('h2');
    h2.classList.add('computer-won');
    h2.innerText = `You lost ${playerScore} to ${computerScore}. The machine beat you!`
    resultsDiv.appendChild(h2); 
    const loserGif = document.createElement("img"); 
    loserGif.src = "images/loserGif.gif"; 
    resultsDiv.appendChild(loserGif);
    loserAudio.play(); 
  }
}

function updateScores(playerScore, computerScore) {
  playerScoreSpan.innerText = `Player Score: ${playerScore}`;
  computerScoreSpan.innerText = ` Computer Score: ${computerScore}`;
}

const paperButton = document.querySelector('#paper');
paper.addEventListener('click', () => {
  const playerSelection = 'Paper'; 
  const computerSelection = computerPlay(); 
  playRound(playerSelection, computerSelection); 
  updateScores(playerScore, computerScore);
  checkForWinner(playerScore,computerScore); 
}); 

const scissorsButton = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
  const playerSelection = 'Scissors'; 
  const computerSelection = computerPlay(); 
  playRound(playerSelection, computerSelection); 
  updateScores(playerScore, computerScore);
  checkForWinner(playerScore,computerScore);
}); 

const rockButton = document.querySelector('#rock');
rock.addEventListener('click', () => {
  const playerSelection = 'Rock'; 
  const computerSelection = computerPlay(); 
  playRound(playerSelection, computerSelection);
  updateScores(playerScore, computerScore);
  checkForWinner(playerScore,computerScore);
}); 
