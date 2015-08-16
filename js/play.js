var playState = {

  create: function() {
    // Create an empty group of dice to show on screen
    dice = game.add.group();
    var rollButton = game.add.button(80, 500, '', this.rollDice, this);
    var rollText = game.add.text(0, 0, "Roll 'em!", { font: '30px Bree', fill: '#FFF'});
    rollButton.addChild(rollText);
  },

  // Generate a random number between 1 and the chosen number of sides
  generateNumber: function(numberOfSides) {
    number = Math.floor((Math.random() * numberOfSides) + 1);
    return number;
  },

  // Save a result to an array
  saveResult: function(array, result) {
    array.push(result);
  },

  // Add the die to the screen in an evenly spaced position and add it to the dice group
  showDie: function(numberOfDice, dieID, number) {
    spacing = game.width/numberOfDice;
    height = Math.random() * game.height;
    var die = game.add.text(dieID * spacing, height, number, { fill: '#FFF' });
    dice.add(die);
  },

  // Remove the dice in the dice group
  clearBoard: function() {
    dice.destroy(true, true);
  },

  // Roll a chosen number of X-sided dice
  rollDice: function() {
    // If there was a previous roll, clear it out
    if (dice.length > 0) {
      this.clearBoard();
    }
    // For each die, generate its number based on its number of sides, then show it on the screen and add it to the group of dice
    for (var i = 0; i < selectedChallenge.numberOfDice; i++) {
      this.generateNumber(selectedChallenge.numberOfSides);
      this.showDie(selectedChallenge.numberOfDice, i, number);
    }
  }
}
