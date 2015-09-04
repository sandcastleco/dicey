var playState = {

  create: function() {
    timerLength = selectedChallenge.numberOfSeconds * 1000;
    results = [];

    poly = new Phaser.Polygon();
    poly.setTo([50, 50, 810, -10, 750, 550, -10, 610]);

    graphics = game.add.graphics(0, 0);

    graphics.beginFill(0xFFFFFF);
    graphics.drawPolygon(poly.points);
    graphics.endFill();

    var title = game.add.text(game.world.centerX, 125, selectedChallenge.name, { font: 'bold 45px museo-sans-rounded', fill: '#64BC46'});
    title.anchor.set(0.5);
    var description = game.add.text(game.world.centerX, 180, selectedChallenge.description, { font: '25px museo-sans-rounded', fill: '#7E7E7E'});
    description.anchor.set(0.5);
    var rollButton = game.add.button(game.world.centerX, 500, '', this.rollDice, this);
    var rollText = game.add.text(0, 0, "Roll 'em!", { font: 'bold 30px museo-sans-rounded', fill: '#64BC46'});
    rollButton.addChild(rollText);
    var backButton = game.add.button(100, 500, '', this.back, this);
    var backText = game.add.text(0, 0, "Back", { font: 'bold 30px museo-sans-rounded', fill: '#64BC46'});
    backButton.addChild(backText);


    // Create an empty group of dice to show on screen
    dice = game.add.group();
    text = game.add.group();
    text.angle = -4;

    text.add(title);
    text.add(description);
    text.add(rollButton);
    text.add(backButton);
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
    height = Math.random() * game.height;
    var die = game.add.text(dieID * spacing, height, number, { fill: '#FFF' });
    dice.add(die);
  },

  // Remove the dice in the dice group
  clearBoard: function() {
    text.destroy();
    dice.destroy(true, true);
    graphics.destroy();
  },

  // Roll a chosen number of X-sided dice
  rollDice: function() {
    // Clear everything to make room for the dice
    this.clearBoard();
    // For each die, generate its number based on its number of sides, then show it on the screen and add it to the group of dice
    for (var i = 0; i < selectedChallenge.numberOfDice; i++) {
      this.generateNumber(selectedChallenge.numberOfSides);
      this.showDie(selectedChallenge.numberOfDice, i, number);
    }
    this.calculateTotal(results);
    this.startTimer();
  },

  startTimer: function() {
    setTimeout(function() {
      playState.startGuess();
    }, timerLength);
  },

  startGuess: function() {
    game.state.start('guess');
  },

  back: function() {
    game.state.start('menu');
  }
}
