
let players = ['х', 'o'];
let activePlayer = 0;
let board = [
  ["","",""],
  ["","",""],
  ["","",""]
];

function changePlayer() {
 if (activePlayer === 0) {
  activePlayer = 1;
 }
 else {
  activePlayer = 0;
 }
};

function startGame() {
  renderBoard(board);
  activePlayer = 0;
  board = [
   ["","",""],
   ["","",""],
   ["","",""]
  ]; 
  renderBoard(board);
}

function click(row,col) {
  board[row][col] = players[activePlayer];
  renderBoard(board);
 
  if (board[0][0] == players[activePlayer] && 
    board[0][1] == players[activePlayer] &&
    board[0][2] == players[activePlayer]){
    showWinner(activePlayer);
 }
  else if (board[1][0] == players[activePlayer] &&
    board[1][1] == players[activePlayer] && 
    board[1][2] == players[activePlayer]){
    showWinner(activePlayer);
 }
  else if (board[2][0] == players[activePlayer] &&
    board[2][1] == players[activePlayer] &&
    board[2][2] == players[activePlayer]){
    showWinner(activePlayer);
 }
  else if (board[0][0] == players[activePlayer] &&
    board[1][0] == players[activePlayer] &&
    board[2][0] == players[activePlayer]){
    showWinner(activePlayer);
 }
  else if (board[0][1] == players[activePlayer] && 
     board[1][1] == players[activePlayer] &&
     board[2][1] == players[activePlayer]){
     showWinner(activePlayer);
 }
  else if (board[0][2] == players[activePlayer] &&
    board[1][2] == players[activePlayer] &&
    board[2][2] == players[activePlayer]){
    showWinner(activePlayer);
 }
  else if (board[0][0] == players[activePlayer] &&
    board[1][1] == players[activePlayer] &&
    board[2][2] == players[activePlayer]){
    showWinner(activePlayer);
 }
  else if (board[0][2] == players[activePlayer] &&
    board[1][1] == players[activePlayer] && 
    board[2][0] == players[activePlayer]){
    showWinner(activePlayer);
 }
  else {
   changePlayer();
 }
}
