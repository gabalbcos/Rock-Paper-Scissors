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
let scoreWindow = document.querySelector('.scores');;
scoreWindow.innerHTML = playerScore + ' : ' + computerScore;
let resultWindow = document.querySelector('.results');
let firstScreen = document.getElementById('first_screen');
let secondScreen = document.getElementById('final_message');



function getPlayerChoice(){
        var playerChoice = this.id;
        let computerChoice = getComputerChoice();
        //Round Comparison
        if (playerChoice === computerChoice){
            alert("It's a draw!");}
            else if ((playerChoice === 'paper' && computerChoice === 'rock')||
            (playerChoice === 'rock' && computerChoice === 'scissors')||
            (playerChoice === 'scissors' && computerChoice === 'paper')) {
                playerScore++;
                alert("You won this round!");}
            else {
                computerScore++;
                alert("You lose this round!");}
        times++;
        scoreWindow.innerHTML = playerScore + ' : ' + computerScore;
                checkWinner();
 }


function renderScore(computerScore, playerScore) {
        scoreWindow.innerText = `${playerScore}  : ${computerScore}`;
}

function checkWinner(){
    if(times === 5){
       if(playerScore > computerScore){
        resultWindow.innerText = `You won!`
        return showResult();
       } else if (playerScore < computerScore){
        resultWindow.innerText = `You lost!`;
        return showResult();
    } else resultWindow.innerText = `It's a draw`;
        return showResult();
 }
}

function resetScore(){
    playerScore = 0;
    computerScore = 0;
    times = 0;
    secondScreen.classList.add('hidden')
    firstScreen.classList.remove('hidden')
    scoreWindow.innerHTML = playerScore + ' : ' + computerScore;
}

function showResult(){
    secondScreen.classList.remove('hidden');
    firstScreen.classList.add('hidden');
}

