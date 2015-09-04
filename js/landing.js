var landingState = {

  create: function() {

    var music = game.add.audio('theme', 1, true);
    music.play();

    var nameLabel = game.add.text(game.world.centerX, 150, 'Dicey', { font: 'bold 80px museo-sans-rounded', fill: '#FFF'});
    nameLabel.anchor.set(0.5);

    var startButton = game.add.button(game.world.centerX - 100, 400, '', this.start, this);
    var startText = game.add.text(0, 0, "Challenge me!", { font: '30px museo-sans-rounded', fill: '#FFF'});
    startButton.addChild(startText);
    startButton.anchor.set(0.5);
  },

  start: function() {
    game.state.start('menu');
  }
};
