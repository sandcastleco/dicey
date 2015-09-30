var challengeState = {

  create: function() {

    var challenges = game.cache.getJSON('challenges');
    selectedChallenge = challenges[3];
    selectedVariation = selectedChallenge.variations[0];

    makeBackground();

    text = game.add.group();
    text.angle = -4;
    this.makeTitle();
    this.makeDescription();
    this.makeChallengeList();
    this.makeRollButton();
    this.makeBackButton();

  },

  makeTitle: function() {
    var title = game.add.text(game.world.centerX, 125, selectedChallenge.name, { font: 'bold 45px museo-sans-rounded', fill: '#eb8f3d'});
    title.anchor.set(0.5);
    text.add(title);
  },

  makeDescription: function() {
    var description = game.add.text(game.world.centerX, 180, selectedChallenge.description, { font: '25px museo-sans-rounded', fill: '#7E7E7E'});
    description.anchor.set(0.5);
    text.add(description);
  },

  makeChallengeList: function() {
    variations = game.add.group();
    variations.angle = -4;
    for (i = 0; i < selectedChallenge.variations.length; i++) {
      var variation = selectedChallenge.variations[i];
      var seconds = variation.numberOfSeconds;
      var dice = variation.numberOfDice;
      var challengeButton = game.add.button(game.world.centerX - 100, ((i + 1) * 30) + 220, '', this.selectVariation, this);
      challengeButton.variation = variation;
      var text = game.add.text(0, 0, seconds + " seconds, " + dice + " dice", { font: '20px museo-sans-rounded', fill: '#eb8f3d'});
      challengeButton.addChild(text);
      variations.add(challengeButton);
    }
  },

  selectVariation: function(item) {
    selectedVariation = item.variation;
    console.log(selectedVariation.numberOfDice);
    console.log(selectedVariation.numberOfSeconds);
  },

  makeRollButton: function() {
    var rollButton = game.add.button(game.world.centerX, 500, '', this.start, this);
    var rollText = game.add.text(0, 0, "Roll 'em!", { font: 'bold 30px museo-sans-rounded', fill: '#eb8f3d'});
    rollButton.addChild(rollText);
    text.add(rollButton);
  },

  makeBackButton: function() {
    var backButton = game.add.button(100, 500, '', this.back, this);
    var backText = game.add.text(0, 0, "Back", { font: 'bold 30px museo-sans-rounded', fill: '#eb8f3d'});
    backButton.addChild(backText);
    text.add(backButton);
  },

  back: function() {
    game.state.start('landing');
  },

  start: function() {
    game.state.start('play');
  }
}
