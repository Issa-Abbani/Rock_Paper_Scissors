let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let reset = document.getElementById("reset");

let score = JSON.parse(localStorage.getItem('score'));



const computerMove = pickCompMove();

reset.onclick = function() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  document.querySelector(".scoresofar").innerHTML = ``;
  document.querySelector(".versus").innerHTML = ``;
}

if (score === null) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
};

function pickCompMove () {
  let computerMove ="";
  let randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = "Paper";
  } else {
    computerMove = "Scissors"
  }

  return computerMove;
}


function pickPlayerMove (playerMove) {
  const computerMove = pickCompMove();
  let result;

    if (playerMove === "Rock") {
      
      if (computerMove === playerMove) {
         result = 'Tie';
      } else if (computerMove === 'Paper') {
         result = 'Lose';
      } else {
         result = 'Win';
      }
    } 
    
    else if (playerMove === "Paper") {
      if (computerMove === playerMove) {
         result = 'Tie';
      } else if (computerMove === 'Scissors') {
         result = 'Lose';
      } else {
         result = 'Win';
      }
    } 
    
    else {
      if (computerMove === playerMove) {
         result = 'Tie';
      } else if (computerMove === 'Rock') {
         result = 'Lose';
      } else {
         result = 'Win';
      }
   }

    if (result === 'Win') {
      score.wins += 1;
    } else if (result === 'Lose') {
      score.losses += 1;
    } else {
      score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    
    
    document.querySelector(".versus").innerHTML = `      <span>You: </span>
      <img src="Images/${playerMove}.jpeg" alt="${playerMove}">
      <span>V.S  </span>
      <img src="Images/${computerMove}.jpeg" alt="${computerMove}">
      <span> Computer</span>`;
    
    document.querySelector(".scoresofar").innerHTML = `  Wins = ${score.wins} 
    Losses = ${score.losses} 
    Ties = ${score.ties} `;


  //  alert(`You picked ${playerMove} and the Computer picked ${computerMove}. ${result}!`);

}

rock.onclick = function () {
  pickPlayerMove('Rock');
}

paper.onclick = function(){
  pickPlayerMove('Paper');
}

scissors.onclick = function(){
  pickPlayerMove('Scissors');
}





