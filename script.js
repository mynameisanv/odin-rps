const body = document.querySelector('body');


const options = ['rock', 'paper', 'scissors'];
const btn = document.createElement('button');
btn.textContent = 'Play game!';

body.appendChild(btn);

let userChoice;

btn.addEventListener('click', game);

//Returns a random choice for the computer to play
function computerPlay(){
    return options[Math.floor(Math.random()*options.length)];
}

function playRound(playerSelection, computerSelection){
    console.log(playerSelection);
    console.log(computerSelection);

    switch (playerSelection){
        case 'rock':
            if (computerSelection === 'paper'){
                return 'You lose!';
            }
            else if (computerSelection === 'rock'){
                return 'You tied!';
            }
            else {
                return 'You win!';
            }
            break;
        case 'paper':
            if (computerSelection === 'scissors'){
                return 'You lose!';
            }
            else if (computerSelection === 'paper'){
                return 'You tied!';
            }
            else {
                return 'You win!';
            }
            break;
        case 'scissors':
            if (computerSelection === 'rock'){
                return 'You lose!';
            }
            else if (computerSelection === 'scissors'){
                return 'You tied!';
            }
            else {
                return 'You win!';
            }
            break;
    }
}

function game(){

    let compWinCount = 0;
    let userWinCount = 0;
    for (let i = 0; i < 5; i++){
        userChoice = prompt('Rock, paper, or scissors?').toLowerCase();
        let gameResult = playRound(userChoice, computerPlay());

        if (gameResult === 'You win!') {
            userWinCount++;
        }
        else{
            compWinCount++;
        }
    }

    
}