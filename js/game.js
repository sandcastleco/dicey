var game = new Phaser.Game(800, 600, Phaser.AUTO, 'dicey' );

var score = 0;
var selectedChallenge = {};

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('landing', landingState);
game.state.add('challenge', challengeState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('guess', guessState);
game.state.add('result', resultState);
game.state.start('boot');

function makeBackground() {
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

  bmd.ctx.beginPath();
  bmd.ctx.moveTo(800, 10);
  bmd.ctx.lineTo(800, 100);
  bmd.ctx.lineTo(750, 530);
  bmd.ctx.quadraticCurveTo(750, 550, 730, 550);
  bmd.ctx.lineTo(0, 590);
  bmd.ctx.lineTo(0, 500);
  bmd.ctx.lineTo(50, 70);
  bmd.ctx.quadraticCurveTo(50, 50, 70, 50);
  bmd.ctx.fillStyle="#FFFFFF";
  bmd.ctx.fill();
  bmd.ctx.closePath();

  scoreLine = game.add.text(0, 570, "Score: " + score, { font: 'bold 20px museo-sans-rounded', fill: '#808181'});

  var credits = game.add.text(800, 610, "Sandcastle Games", { font: 'bold 20px museo-sans-rounded', fill: '#808181'});
  credits.anchor.set(1);
}

function updateScore() {
  scoreLine._text = "Score: " + score;
}
