let players = ['X', 'O'];
let activePlayer = 0;
let board = [
    [ , , ,],
    [ , , ,],
    [ , , ,]
  ];

function startGame () { 
  board.forEach ( i => {
    i.fill('')
  }) 
  return (renderBoard(board))
}


function click (row, col) {    
  function checkWin (player) {
    if (
      board[0][0] == player && board[0][1] == player && board[0][2] == player ||
      board[1][0] == player && board[1][1] == player && board[1][2] == player ||
      board[2][0] == player && board[2][1] == player && board[2][2] == player ||
      board[2][2] == player && board[2][1] == player && board[2][0] == player ||
      board[1][2] == player && board[1][1] == player && board[1][0] == player ||
      board[0][2] == player && board[0][1] == player && board[0][0] == player ||
      board[2][0] == player && board[1][1] == player && board[0][2] == player ||
      board[0][0] == player && board[1][1] == player && board[2][2] == player ||
      board[0][2] == player && board[1][1] == player && board[2][0] == player ||
      board[2][2] == player && board[1][1] == player && board[0][0] == player ||
      board[0][1] == player && board[1][1] == player && board[2][1] == player ||
      board[2][1] == player && board[1][1] == player && board[0][1] == player ||
      board[2][0] == player && board[1][0] == player && board[0][0] == player ||
      board[0][2] == player && board[1][2] == player && board[2][2] == player ||
      board[0][2] == player && board[1][2] == player && board[2][2] == player ||
      board[2][2] == player && board[1][2] == player && board[0][2] == player
    ) 
      return true
  }   
  
  if (activePlayer % 2 === 0) {
    board[row][col] = players[0];    
    activePlayer++;    
    renderBoard(board)    
    if(checkWin(players[0])) {
      return showWinner('Победили Х')
    }
    
  } else if (activePlayer % 2 !== 0) {
    board[row][col] = players[1]    
    activePlayer++    
    renderBoard(board)    
    if(checkWin(players[1])) {
      return showWinner('Победили О')
    } 
  }
  
  if ((!checkWin(players[0])) && (!checkWin(players[1])) && activePlayer > 8) {
    return showWinner('Ничья')
  }
  
}