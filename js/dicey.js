var game = new Phaser.Game(800, 600, Phaser.AUTO, 'dicey', { preload: preload, create: create, update: update });

function preload() {
  game.load.image('button', 'img/button.png');
}

var button;
var number;
var dice;
var rolls = [];

function create() {
  gameTitle = game.add.text(350, 300, 'Dicey', { fontSize: '50px', fill: '#FFF' });
  dice = game.add.group();
  button = game.add.button(game.world.centerX - 50, 400, 'button', function() { rollDice(6, 4)}, this);
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

function showDice(array) {
  for (var i = 0; i < array.length; i++) {
    spacing = 800/array.length;
    height = Math.random() * 400;
    var die = game.add.text((i * spacing) + 40, height, array[i], { fill: '#FFF' });
    dice.add(die);
  }
}

function clearBoard() {
  rolls = [];
  dice.destroy(true, true);
}

// Roll a chosen number of X-sided dice
function rollDice(numberOfDice, numberOfSides) {
  // If there was a previous roll, clear it out
  if (dice.length > 0) {
    clearBoard();
  }
  rolls = [];
  for (var i = 0; i < numberOfDice; i++) {
    generateNumber(numberOfSides);
    saveResult(rolls, number);
  }
  showDice(rolls);
}

function update() {

}
