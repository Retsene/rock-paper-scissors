const choices = ["rock", "paper", "scissors"];

const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
};

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function getHumanChoice() {
    return prompt("Choose [rock/paper/scissors]: ")
}

function playRound(humanChoice, computerChoice) {
    if (!choices.includes(humanChoice)) {
        computerScore++;
        return `${humanChoice} is not a valid choice`;
    }

    if (humanChoice === computerChoice) {
        return "It's a tie";
    }

    if (winConditions[humanChoice] === computerChoice) {
        humanScore++;
        return `You won! ${humanChoice} beats ${computerChoice}!`;
    }
    else {
        computerScore++;
        return `You lost! ${computerChoice} beats ${humanChoice}!`;
    }
}


for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}:`)

    let humanChoice = getHumanChoice().toLowerCase();
    let computerChoice = getComputerChoice().toLowerCase();

    console.log(`You choose: ${humanChoice}`);
    console.log(`Computer choose: ${computerChoice}`);
    console.log(playRound(humanChoice, computerChoice));
    console.log(`Human ${humanScore} - ${computerScore} Computer`);
    console.log("");
}

console.log(`Game ended! Human ${humanScore} - ${computerScore} Computer`);

if (humanScore > computerScore) {
    console.log("You won the game!");
}
else if (humanScore === computerScore) {
    console.log("It's a tie!");
}
else {
    console.log("You lost the game!");
}
