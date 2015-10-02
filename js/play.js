var playState = {

  create: function() {

    timerLength = selectedVariation.numberOfSeconds * 1000;
    timerUp = false;
    console.log(timerUp);
    results = [];

    // Create an empty group of dice to show on screen
    dice = game.add.group();

    prompt = game.add.text(game.world.centerX, game.world.centerY, "Bash the SPACEBAR to roll", { fill: '#eb8f3d' });
    prompt.anchor.set(0.5);

    spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spacebar.onDown.add(this.rollDice, this);

  },

  // Generate a random number between 1 and the chosen number of sides
  generateNumber: function(numberOfSides) {
    number = Math.floor((Math.random() * numberOfSides) + 1);
    this.saveResult(results, number);
    return number;
  },

  // Save a result to an array
  saveResult: function(array, result) {
    array.push(result);
  },

  // Add up all of the dice
  calculateTotal: function(array) {
    total = array.reduce(function(a, b) {
      return a + b;
    });
    console.log(total);
  },

  // Add the die to the screen in an evenly spaced position and add it to the dice group
  showDie: function(numberOfDice, dieID, number) {
    spacing = game.width/numberOfDice;
    height = Math.random() * (game.height - 30);
    var die = game.add.text(dieID * spacing, height, number, { fill: '#eb8f3d' });
    dice.add(die);
  },

  // Remove the dice in the dice group
  clearBoard: function() {
    prompt.destroy();
    dice.destroy(true, true);
  },

  // Roll a chosen number of X-sided dice
  rollDice: function() {
    spacebar.onDown.remove(this.rollDice, this);
    spacebar.onDown.add(this.startGuess, this);
    // Clear everything to make room for the dice
    this.clearBoard();
    prompt = game.add.text(0, 550, "SPACEBAR to guess", { fill: '#e7e7e7' });
    // For each die, generate its number based on its number of sides, then show it on the screen and add it to the group of dice
    for (var i = 0; i < selectedVariation.numberOfDice; i++) {
      this.generateNumber(selectedChallenge.numberOfSides);
      this.showDie(selectedVariation.numberOfDice, i, number);
    }
    this.calculateTotal(results);
    this.startTimer();
  },

  startTimer: function() {
    timer = setTimeout(function() {
      timerUp = true;
    }, timerLength);
  },

  startGuess: function() {
    if (timerUp) {
      game.state.start('result');
    } else {
      clearTimeout(timer);
      game.state.start('guess');
    }
  },

  back: function() {
    game.state.start('menu');
  }
}
