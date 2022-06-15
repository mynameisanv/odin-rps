const body = document.querySelector('body');


const options = ['rock', 'paper', 'scissors'];
const btn = document.createElement('button');
btn.textContent = 'Play game!';

body.appendChild(btn);

btn.addEventListener('click', game);

//Returns a random choice for the computer to play
function computerPlay(){
    return options[Math.floor(Math.random()*options.length)];
}

function playRound(playerSelection, computerSelection){

    console.log(`The computer has chosen: ${computerSelection}. You have chosen: ${playerSelection}.`)

    //Game event handler
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
    let userChoice;

    let compWinCount = 0;
    let userWinCount = 0;
    for (let i = 0; i < 5; i++){
        userChoice = prompt('Rock, paper, or scissors?').toLowerCase();
        let gameResult = playRound(userChoice, computerPlay());
        console.log(gameResult);

        if (gameResult === 'You win!'){
            userWinCount++;
        }
        else if (gameResult === 'You lose!'){
            compWinCount++;
        }
        else{
            continue;
        }
    }
    
    if (compWinCount === userWinCount){
        console.log('The game is a tie!');
        console.log(`The score was:\nUser: ${userWinCount}\nComputer: ${compWinCount}`);
    }
    else if (compWinCount > userWinCount){
        console.log('You have lost!');
        console.log(`The score was:\nUser: ${userWinCount}\nComputer: ${compWinCount}`);
    }
    else {
        console.log('You have won!');
        console.log(`The score was:\nUser: ${userWinCount}\nComputer: ${compWinCount}`);
    }
}