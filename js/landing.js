var landingState = {

  create: function() {

    var music = game.add.audio('theme', 1, true);
    music.play();

    makeBackground();

    var nameLabel = game.add.text(game.world.centerX, 150, 'Dicey', { font: 'bold 80px museo-sans-rounded', fill: '#808181'});
    nameLabel.anchor.set(0.5);
    nameLabel.alpha = 0;
    game.add.tween(nameLabel).to( { alpha: 1 }, 2000, "Linear", true);

    var startButton = game.add.button(game.world.centerX - 100, 400, '', this.start, this);
    var startText = game.add.text(0, 0, "Challenge me!", { font: '30px museo-sans-rounded', fill: '#808181'});
    startButton.addChild(startText);
    startButton.anchor.set(0.5);
    startButton.alpha = 0;
    game.add.tween(startButton).to( { alpha: 1 }, 2000, "Linear", true);
  },

  start: function() {
    game.state.start('challenge');
  }
};
