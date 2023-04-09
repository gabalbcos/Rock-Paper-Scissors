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

//button selector
const btn_rock = document.getElementById('rock');
const btn_paper = document.getElementById('paper');
const btn_scissors = document.getElementById('scissors');
const btn_reset = document.getElementById('reset')

//score board
let playerScoreWindow = document.querySelector('.user_score');
let aiScoreWindow = document.querySelector('.ai_score');
let playerScoreNumber = document.querySelector('.score_p');
let aiScoreNumber = document.querySelector('.score_c');
let roundResult = document.querySelector('.round_alert_text');
let resultWindow = document.querySelector('.final_message');
let firstScreen = document.getElementById('first_screen');
let buttonScreen = document.querySelector('.buttons_menu');
let finalScreen = document.querySelector('.final_result');
let finalScreenD = document.querySelector('.final_resultd');
let finalScreenB = document.querySelector('.final_resultb');
let aiChoice = document.querySelector('.ai_choice');
let timesCount = document.querySelector('.times');


function getPlayerChoice(){
        var playerChoice = this.id;
        let computerChoice = getComputerChoice();
        //Round Comparison
            if (times >= 5){
                checkWinner();
                return
            } else if ((playerChoice === 'paper' && computerChoice === 'rock')||
            (playerChoice === 'rock' && computerChoice === 'scissors')||
            (playerChoice === 'scissors' && computerChoice === 'paper')) {
                aiChoice.textContent = `Ai choose: ${computerChoice}`;
                playerScore++;
                roundResult.textContent = "You won this round!";
                checkWinner()}
            else if ((playerChoice === 'rock' && computerChoice === 'paper')||
            (playerChoice === 'scissors' && computerChoice === 'paper')||
            (playerChoice === 'paper' && computerChoice === 'scissors')){
                computerScore++;
                aiChoice.textContent = `Ai choose: ${computerChoice}`;
                roundResult.textContent = "You lose this round!";
                checkWinner();
            }else {
                aiChoice.textContent = `Ai choose: ${computerChoice}`;
                roundResult.textContent = "It's a draw!";
                checkWinner();
            }
                times++;
                renderScore(computerScore, playerScore);
        }




function renderScore() {
        playerScoreNumber.innerText = `${playerScore}`;
        aiScoreNumber.innerText= `${computerScore}`;
        timesCount.innerText = `${times}`

}

function toggleHidden(element) {
    element.classList.toggle('hidden');
}

function checkWinner(){
    if(parseInt(times) === 5){
        toggleHidden(finalScreen);
        toggleHidden(finalScreenD);
        toggleHidden(finalScreenB);
        toggleHidden(firstScreen);
        toggleHidden(buttonScreen);
        ;
       if(playerScore > computerScore){
        return resultWindow.innerText = `You won!`
       
       } else if (playerScore < computerScore){
        return resultWindow.innerText = `You lost!`;
 
    } else 
        return resultWindow.innerText = `It's a draw`;
        
 }
        return resultWindow.innerText = "";
}



function resetScore(){
    playerScore = 0;
    computerScore = 0;
    times = 0;
    roundResult.textContent = "Waiting new game"
    renderScore(computerScore, playerScore)
    toggleHidden(finalScreen);
    toggleHidden(finalScreenD);
    toggleHidden(finalScreenB);
    toggleHidden(firstScreen);
    toggleHidden(buttonScreen);

}


