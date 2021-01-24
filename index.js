function computerPlay() {
  const options = ['ROCK', 'PAPER', 'SCISSORS'];
  let selection = options[Math.floor(Math.random() * 3)]
  return selection;
}


function game() {
  let playerScore = 0;
  let computerScore = 0;

  function playRound(playerSelection, computerSelection) {
  if (playerSelection.toUpperCase() === computerSelection) {
    return 'It\'s a draw! Play another round.'
  } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'PAPER') {
    computerScore++;
    return 'Computer wins! Paper beats rock.'
  } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'SCISSORS') {
    playerScore++;
    return 'Player wins! Rock beats scissors.'
  } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'ROCK') {
    playerScore++;
    return 'Player wins! Paper beats rock.'
  } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'SCISSORS') {
    computerScore++;
    return 'Computer wins! Scissors beats paper.'
  } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'ROCK') {
    computerScore++;
    return 'Computer wins! Scissors beats rock.'
  } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'PAPER') {
    playerScore++;
    return 'Player wins! Scissors beats paper.'
  }
}

  // for (let i = 1; i <= 5; i++) {
  //   let playerOption = prompt('Enter rock or paper or scissors: ')
  //   let computerOption = computerPlay();
  //   playRound(playerOption, computerOption);
  //   console.log(`The current score is - Player:${playerScore} and Computer:${computerScore}.`)
  // }

  const rockButton = document.querySelector('#rock');
  rockButton.addEventListener('click', () => {
    alert('you picked rock!')
  })

  const paperButton = document.querySelector('#paper');
  paperButton.addEventListener('click', () => {
    alert('you picked paper!')
  })

  const scissorsButton = document.querySelector('#scissors');
  scissorsButton.addEventListener('click', () => {
    alert('you picked scissors!')
  })

  // when a button is clicked, play a round
  // display running score
  // when someone reaches five points, declare a winner

  if (playerScore > computerScore) {
    console.log('Congratulations, you beat the computer!')
  } else if (playerScore < computerScore) {
    console.log('Ooof, you just got beat by the computer. Better luck next time!')
  } else {
    console.log('How interesting, a tie game! Nicely done.')
  }

}

game();