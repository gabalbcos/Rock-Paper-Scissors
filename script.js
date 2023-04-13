// Rock, Paper, Scissors Console Game

// score holder
let times = 0;
let playerScore = 0;
let computerScore = 0;

// Functions to get the choices
// List of options
const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  const botChoice = options[Math.floor(Math.random() * 3)];
  return botChoice;
}

// score board

const playerScoreNumber = document.querySelector('.score_p');
const aiScoreNumber = document.querySelector('.score_c');
const roundResult = document.querySelector('.round_alert_text');
const resultWindow = document.querySelector('.final_message');
const firstScreen = document.getElementById('first_screen');
const buttonScreen = document.querySelector('.buttons_menu');
const finalScreen = document.querySelector('.final_result');
const finalScreenD = document.querySelector('.final_resultd');
const finalScreenB = document.querySelector('.final_resultb');
const aiChoice = document.querySelector('.ai_choice');
const timesCount = document.querySelector('.times');

function renderScore() {
  playerScoreNumber.innerText = `${playerScore}`;
  aiScoreNumber.innerText = `${computerScore}`;
  timesCount.innerText = `${times}`;
}

function toggleHidden(element) {
  element.classList.toggle('hidden');
}

function checkWinner() {
  if (times === 5) {
    toggleHidden(finalScreen);
    toggleHidden(finalScreenD);
    toggleHidden(finalScreenB);
    toggleHidden(firstScreen);
    toggleHidden(buttonScreen);
    if (playerScore > computerScore) {
      resultWindow.innerText = 'You won!';
    } else if (playerScore < computerScore) {
      resultWindow.innerText = 'You lost!';
    } else {
      resultWindow.innerText = 'It\'s a draw';
    }
  }
}

function getPlayerChoice() {
  const playerChoice = this.id;
  const computerChoice = getComputerChoice();
  // Round Comparison
  if (times >= 5) {
    checkWinner();
  } else if ((playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')) {
    aiChoice.textContent = `Ai choose: ${computerChoice}`;
    playerScore++;
    roundResult.textContent = 'You won this round!';
    checkWinner()
  } else if ((playerChoice === 'rock' && computerChoice === 'paper') ||
      (playerChoice === 'scissors' && computerChoice === 'paper') ||
      (playerChoice === 'paper' && computerChoice === 'scissors')) {
    computerScore++;
    aiChoice.textContent = `Ai choose: ${computerChoice}`;
    roundResult.textContent = 'You lose this round!';
    checkWinner();
  } else {
    aiChoice.textContent = `Ai choose: ${computerChoice}`;
    roundResult.textContent = 'It\'s a draw!';
    checkWinner();
  }
  times++;
  renderScore(computerScore, playerScore);
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
  times = 0;
  roundResult.textContent = 'Waiting new game';
  renderScore(computerScore, playerScore);
  toggleHidden(finalScreen);
  toggleHidden(finalScreenD);
  toggleHidden(finalScreenB);
  toggleHidden(firstScreen);
  toggleHidden(buttonScreen);
}

// button activations
document.getElementById('rock').onclick = getPlayerChoice;
document.getElementById('paper').onclick = getPlayerChoice;
document.getElementById('scissors').onclick = getPlayerChoice;
document.getElementById('reset').onclick = resetScore;
