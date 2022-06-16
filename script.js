const body = document.querySelector('body');
const options = ['rock', 'paper', 'scissors'];

const btnRock = document.createElement('button');
btnRock.textContent = 'Rock';
const btnPaper = document.createElement('button');
btnPaper.textContent = 'Paper';
const btnScissors = document.createElement('button');
btnScissors.textContent = 'Scissors';

body.appendChild(btnRock);
body.appendChild(btnPaper);
body.appendChild(btnScissors);

btnRock.addEventListener('click', () =>{
    let userChoice = 'Rock'.toLowerCase();
    game(userChoice);
})

btnPaper.addEventListener('click', () =>{
    let userChoice = 'Paper'.toLowerCase();
    game(userChoice);
})

btnScissors.addEventListener('click', () =>{
    let userChoice = 'Scissors'.toLowerCase();
    game(userChoice);
})

//Returns a random choice for the computer to play
function computerPlay(){
    return options[Math.floor(Math.random()*options.length)];
}

function playRound(playerSelection, computerSelection){

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

function game(userChoice){
    let compWinCount = 0;
    let userWinCount = 0;
    let compChoice = computerPlay();
    let gameResult = playRound(userChoice, compChoice);
    
    const div = document.createElement('div');
    body.appendChild(div);
    div.textContent = `The computer has chosen: ${compChoice}. You have chosen: ${userChoice}.\n${gameResult}`;

    if (gameResult === 'You win!'){
        userWinCount++;
    }
    else if (gameResult === 'You lose!'){
        compWinCount++;
    }
}