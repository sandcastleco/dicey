var resultState = {

  create: function() {

    makeBackground();

    if (guess == total) {
      var result = "Correct! You win!"
      score += 1;
    } else {
      var result = "Bzzzzt, try again!"
      score = 0;
    }

    updateScore();
    this.showResult(result);

    var startButton = game.add.button(game.world.centerX, 400, '', this.start, this);
    var startText = game.add.text(0, 0, "Play again!", { font: '30px museo-sans-rounded', fill: '#eb8f3d'});
    startButton.addChild(startText);
    startButton.anchor.set(0.5);

  },

  showResult: function(result) {
    var resultText = game.add.text(game.world.centerX, 200, result, { font: '40px museo-sans-rounded', fill: '#808181' });
    resultText.anchor.set(0.5);
  },

  start: function() {
    game.state.start('challenge');
  }

};
