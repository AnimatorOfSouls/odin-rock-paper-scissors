function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  switch (num) {
    case 0:
      return "ROCK";
    case 1:
      return "PAPER";
    case 2:
      return "SCISSORS";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();

  switch (playerSelection) {
    case "ROCK":
      switch (computerSelection) {
        case "ROCK":
          return "DRAW";
        case "PAPER":
          return "LOSE";
        case "SCISSORS":
          return "WIN";
      }
    case "PAPER":
      switch (computerSelection) {
        case "ROCK":
          return "WIN";
        case "PAPER":
          return "DRAW";
        case "SCISSORS":
          return "LOSE";
      }
    case "SCISSORS":
      switch (computerSelection) {
        case "ROCK":
          return "LOSE";
        case "PAPER":
          return "WIN";
        case "SCISSORS":
          return "DRAW";
      }
  }
}

function game() {
  let score = [0,0];
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter 'rock', 'paper', or 'scissors'");
    let computerSelection = getComputerChoice();

    let result = playRound(playerSelection, computerSelection);
    switch (result) {
      case "WIN":
        console.log("You win!");
        score[0]++;
        break;
      case "LOSE":
        console.log("You lose :(");
        score[1]++;
        break;
      case "DRAW":
        console.log("Draw!");
        break;
    }
  }
  console.log(`FINAL SCORE\nPlayer:\t${score[0]}\nComputer:\t${score[1]}`);
}
