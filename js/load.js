var loadState = {

  preload: function() {

    bmd = game.make.bitmapData(800, 600);
    bmd.addToWorld();
    bmd.ctx.beginPath();
    bmd.ctx.moveTo(20, 20);
    bmd.ctx.lineTo(780, 20);
    bmd.ctx.quadraticCurveTo(800, 20, 800, 40);
    bmd.ctx.lineTo(800, 560);
    bmd.ctx.quadraticCurveTo(800, 580, 780, 580);
    bmd.ctx.lineTo(20, 580);
    bmd.ctx.quadraticCurveTo(0, 580, 0, 560);
    bmd.ctx.lineTo(0, 40);
    bmd.ctx.quadraticCurveTo(0, 20, 20, 20);
    bmd.ctx.fillStyle="#808181";
    bmd.ctx.fill();
    bmd.ctx.closePath();

    var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff' });

    WebFontConfig = {

      active: function() { game.time.events.add(Phaser.Timer.SECOND, this.create, this); },

      typekit: {
        id: 'imi3pmb'
      }

    };

    game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    game.load.image('button', 'img/button.png');
	// adding a test comment
    game.load.audio('theme', ['audio/09-23-15.mp3']);
    game.load.json('challenges', 'js/challenges.json');

  },

  create: function() {
    game.stage.backgroundColor = "#FFF";
    game.state.start('landing');
  }
};
