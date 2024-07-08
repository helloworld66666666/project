/*function rollDice(){
  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];
  for(let i = 0; i < numOfDice; i++){
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`);
  }
  diceResult.textContent = `Dice: ${values.join(', ')}`;
  diceImages.innerHTML = images.join('');
}*/
function rollDice(){
  const numOfDiceInput = document.getElementById("numOfDice");
  let numOfDice = parseInt(numOfDiceInput.value);
  // Validate the input to ensure it's between 1 and 6
  if (numOfDice < 1 || numOfDice > 6) {
    // If the input is invalid, clear the result and exit the function
    document.getElementById("diceResult").textContent = '';
    document.getElementById("diceImages").innerHTML = '';
    return;
  }
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];

  for(let i = 0; i < numOfDice; i++){
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="Portfolio/Dice Roller/dice_images/${value}.png" alt="Dice ${value}">`);
  }
  diceResult.textContent = `Dice: ${values.join(', ')}`;
  diceImages.innerHTML = images.join('');
}
