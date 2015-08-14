var loadState = {
  preload: function() {
    var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff' });

    game.load.image('button', 'img/button.png');
    game.load.audio('theme', ['audio/dicey-1.mp3']);
  },

  create: function() {
    game.state.start('menu');
  }
};
