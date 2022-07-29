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

function getResult(playerSelection, computerSelection) {
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

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  let result = getResult(playerSelection, computerSelection);
  
  console.log(result);
  const resultElem = document.querySelector("#result");
  resultElem.textContent = result;

  let score = 0;
  switch (result) {
    case "WIN":
      console.log("You win!");
      const playerScore = document.querySelector("#player-score");
      score = parseInt(playerScore.textContent) + 1;
      playerScore.textContent = score;
      if (score == 5) alert("You win!");
      break;
    case "LOSE":
      console.log("You lose :(");
      const computerScore = document.querySelector("#computer-score");
      score = parseInt(computerScore.textContent) + 1;
      computerScore.textContent = score;
      if (score == 5) alert("The computer wins!");
      break;
    case "DRAW":
      console.log("Draw!");
      break;
  }
}
