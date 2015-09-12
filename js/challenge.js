var challengeState = {

  create: function() {

    var challenges = game.cache.getJSON('challenges');

    selectedChallenge = challenges[1];

    poly = new Phaser.Polygon();
    poly.setTo([50, 50, 810, -10, 750, 550, -10, 610]);

    graphics = game.add.graphics(0, 0);

    graphics.beginFill(0xFFFFFF);
    graphics.drawPolygon(poly.points);
    graphics.endFill();

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
