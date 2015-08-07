var game = new Phaser.Game(800, 600, Phaser.AUTO, 'dicey', { preload: preload, create: create, update: update });

function preload() {
  game.load.image('button', 'img/button.png');
}

var button;
var number;
var dice;

function create() {
  // Put the title on the screen
  gameTitle = game.add.text(350, 300, 'Dicey', { fontSize: '50px', fill: '#FFF' });
  // Put the button on the screen
  button = game.add.button(game.world.centerX - 50, 400, 'button', function() { rollDice(6, 4)}, this);
  // Create an empty group of dice to show on screen
  dice = game.add.group();
}

// Generate a random number between 1 and the chosen number of sides
function generateNumber(numberOfSides) {
  number = Math.floor((Math.random() * numberOfSides) + 1);
  return number;
}

// Save a result to an array
function saveResult(array, result) {
  array.push(result);
}

// Add the die to the screen in an evenly spaced position and add it to the dice group
function showDie(numberOfDice, dieID, number) {
  spacing = game.width/numberOfDice;
  height = Math.random() * game.height;
  var die = game.add.text(dieID * spacing, height, number, { fill: '#FFF' });
  dice.add(die);
}

// Remove the dice in the dice group
function clearBoard() {
  dice.destroy(true, true);
}

// Roll a chosen number of X-sided dice
function rollDice(numberOfDice, numberOfSides) {
  // If there was a previous roll, clear it out
  if (dice.length > 0) {
    clearBoard();
  }
  // For each die, generate its number based on its number of sides, then show it on the screen and add it to the group of dice
  for (var i = 0; i < numberOfDice; i++) {
    generateNumber(numberOfSides);
    showDie(numberOfDice, i, number);
  }
}

function update() {

}
