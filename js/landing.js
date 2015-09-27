var landingState = {

  create: function() {

    var music = game.add.audio('theme', 1, true);
    music.play();

    bmd = game.make.bitmapData(800, 600);
    bmd.addToWorld();
    console.log(bmd.ctx);
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

    var nameLabel = game.add.text(game.world.centerX, 150, 'Dicey', { font: 'bold 80px museo-sans-rounded', fill: '#FFF'});
    nameLabel.anchor.set(0.5);

    var startButton = game.add.button(game.world.centerX - 100, 400, '', this.start, this);
    var startText = game.add.text(0, 0, "Challenge me!", { font: '30px museo-sans-rounded', fill: '#FFF'});
    startButton.addChild(startText);
    startButton.anchor.set(0.5);
  },

  start: function() {
    game.state.start('challenge');
  }
};
