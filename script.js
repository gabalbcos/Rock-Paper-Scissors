//Rock, Paper, Scissors Console Game
//score holder
let score = [];
let playerScore = 0;
let computerScore = 0;
//List of options
const options = ['rock', 'paper', 'scissors'];

//Functions to get the choices

function getComputerChoice(){
    let botChoice = options[Math.floor(Math.random()*3)];
    console.log(`Computer choose: ${botChoice}`);
    return botChoice;
}

document.getElementById('rock').onclick =  getPlayerChoice;
document.getElementById('paper').onclick = getPlayerChoice;
document.getElementById('scissors').onclick = getPlayerChoice;
document.getElementById('reset').onclick = resetGame();

//score varis
var playerPoints = document.getElementById('playerScore');
var computerPoints = document.getElementById('computerScore');

function resetGame(){
    playerPoints.textContent = '0';
    computerPoints.textContent = '0';
 
}

function getPlayerChoice(){
    playerPoints.textContent = playerScore;
    computerPoints.textContent = computerScore; 
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
             playerPoints.textContent = playerScore;
             computerPoints.textContent = computerScore;   
    }


//play game x Times
function game(gameTimes){
    //reset score
    score = [];
    
    //set score
        for (let i = 0; i < gameTimes; i++){
        let result = playRound();
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