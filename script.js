// create a function callet computerPlay that returns 'Rock', 'Paper' or 'Scissors'
const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let draws = 0;

function computerPlay() {
    return choices[Math.floor(choices.length * Math.random())]
}

function getPlayerChoice() {
    // only problem here is if the player cancels it throws a type errer. I don't know how to stop it else at his moment.
    let playerChoice = prompt("Please enter your choice. rock, paper or scissors", '').toLowerCase();
    return choices.includes(playerChoice) ? playerChoice : getPlayerChoice();
}

function playRound(playerSelection, computerSelection) {
    
    const winLose = ['You Win!', 'You Lose!']
    const beats = ['Paper beats Rock.', 'Rock beats Scissors.', 'Scissors beats Paper.']

    player = playerSelection[0].toUpperCase() + playerSelection.slice(1)
    computer = computerSelection[0].toUpperCase() + computerSelection.slice(1)

    if (playerSelection == 'rock' && computerSelection == 'scissors' ||
        playerSelection == 'paper' && computerSelection == 'rock' ||
        playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return `${player} beats ${computer}`
    } else if (playerSelection == 'rock' && computerSelection == 'paper' ||
        playerSelection == 'paper' && computerSelection == 'scissors' ||
        playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        return `${computer} beats ${player}`
    } else {
        draws++;
        return "It's a draw!"
    }
}

function game() {
    
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getPlayerChoice(), computerPlay()));
        console.log(`In round ${i+1} the score is:`)
        console.log(`Player: ${playerScore}`)
        console.log(`Computer: ${computerScore}`)
        console.log(`Draws: ${draws}`)
    }

    if (playerScore > computerScore) {
        console.log('Congratulations! You won the game!');
    } else if (playerScore < computerScore) {
        console.log('What a pity! You lost the game!');
    } else {
        console.log("Well it's a draw!")
    }
}

game()
