// Result messages. Lose, tie and win conditions are added depending on the choices.
let LOSE = 'N/A';
let TIE = 'N/A';
let WIN = 'N/A';
const UNSUPPORTED = 'You have given an unsupported input...';
const ERROR = 'Something went terribly wrong...';

// Array of strings which the computer can pick from.
const computerOptions = ['Rock', 'Paper', 'Scissors'];

// Global score variables.
let computerScore = 0;
let playerScore = 0;

// Set the number of rounds.
let numberOfRounds = prompt('How many rounds do you wish to play?');

// Check if the input given is correct.
if (isNaN(parseInt(numberOfRounds, 10))) {
  console.log(UNSUPPORTED);
}

// Get the computer choice by using the array indices.
function getComputerChoice() {
  return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

// Format the player choice.
function formatPlayerChoice(playerChoice) {
  return playerChoice[0].toUpperCase() + playerChoice.slice(1).toLowerCase();
}

// Results for the game.
function setResultMessages(computerChoice, playerChoice) {
  LOSE = `${computerChoice} beats ${playerChoice}. Unfortunately, you lose.`;
  TIE = `You both have ${computerChoice}. It's a tie!`;
  WIN = `${playerChoice} beats ${computerChoice}. You win!`;
}

// Round conditionals.
function playRound(computerChoice, playerChoice) {
  if (computerChoice === playerChoice) {
    return TIE;
  } else if (computerChoice === 'Rock' && playerChoice === 'Paper') {
    playerScore++;
    return WIN;
  } else if (computerChoice === 'Rock' && playerChoice === 'Scissors') {
    computerScore++;
    return LOSE;
  } else if (computerChoice === 'Paper' && playerChoice === 'Rock') {
    computerScore++;
    return LOSE;
  } else if (computerChoice === 'Paper' && playerChoice === 'Scissors') {
    playerScore++;
    return WIN;
  } else if (computerChoice === 'Scissors' && playerChoice === 'Rock') {
    playerScore++;
    return WIN;
  } else if (computerChoice === 'Scissors' && playerChoice === 'Paper') {
    computerScore++;
    return LOSE;
  } else if (playerChoice !== 'Rock' && playerChoice !== 'Paper' && playerChoice !== 'Scissors') {
    return UNSUPPORTED;
  } else {
    return ERROR;
  }
}

function game() {
  // Declare variables for the game.
  let computerChoice;
  let playerInput;
  let playerChoice;
  let roundResult;

  for (let i = 0; i < numberOfRounds; i++) {
    // Set the computer choice to a variable.
    computerChoice = getComputerChoice();

    // Get the player choice and format it.
    playerInput = prompt('Make your choice: Rock, Paper or Scissors');
    playerChoice = formatPlayerChoice(playerInput);

    // Set the result messages depending on the choices.
    setResultMessages(computerChoice, playerChoice);

    // Set the round result to a variable.
    roundResult = playRound(computerChoice, playerChoice);

    console.log(`Computer has chosen ${computerChoice}`);
    console.log(`You have chosen ${playerChoice}`);
    // Log the result to the player.
    console.log(roundResult);
  }

  if (computerScore === playerScore) {
    console.log(`Today, nobody wins... Score is ${computerScore} to ${playerScore}.`);
  } else if (computerScore > playerScore) {
    console.log(`You have lost ${computerScore} to ${playerScore}. This is a grim day...`);
  } else if (playerScore > computerScore) {
    console.log(`You have won ${computerScore} to ${playerScore}. Well done!`);
  }
}

game();
