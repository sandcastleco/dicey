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
    showDice(rolls);
  }

  // Rolle six 4-sided dice
  rollDice(6, 4);

  function showDice(array) {
    for (var i = 0; i < array.length; i++) {
      spacing = 800/array.length;
      height = Math.random() * 400;
      var die = game.add.text((i * spacing) + 40, height, array[i], { fill: '#FFF' });
    }
  }

  // for (var i = 0; i < 12; i++) {
  //   height = Math.random() * 600;
  //   var die = game.add.text(i * 70, height, i, {fill: '#FFF' });
  // }
}

function update() {

}
