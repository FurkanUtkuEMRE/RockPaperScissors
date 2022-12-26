// Array of strings which the computer can pick from.
const computerOptions = ['Rock', 'Paper', 'Scissors'];

// Get the computer choice by using the array indices.
function getComputerChoice() {
  return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

// Format the player choice.
function formatPlayerChoice(playerChoice) {
  return playerChoice[0].toUpperCase() + playerChoice.slice(1).toLowerCase();
}

// Set the computer choice to a variable.
let computerChoice = getComputerChoice();

let playerChoice = formatPlayerChoice('rOcK');

// Results for the game.
const LOSE = `${computerChoice} beats ${playerChoice}. Unfortunately, you lose.`;
const TIE = `You both have ${computerChoice}. It's a tie!`;
const WIN = `${playerChoice} beats ${computerChoice}. You win!`;
const ERROR = `Something went terribly wrong...`;

// Round conditionals.
function playRound() {
  if (computerChoice === playerChoice) {
    return TIE;
  } else if (computerChoice === 'Rock' && playerChoice === 'Paper') {
    return WIN;
  } else if (computerChoice === 'Rock' && playerChoice === 'Scissors') {
    return LOSE;
  } else if (computerChoice === 'Paper' && playerChoice === 'Rock') {
    return LOSE;
  } else if (computerChoice === 'Paper' && playerChoice === 'Scissors') {
    return WIN;
  } else if (computerChoice === 'Scissors' && playerChoice === 'Rock') {
    return WIN;
  } else if (computerChoice === 'Scissors' && playerChoice === 'Paper') {
    return LOSE;
  } else {
    return ERROR;
  }
}

console.log(playRound());
