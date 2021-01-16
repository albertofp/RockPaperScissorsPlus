const choiceArray = ["Rock", "Paper", "Scissors"];
var roundWinner = '';


function computerPlay() {
  return choiceArray[~~(Math.random() * choiceArray.length)];
}

var playerSelection;


function getInput() {
  console.log('What do you choose? Rock, paper, or scissors?');
  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      playerSelection = button.id;
      console.log(playerSelection);
    });
  });          return playerSelection;
  }

function playRound(computerSelection) {

  computerSelection = computerPlay().toLowerCase();
  playerSelection = getInput();
  /*draw case*/
  if (playerSelection == computerSelection) {
    console.log('It\'s a draw!');
    roundWinner = '';
  }
  /*player wins*/
  if (playerSelection == 'rock' && computerSelection == 'scissors') {
    roundWinner = 'player';
    console.log('You Win! Rock beats Scissors');
  }

  if (playerSelection == 'scissors' && computerSelection == 'paper') {
    roundWinner = 'player';
    console.log('You Win! Scissors beat Paper');
  }

  if (playerSelection == 'paper' && computerSelection == 'rock') {
    roundWinner = 'player';
    console.log('You Win! Paper beats Rock');
  }
  /*player loses*/
  if (computerSelection == 'rock' && playerSelection == 'scissors') {
    roundWinner = 'computer';
    console.log('You Lose! Rock beats Scissors');
  }

  if (computerSelection == 'scissors' && playerSelection == 'paper') {
    roundWinner = 'computer';
    console.log('You Lose! Scissors beat Paper');
  }

  if (computerSelection == 'paper' && playerSelection == 'rock') {
    roundWinner = 'computer';
    console.log('You Lose! Paper beats Rock');
  }
}

function game() {
  /**Initializing counter for round wins**/
  var scorePlayer = 0;
  var scoreComputer = 0;
  var roundNumber = 1;
    console.log('Round ' + roundNumber + ':');
    playRound();
    if (roundWinner == 'player') {
      scorePlayer = scorePlayer + 1;
    }
    if (roundWinner == 'computer') {
      scoreComputer = scoreComputer + 1;
    }

    roundNumber++;
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
