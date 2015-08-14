var menuState = {

  create: function() {

    var nameLabel = game.add.text(game.world.centerX - 60, 50, 'Dicey');
    nameLabel.font = 'Bree';
    nameLabel.fontSize = 50;
    nameLabel.fill = '#FFF';

    var startButton = game.add.button(game.world.centerX - 50, 400, 'button', function() { game.state.start('play'), this });

    var music = game.add.audio('theme');
    music.loop = true;
    music.play();
  },

  start: function() {
    game.state.start('play');
  }
};
