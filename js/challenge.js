var challengeState = {

  create: function() {

    var challenges = game.cache.getJSON('challenges');

    selectedChallenge = challenges[1];

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

    //poly = new Phaser.Polygon();
    //poly.setTo([50, 50, 810, -10, 750, 550, -10, 610]);

    //graphics = game.add.graphics(0, 0);

    //graphics.beginFill(0xFFFFFF);
    //graphics.drawPolygon(poly.points);
    //graphics.endFill();

    var title = game.add.text(game.world.centerX, 125, selectedChallenge.name, { font: 'bold 45px museo-sans-rounded', fill: '#64BC46'});
    title.anchor.set(0.5);

    var description = game.add.text(game.world.centerX, 180, selectedChallenge.description, { font: '25px museo-sans-rounded', fill: '#7E7E7E'});
    description.anchor.set(0.5);

    var rollButton = game.add.button(game.world.centerX, 500, '', this.start, this);
    var rollText = game.add.text(0, 0, "Roll 'em!", { font: 'bold 30px museo-sans-rounded', fill: '#64BC46'});
    rollButton.addChild(rollText);

    var backButton = game.add.button(100, 500, '', this.back, this);
    var backText = game.add.text(0, 0, "Back", { font: 'bold 30px museo-sans-rounded', fill: '#64BC46'});
    backButton.addChild(backText);

    var credits = game.add.text(800, 610, "Sandcastle Games", { font: 'bold 20px museo-sans-rounded', fill: '#808181'});
    credits.anchor.set(1);

    text = game.add.group();
    text.angle = -4;

    text.add(title);
    text.add(description);
    text.add(rollButton);
    text.add(backButton);
  },

  back: function() {
    game.state.start('menu');
  },

  start: function() {
    game.state.start('play');
  }
}
