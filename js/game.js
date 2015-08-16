var game = new Phaser.Game(800, 600, Phaser.AUTO, 'dicey' );

var selectedChallenge = {};

WebFontConfig = {

  active: function() { game.time.events.add(Phaser.Timer.SECOND, createText, this); },

  typekit: {
    id: 'imi3pmb'
  }

};

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('guess', guessState);

game.state.start('boot');
