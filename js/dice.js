const game = document.getElementById('game');
const rollButton = document.getElementById('roll');
const holdButton = document.getElementById('hold');
const player1ScoreSpan = document.getElementById('player1-score');
const player2ScoreSpan = document.getElementById('player2-score');
const buttonReset = document.getElementById('reset');
const message = document.getElementById('message');

let player1Score = 0;
let player2Score = 0;
let currentPlayer = 1;
let turnScore = 0;

rollButton.addEventListener('click', () => {
  const roll = Math.floor(Math.random() * 6) + 1;
  if (roll === 1) {
    turnScore = 0;
    message.textContent = `You rolled a 1. Your turn is over.`;
    switchPlayer();
  } else {
    turnScore += roll;
    message.textContent = `You rolled a ${roll}. Your turn score is ${turnScore}.`;
  }
});

holdButton.addEventListener('click', () => {
  if (currentPlayer === 1) {
    player1Score += turnScore;
    player1ScoreSpan.textContent = player1Score;
  } else {
    player2Score += turnScore;
    player2ScoreSpan.textContent = player2Score;
  }
  turnScore = 0;
  message.textContent = `Your turn is over.`;
  switchPlayer();
});

buttonReset.disabled = true;

function switchPlayer() {
  if (currentPlayer === 1) {
    currentPlayer = 2;
  } else {
    currentPlayer = 1;
  }
  if (player1Score >= 30) {
    message.textContent = `Player 1 wins!`;
    rollButton.disabled = true;
    holdButton.disabled = true;
    buttonReset.disabled = false;

  } else if (player2Score >= 30) {
    message.textContent = `Player 2 wins!`;
    rollButton.disabled = true;
    holdButton.disabled = true;
    buttonReset.disabled = false;
  }
}
