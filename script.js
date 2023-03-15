//Rock, Paper, Scissors Console Game
//score holder
let times = 0;
let playerScore = 0;
let computerScore = 0;


//Functions to get the choices
//List of options
const options = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    let botChoice = options[Math.floor(Math.random()*3)];
    console.log(`Computer choose: ${botChoice}`);
    return botChoice;
}

//button activations
document.getElementById('rock').onclick =  getPlayerChoice;
document.getElementById('paper').onclick = getPlayerChoice;
document.getElementById('scissors').onclick = getPlayerChoice;
document.getElementById('reset').onclick = resetScore;

//score board
let playerScoreWindow = document.querySelector('.user_score');
let aiScoreWindow = document.querySelector('.ai_score');
let playerScoreNumber = document.querySelector('.score_p');
let aiScoreNumber = document.querySelector('.score_c');
let roundResult = document.querySelector('.round_alert');
let resultWindow = document.querySelector('.final_message');
let firstScreen = document.getElementById('first_screen');
let secondScreen = document.getElementById('final_message');



function getPlayerChoice(){
        var playerChoice = this.id;
        let computerChoice = getComputerChoice();
        //Round Comparison
        if (playerChoice === computerChoice){
            roundResult.textContent = "It's a draw!";}
            else if ((playerChoice === 'paper' && computerChoice === 'rock')||
            (playerChoice === 'rock' && computerChoice === 'scissors')||
            (playerChoice === 'scissors' && computerChoice === 'paper')) {
                playerScore++;
                roundResult.textContent = "You won this round!";}
            else {
                computerScore++;
                roundResult.textContent = "You lose this round!"}
        times++;
        
                checkWinner();
                renderScore(computerScore, playerScore);
 }


function renderScore(computerScore, playerScore) {
        playerScoreNumber.innerText = `${playerScore}`;
        aiScoreNumber.innerText= `${computerScore}`;
}

function checkWinner(){
    if(times === 5){
       if(playerScore > computerScore){
        resultWindow.innerText = `You won!`
       /* return showResult();*/
       } else if (playerScore < computerScore){
        resultWindow.innerText = `You lost!`;
        return showResult();
    } else resultWindow.innerText = `It's a draw`;
        /*return showResult();*/
 }
}

function resetScore(){
    playerScore = 0;
    computerScore = 0;
    times = 0;
    renderScore(computerScore, playerScore)
}

function showResult(){
    secondScreen.classList.remove('hidden');
    firstScreen.classList.add('hidden');
}

