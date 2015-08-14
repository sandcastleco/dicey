var menuState = {

  create: function() {

    var nameLabel = game.add.text(game.world.centerX - 60, 50, 'Dicey');
    nameLabel.font = 'Bree';
    nameLabel.fontSize = 50;
    nameLabel.fill = '#FFF';

    var challenges = game.cache.getJSON('challenges');
    console.log(Object.keys(challenges).length);

    game.add.text(80, 150, 'Challenge 1', { font: '20px Bree', fill: '#FFF'});
    game.add.text(80, 200, 'Challenge 2', { font: '20px Bree', fill: '#FFF'});
    game.add.text(80, 250, 'Challenge 3', { font: '20px Bree', fill: '#FFF'});
    game.add.text(80, 300, 'Challenge 4', { font: '20px Bree', fill: '#FFF'});
    game.add.text(80, 350, 'Challenge 5', { font: '20px Bree', fill: '#FFF'});

    var startButton = game.add.button(80, 500, '', function() { game.state.start('play'), this});
    var startText = game.add.text(0, 0, 'Play selected mode!', { font: '30px Bree', fill: '#FFF'});
    startButton.addChild(startText);

    // var startButton = game.add.button(game.world.centerX - 50, 400, 'button', function() { game.state.start('play'), this });

    var music = game.add.audio('theme');
    music.loop = true;
    music.play();
  },

  start: function() {
    game.state.start('play');
  }
};
