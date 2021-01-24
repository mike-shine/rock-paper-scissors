const body = document.querySelector('#body');

let playerScore = 0;
let computerScore = 0;



const div = document.createElement('div');
div.style.backgroundColor = 'green';
div.style.border = '1px dotted black';

const h3 = document.createElement('h3');
h3.textContent = `Player Score: ${playerScore}       Computer Score: ${computerScore}`;
h3.style.color = 'white'

div.appendChild(h3);
body.appendChild(div);




function computerPlay() {
  const options = ['ROCK', 'PAPER', 'SCISSORS'];
  let selection = options[Math.floor(Math.random() * 3)]
  return selection;
}


function game() {


  function playRound(playerSelection, computerSelection) {
  if (playerSelection.toUpperCase() === computerSelection) {
    h3.textContent=`It\'s a draw! Play another round. The current score is - Player: ${playerScore} and Computer: ${computerScore}.`
  } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'PAPER') {
    computerScore++;
    h3.textContent=`Computer wins! Paper beats rock.The current score is - Player: ${playerScore} and Computer: ${computerScore}.`
  } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'SCISSORS') {
    playerScore++;
    h3.textContent=`Player wins! Rock beats scissors.The current score is - Player: ${playerScore} and Computer: ${computerScore}.`
  } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'ROCK') {
    playerScore++;
    h3.textContent=`Player wins! Paper beats rock.The current score is - Player: ${playerScore} and Computer: ${computerScore}.`
  } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'SCISSORS') {
    computerScore++;
    h3.textContent=`Computer wins! Scissors beats paper. The current score is - Player: ${playerScore} and Computer: ${computerScore}.`
  } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'ROCK') {
    computerScore++;
    h3.textContent=`Computer wins! Scissors beats rock. The current score is - Player: ${playerScore} and Computer: ${computerScore}.`
  } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'PAPER') {
    playerScore++;
    h3.textContent=`Player wins! Scissors beats paper. The current score is - Player: ${playerScore} and Computer: ${computerScore}.`
  }

  if (playerScore === 5) {
    setTimeout(() => {
      alert('Congratulations, you beat the computer!')
    }, 100)
    playerScore = 0;
    computerScore = 0;
  }
  if (computerScore === 5) {
    setTimeout(() => {
      alert('Ooof, you just got beat by the computer. Better luck next time!')
    }, 100)
    playerScore = 0;
    computerScore = 0;
  }
}

  const rockButton = document.querySelector('#rock');
  rockButton.addEventListener('click', () => {
    playRound('ROCK', computerPlay());
    console.log(`The current score is - Player:${playerScore} and Computer:${computerScore}.`)
  })

  const paperButton = document.querySelector('#paper');
  paperButton.addEventListener('click', () => {
    playRound('PAPER', computerPlay());
    console.log(`The current score is - Player:${playerScore} and Computer:${computerScore}.`)
  })

  const scissorsButton = document.querySelector('#scissors');
  scissorsButton.addEventListener('click', () => {
    playRound('SCISSORS', computerPlay());
    console.log(`The current score is - Player:${playerScore} and Computer:${computerScore}.`)
  })

  // when a button is clicked, play a round
  // display running score
  // when someone reaches five points, declare a winner



}

game();