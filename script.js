// create a function callet computerPlay that returns 'Rock', 'Paper' or 'Scissors'
const choices = ['rock', 'paper', 'scissors'];
let playerScore;
let computerScore;
let draws;

function computerPlay() {
    return choices[Math.floor(choices.length * Math.random())]
}

function getPlayerChoice() {
    // only problem here is if the player cancels it throws a type errer. I don't know how to stop it else at his moment.
    let playerChoice = prompt("Please enter your choice. rock, paper or scissors", '').toLowerCase();
    return choices.includes(playerChoice) ? playerChoice : getPlayerChoice();
}

function playRound(playerSelection, computerSelection) {
    
    player = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    computer = computerSelection[0].toUpperCase() + computerSelection.slice(1).toLowerCase();

    if (player == 'Rock' && computer == 'Scissors' ||
        player == 'Paper' && computer == 'Rock' ||
        player == 'Scissors' && computer == 'Paper') {
        playerScore++;
        console.log('You Win this Round!')
        return `${player} beats ${computer}`
    } else if (player == 'Rock' && computer == 'Paper' ||
        player == 'Paper' && computer == 'Scissors' ||
        player == 'Scissors' && computer == 'Rock') {
        computerScore++;
        return `${computer} beats ${player}`
    } else {
        draws++;
        console.log('You Lose this Round!');
        return "It's a draw!"
    }
}

function game() {
    playerScore = 0;
    computerScore = 0;
    draws = 0;
    
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getPlayerChoice(), computerPlay()));
        console.log(`In round ${i+1} the score is:`);
        console.log(`Player: ${playerScore}`);
        console.log(`Computer: ${computerScore}`);
        console.log(`Draws: ${draws}`);
    }

    if (playerScore > computerScore) {
        console.log('Congratulations! You won the game!');
    } else if (playerScore < computerScore) {
        console.log('What a pity! You lost the game!');
    } else {
        console.log("Well it's a draw!");
    }
}

game();
