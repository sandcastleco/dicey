var menuState = {

  create: function() {

    var nameLabel = game.add.text(game.world.centerX - 60, 50, 'Dicey');
    nameLabel.font = 'Bree';
    nameLabel.fontSize = 50;
    nameLabel.fill = '#FFF';

    var challengeOne = game.add.text(80, 150, 'Challenge 1', { font: '20px Bree', fill: '#FFF'});
    game.add.text(80, 200, 'Challenge 2', { font: '20px Bree', fill: '#FFF'});
    game.add.text(80, 250, 'Challenge 3', { font: '20px Bree', fill: '#FFF'});
    game.add.text(80, 300, 'Challenge 4', { font: '20px Bree', fill: '#FFF'});
    game.add.text(80, 350, 'Challenge 5', { font: '20px Bree', fill: '#FFF'});

    game.add.text(80, 500, 'Play selected mode!', { font: '30px Bree', fill: '#FFF'});

    challengeOne.inputEnabled = true;

    var down = function(item) {
      game.add.text(300, 150, '> Challenge 1 Info', { font: '20px Bree', fill: '#FFF'});
    };

    challengeOne.events.onInputDown.add(down, this);
    
    // var startButton = game.add.button(game.world.centerX - 50, 400, 'button', function() { game.state.start('play'), this });

    var music = game.add.audio('theme');
    music.loop = true;
    music.play();
  },

  start: function() {
    game.state.start('play');
  }
};
