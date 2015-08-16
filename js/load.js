var loadState = {

  preload: function() {
    var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff' });

    WebFontConfig = {

      active: function() { game.time.events.add(Phaser.Timer.SECOND, this.create, this); },

      typekit: {
        id: 'imi3pmb'
      }

    };

    game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    game.load.image('button', 'img/button.png');
    game.load.audio('theme', ['audio/dicey-1.mp3']);
    game.load.json('challenges', 'js/challenges.json');

  },

  create: function() {
    game.stage.backgroundColor = "#127629";
    game.state.start('menu');
  }
};
