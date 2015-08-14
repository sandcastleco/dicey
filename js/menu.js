var menuState = {

  create: function() {
    var nameLabel = game.add.text(80, 80, 'Dicey', { font: '50px Courier', fill: '#ffffff' });

    var startButton = game.add.button(game.world.centerX - 50, 400, 'button', function() { game.state.start('play'), this });
    var music = game.add.audio('theme');
    music.loop = true;
    music.play();
  },

  start: function() {
    game.state.start('play');
  }
};