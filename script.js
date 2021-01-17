const choiceArray = ["Rock", "Paper", "Scissors"];
var roundWinner = '';
var roundNumber = 1;

var scorePlayer = 0;
var scoreComputer = 0;

let gameWinner = document.querySelector('#game-winner');
let roundMessage = document.querySelector('#round-message');

function computerPlay() {
  return choiceArray[~~(Math.random() * choiceArray.length)];
}

var playerSelection;
const buttons = document.querySelectorAll('button');

/*Add a do-while loop around game so it only goes until someone has 5 wins*/


buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.id;
    game();
    console.log(playerSelection);
  });
});


function playRound() {

  var computerSelection = computerPlay().toLowerCase();
  /*draw case*/
  console.log(computerSelection);
  if (playerSelection == computerSelection) {
    roundMessage.textContent = 'It\'s a draw!';
    roundWinner = '';
  }

  /*
  <button id="1">Rock</button>
  <button id="2">Paper</button>
  <button id="3">Scissors</button>
  */


  /*player wins*/
  if (playerSelection == 1 && computerSelection == 'scissors') {
    roundWinner = 'player';
    roundMessage.textContent ='You Win! Rock beats Scissors';
  }

  if (playerSelection == 3 && computerSelection == 'paper') {
    roundWinner = 'player';
    roundMessage.textContent = 'You Win! Scissors beat Paper';
  }

  if (playerSelection == 2 && computerSelection == 'rock') {
    roundWinner = 'player';
    roundMessage.textContent = 'You Win! Paper beats Rock';
  }
  /*player loses*/
  if (computerSelection == 'rock' && playerSelection == 3) {
    roundWinner = 'computer';
    roundMessage.textContent = 'You Lose! Rock beats Scissors';
  }

  if (computerSelection == 'scissors' && playerSelection == 2) {
    roundWinner = 'computer';
    roundMessage.textContent = 'You Lose! Scissors beat Paper';
  }

  if (computerSelection == 'paper' && playerSelection == 1) {
    roundWinner = 'computer';
    roundMessage.textContent = 'You Lose! Paper beats Rock';
  }
  roundNumber++;
}


function game() {
  /**Initializing counter for round wins**/


  console.log('Round ' + roundNumber + ':');
  if (scorePlayer < 5 && scoreComputer < 5) {
    playRound();
    if (roundWinner == 'player') {
      scorePlayer = scorePlayer + 1;
    }
    if (roundWinner == 'computer') {
      scoreComputer = scoreComputer + 1;
    }

    console.log('Current score>> Player : ' + scorePlayer.toString() + ' | Computer: ' + scoreComputer.toString());
  } else
  if (scorePlayer == scoreComputer) {
    roundMessage.textContent = '';
    gameWinner.textContent = 'The game is drawn!';
  } else if (scorePlayer > scoreComputer) {
    roundMessage.textContent = '';
    gameWinner.textContent = 'Congratulations, you win the game!';
  } else {
    roundMessage.textContent = '';
    gameWinner.textContent = 'Unlucky, you lost the game!';
  }
  let playerTotalScore = document.querySelector("#player-score");
  playerTotalScore.textContent = scorePlayer;
  let computerTotalScore = document.querySelector("#computer-score");
  computerTotalScore.textContent = scoreComputer;

}
