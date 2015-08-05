var game = new Phaser.Game(800, 600, Phaser.AUTO, 'dicey', { preload: preload, create: create, update: update });

function preload() {

}

function create() {
  gameTitle = game.add.text(350, 300, 'Dicey', { fontSize: '50px', fill: '#FFF' });

  var number;
  var rolls = [];

  // Generate a random number between 1 and the chosen number of sides
  function generateNumber(numberOfSides) {
    number = Math.floor((Math.random() * numberOfSides) + 1);
    return number;
  }

  // Save a result to an array
  function saveResult(array, result) {
    array.push(result);
  }

  // Roll a chosen number of X-sided dice
  function rollDice(numberOfDice, numberOfSides) {
    for (var i = 0; i < numberOfDice; i++) {
      generateNumber(numberOfSides);
      saveResult(rolls, number);
    }
  }

  // Rolle six 4-sided dice
  rollDice(6, 4);
}

function update() {

}
