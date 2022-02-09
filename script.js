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

    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore += 1;
        return `${winLose[0]} ${beats[1]}`
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore += 1;
        return `${winLose[0]} ${beats[0]}`
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore += 1;
        return `${winLose[0]} ${beats[2]}`
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore += 1;
        return `${winLose[1]} ${beats[0]}`
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore += 1;
        return `${winLose[1]} ${beats[2]}`
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore += 1;
        return `${winLose[1]} ${beats[1]}`
    } else {
        draws += 1;
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
        console.log('Congratulations! You won the hole game!');
    } else if (playerScore < computerScore) {
        console.log('What a pity! You lost the hole game!');
    } else {
        console.log("Well it's a draw!")
    }
}

game()
