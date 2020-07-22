let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10);
};

const compareGuesses = (userGuess, computerGuess, targetGuess) => {
    checkUserGuess(userGuess);
        const humanDifference = Math.abs(targetGuess - userGuess)
        const computerDifference = Math.abs(targetGuess - computerGuess)
        return humanDifference <= computerDifference
 };

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}

const checkUserGuess = (theGuess) => {
    if (theGuess < 0 || theGuess > 9) {
        alert("Please input a number between 0 and 9.");
    }
};

