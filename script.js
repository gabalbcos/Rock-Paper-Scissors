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

//score board
let scoreWindow = document.querySelector('.scores');
scoreWindow.innerHTML = playerScore + ' : ' + computerScore;
let resultWindow = document.querySelector('.results');


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
        scoreWindow.innerHTML = playerScore + ' : ' + computerScore;
        times++;
        console.log(times);
        checkWinner();
        return (computerScore, playerScore);
}


 function renderScore(computerScore, playerScore) {
        scoreWindow.innerText = `${computerScore} : ${playerScore}`;
}

function checkWinner(){
    if(times === 5){
       if(playerScore > computerScore){
        resultWindow.innerText = `You won!`
       } else if (playerScore < computerScore){
        resultWindow.innerText = `You lost!`;
    } else (playerScore === computerScore)
        resultWindow.innerText = `It's a draw`;
    resetScore()
    }
}

function resetScore(){
    playerScore = 0;
    computerScore = 0;
    times = 0;

}

//play game x Times
function game(gameTimes){
    //reset score
    score = [];
    
    //set score
        for (let i = 0; i < gameTimes; i++){
        let result = getPlayerChoice();
        console.log(result);
        if (result === "You won this round!"){
            score.push(1);}
        else if (result === "You lose this round!") {
            score.push(-1);    
        } else { score.push(0);}
        console.log("Your score:" + score.reduce(function(a, b){return a + b}) + `/${gameTimes}`);
       }
    //end game result
        let totalScore = score.reduce(function(a, b){return a + b});
        if (totalScore > 0) {
            console.log("You won the game!");
        } else if (totalScore === 0){
            console.log("No winners in the game!");
        } else {console.log("You lost the game!");}
}