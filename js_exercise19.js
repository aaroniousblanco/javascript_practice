// Rock Paper Scissors
//
// Write a function rockPaperScissors which takes the throw of player 1 and the throw of player 2. A throw can have the values of 'rock', 'paper', or 'scissors'. It will return 'player 1' if player 1 wins, 'player 2' if player 2 wins, and 'draw' if there is no winner.
//
// > rockPaperScissors('rock', 'scissors')
// 'player 1'
// > rockPaperScissors('rock', 'paper')
// 'player 2'
// > rockPaperScissors('paper', 'paper')
// 'draw'

function rockPaperScissors(player1, player2) {
  if (player1 === player2) {
    console.log("Draw!");
  }
  else if (player1 === 'rock' && player2 === 'scissors') {
    console.log("Player 1 wins");
  }
  else if (player2 === 'rock' && player1 === 'scissors') {
    console.log("Player 2 wins");
  }
  else if (player2 === 'scissors' && player1 === 'paper') {
    console.log("Player 2 wins");
  }
  else if (player1 === 'scissors' && player2 === 'paper') {
    console.log("Player 1 wins");
  }
  else if (player2 === 'paper' && player1 === 'rock') {
    console.log("Player 2 wins");
  }
  else if (player1 === 'paper' && player2 === 'rock') {
    console.log("Player 1 wins");
  }
}

rockPaperScissors('rock', 'rock');
