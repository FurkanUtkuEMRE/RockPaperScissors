// Selectors.
let rockButton = document.querySelector('.rock');
let paperButton = document.querySelector('.paper');
let scissorsButton = document.querySelector('.scissors');
let restartButton = document.querySelector('.restart');

let computerScoreField = document.querySelector('.computer-score');
let playerScoreField = document.querySelector('.player-score');
let roundField = document.querySelector('.round');

let resultMessage = document.querySelector('.result');
let endGameMessage = document.querySelector('.end-game');

// Result messages. Lose, tie and win conditions are added depending on the choices.
let LOSE = 'N/A';
let TIE = 'N/A';
let WIN = 'N/A';
const ERROR = 'Something went terribly wrong...';

// Global score and played rounds variables.
let computerScore = 0;
let playerScore = 0;
let roundsPlayed = 0;

// Array of strings which the computer can pick from.
const computerOptions = ['Rock', 'Paper', 'Scissors'];

// Get the computer choice by using the array indices.
function getComputerChoice() {
  return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

// Event listener function to set the player choice. Also plays a round.
function getPlayerChoice(event) {
  let playerChoice;

  if (event.target.className === 'rock') {
    playerChoice = 'Rock';
  } else if (event.target.className === 'paper') {
    playerChoice = 'Paper';
  } else if (event.target.className === 'scissors') {
    playerChoice = 'Scissors';
  }
  playRound(playerChoice);
}

// Event listeners for the click events.
rockButton.addEventListener('click', getPlayerChoice);
paperButton.addEventListener('click', getPlayerChoice);
scissorsButton.addEventListener('click', getPlayerChoice);
restartButton.addEventListener('click', restartGame);

// Sets and updates the result messages for the game.
function setResultMessages(computerChoice, playerChoice) {
  LOSE = `${computerChoice} beats ${playerChoice}. Unfortunately, you lose.`;
  TIE = `You both have ${computerChoice}. It's a tie!`;
  WIN = `${playerChoice} beats ${computerChoice}. You win!`;
}

// Shows the result message on screen.
function showResultMessages(result) {
  resultMessage.textContent = `${result}`;
}

// Sets the score fields to keep the conditionals more tidy.
function setScoreFields() {
  computerScoreField.textContent = `Computer: ${computerScore}`;
  playerScoreField.textContent = `Player: ${playerScore}`;
  roundField.textContent = `Round: ${roundsPlayed} of 5`;
}

// Score modifying functions to keep the conditionals more tidy.
function increaseComputerScore() {
  computerScore++;
  roundsPlayed++;
}

function increasePlayerScore() {
  playerScore++;
  roundsPlayed++;
}

// Disables the buttons at the end of the game.
function disableButtons() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
}

// Enables the buttons for the restart of the game.
function enableButtons() {
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
}

// Shows the messages which are displayed when the game is over.
function showEndGameMessages() {
  if (roundsPlayed === 0) {
    endGameMessage.textContent = '';
  } else if (computerScore > playerScore) {
    endGameMessage.textContent = `End of game... You have lost ${computerScore} to ${playerScore}...`;
  } else if (computerScore < playerScore) {
    endGameMessage.textContent = `End of game... You have won ${computerScore} to ${playerScore}!`;
  } else {
    endGameMessage.textContent = `End of game... It is a tie with the scores ${computerScore} to ${playerScore}.`;
  }
}

// Round conditionals.
function playRound(playerChoice) {
  let computerChoice = getComputerChoice();

  setResultMessages(computerChoice, playerChoice);

  if (computerChoice === playerChoice) {
    roundsPlayed++;
    setScoreFields();
    showResultMessages(TIE);
  } else if (computerChoice === 'Rock' && playerChoice === 'Paper') {
    increasePlayerScore();
    setScoreFields();
    showResultMessages(WIN);
  } else if (computerChoice === 'Rock' && playerChoice === 'Scissors') {
    increaseComputerScore();
    setScoreFields();
    showResultMessages(LOSE);
  } else if (computerChoice === 'Paper' && playerChoice === 'Rock') {
    increaseComputerScore();
    setScoreFields();
    showResultMessages(LOSE);
  } else if (computerChoice === 'Paper' && playerChoice === 'Scissors') {
    increasePlayerScore();
    setScoreFields();
    showResultMessages(WIN);
  } else if (computerChoice === 'Scissors' && playerChoice === 'Rock') {
    increasePlayerScore();
    setScoreFields();
    showResultMessages(WIN);
  } else if (computerChoice === 'Scissors' && playerChoice === 'Paper') {
    increaseComputerScore();
    setScoreFields();
    showResultMessages(LOSE);
  } else {
    showResultMessages(ERROR);
  }

  if (roundsPlayed === 5) {
    disableButtons();
    showEndGameMessages();
  }
}

// Restart game.
function restartGame() {
  playerScore = 0;
  computerScore = 0;
  roundsPlayed = 0;

  setScoreFields();
  showResultMessages('');
  showEndGameMessages('');
  enableButtons();
}
