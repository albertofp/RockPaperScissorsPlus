const choiceArray = ["Rock", "Paper", "Scissors"];
var roundWinner = '';
var roundNumber = 1;

function computerPlay() {
  return choiceArray[~~(Math.random() * choiceArray.length)];
}

var playerSelection;
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.id;
    console.log(playerSelection);
  });
});

function playRound(computerSelection) {

  computerSelection = computerPlay().toLowerCase();
  /*draw case*/
  if (playerSelection == computerSelection) {
    console.log('It\'s a draw!');
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
    console.log('You Win! Rock beats Scissors');
  }

  if (playerSelection == 3 && computerSelection == 'paper') {
    roundWinner = 'player';
    console.log('You Win! Scissors beat Paper');
  }

  if (playerSelection == 2 && computerSelection == 'rock') {
    roundWinner = 'player';
    console.log('You Win! Paper beats Rock');
  }
  /*player loses*/
  if (computerSelection == 'rock' && playerSelection == 3) {
    roundWinner = 'computer';
    console.log('You Lose! Rock beats Scissors');
  }

  if (computerSelection == 'scissors' && playerSelection == 2) {
    roundWinner = 'computer';
    console.log('You Lose! Scissors beat Paper');
  }

  if (computerSelection == 'paper' && playerSelection == 1) {
    roundWinner = 'computer';
    console.log('You Lose! Paper beats Rock');
  }
  roundNumber++;
}

function game() {
  /**Initializing counter for round wins**/
  var scorePlayer = 0;
  var scoreComputer = 0;

  console.log('Round ' + roundNumber + ':');
  playRound();
  if (roundWinner == 'player') {
    scorePlayer = scorePlayer + 1;
  }
  if (roundWinner == 'computer') {
    scoreComputer = scoreComputer + 1;
  }

  console.log('Current score>> Player : ' + scorePlayer.toString() + ' | Computer: ' + scoreComputer.toString());

  if (scorePlayer == scoreComputer) {
    console.log('The game is drawn!');
  } else if (scorePlayer > scoreComputer) {
    console.log('Congratulations, you win the game!');
  } else {
    console.log('Unlucky, you lost the game!');
  }
}


game();
