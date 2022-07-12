/**************************** 
   Rock paper scissor JS game.
   Play against the computer.
   May the best player win!
*****************************/


function playRound (playerSelection, computerSelection) {

}

const playerSelection = prompt("Pick your play: Rock, Paper or Scissors?"); 
console.log(`Player selection = ${playerSelection}`);
const computerSelection = computerPlay(); 


function computerPlay(){
    var myArray = [
        "Rock",
        "Paper",
        "Scissors"
      ];
      
      var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

      return randomItem; 
}


