function startNewGame() {
  gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ]
  if (players[0].name === "" || players[1].name === "") {
    alert("Introduce los nombres");
    return;
  }
  activeGameElement.style.display = "block";
  activePlayerDisplay();
  for (field of gameFieldElements) {
    field.textContent = "";
    field.classList.remove("disabled");
  }
  gameOverDisplayElement.style.display = 'none';
  winnerPlayerDisplayElement.style.display = 'none';
  roundCounter = 1;
  turnDisplayElement.style.display = 'block';
  startNewGameBtnElement.textContent = 'Start New Game'

}

function switchedPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
}

function activePlayerDisplay() {
  activePlayerDisplayElement.textContent = players[activePlayer].name;
}

function selectedGameField(event) {
  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (selectedField.textContent) {
    return;
  }

  if (gameOverDisplayElement.style.display === 'block'){
    return;
  }

  

  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add("disabled");
  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  
  const winnerId = checkForGameOver();
  console.log(winnerId);
  console.log(roundCounter);
  roundCounter++;
  switchedPlayer();
  activePlayerDisplay();
}





//function to set roundCounter back to 1 
//set reset button to initial state

//checking columns for equality
function checkForGameOver() {

  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      turnDisplayElement.style.display = 'none'; //Next turn not displayed
      gameOverDisplayElement.style.display = 'block';
      winnerPlayerDisplayElement.style.display = 'block';
      winnerTextDisplayElement.style.display = 'block';
      drawDisplayElement.style.display = 'none';
      winnerPlayerDisplayElement.textContent = players[gameData[i][0] - 1].name;
      
      // return gameData[i][0];
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      turnDisplayElement.style.display = 'none'; //Next turn not displayed
      gameOverDisplayElement.style.display = 'block';
      winnerPlayerDisplayElement.style.display = 'block';
      winnerTextDisplayElement.style.display = 'block';
      drawDisplayElement.style.display = 'none';
      winnerPlayerDisplayElement.textContent = players[gameData[0][i] - 1].name;
      
      // return gameData[0][i];
    }
  }


  //Diagonal top left to bottom right
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    turnDisplayElement.style.display = 'none'; //Next turn not displayed
    gameOverDisplayElement.style.display = 'block';
    winnerPlayerDisplayElement.style.display = 'block';
    winnerTextDisplayElement.style.display = 'block';
    drawDisplayElement.style.display = 'none';
    winnerPlayerDisplayElement.textContent = players[gameData[0][0] - 1].name;
    
    // return gameData[0][0];
  }


  //Diagonal bottom left to top right
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    turnDisplayElement.style.display = 'none'; //Next turn not displayed
    gameOverDisplayElement.style.display = 'block';
    winnerPlayerDisplayElement.style.display = 'block';
    winnerTextDisplayElement.style.display = 'block';
    drawDisplayElement.style.display = 'none';
    winnerPlayerDisplayElement.textContent = players[gameData[2][0] - 1].name;
    
    // return gameData[2][0];
  }

  if (roundCounter === 9) {
    turnDisplayElement.style.display = 'none'; //Next turn not displayed
    gameOverDisplayElement.style.display = 'block'; //Show game over overlay
    drawDisplayElement.style.display = 'block' // show the draw 
    winnerTextDisplayElement.style.display = 'none'; //hide the player winner
  }

  return 0;

  
}
