//I wanted to practice using javascript to create elements and manipulate them
//So all of the elements in the DOM are created in JS rather than inside the HTML
//Which probably would have made this entire process quite a bit easier
//I think I am going to return to this project later and make it a bit cleaner

let compWinCount = 0;
let userWinCount = 0;

const body = document.querySelector('body');
const options = ['rock', 'paper', 'scissors'];

//Creating buttons and adding their event listener functionality
const btnRock = document.createElement('button');
btnRock.setAttribute('class', 'input');
btnRock.textContent = 'Rock';
const btnPaper = document.createElement('button');
btnPaper.setAttribute('class', 'input');
btnPaper.textContent = 'Paper';
const btnScissors = document.createElement('button');
btnScissors.setAttribute('class', 'input');
btnScissors.textContent = 'Scissors';

//Creating the reset button
const btnReset = document.createElement('button');
btnReset.textContent = 'Play again?';
btnReset.addEventListener('click', () => window.location.reload()) //Resets page on button click

//Adding buttons to the screen
body.appendChild(btnRock);
body.appendChild(btnPaper);
body.appendChild(btnScissors);

const buttons = document.querySelectorAll('.input');
console.log(buttons);

buttons.forEach(element => {
    element.addEventListener('click', () => {
        game(element.textContent.toLowerCase());
    })
})

const gameScore = document.createElement('div');
gameScore.setAttribute('id', 'result');
body.appendChild(gameScore);


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
    let compChoice = computerPlay();
    let gameResult = playRound(userChoice, compChoice);
    let result = "";

    if (gameResult === 'You win!'){
        userWinCount++;
        result = ('You win! You chose ' + userChoice + ' and the computer chose ' + compChoice
            + '.' + "<br><br>Player score: " + userWinCount + "<br>Computer score: " + compWinCount);
        console.log(`User win count: ${userWinCount}`);
        if (userWinCount === 5) {
            result = ('You won the game! Click the button to play again.'
                + "<br><br>Player score: " + userWinCount + "<br>Computer score: " + compWinCount + "<br><br>")
            disableButtons();
            body.appendChild(btnReset);
        }
    }
    else if (gameResult === 'You lose!'){
        compWinCount++;
        result = ('You lose! You chose ' + userChoice + ' and the computer chose ' + compChoice
            + '.' + "<br><br>Player score: " + userWinCount + "<br>Computer score: " + compWinCount);
        console.log(`Computer win count: ${compWinCount}`);
        if (compWinCount === 5) {
            result = ('You lost the game! Click the button to play again.'
                + "<br><br>Player score: " + userWinCount + "<br>Computer score: " + compWinCount + "<br><br>")
            disableButtons();
            body.appendChild(btnReset);
        };
    }
    else if (gameResult === 'You tied!'){
        result = ('You tied! You chose ' + userChoice + ' and the computer chose ' + compChoice
            + '.' + "<br><br>Player score: " + userWinCount + "<br>Computer score: " + compWinCount);
    }

    document.getElementById('result').innerHTML = result;
}

function disableButtons(){
    buttons.forEach(element => {
        element.disabled = true;
    })
}