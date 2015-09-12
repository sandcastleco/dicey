var menuState = {

  create: function() {

    var numberOfChallenges = challenges.length;
    challengeInfo = game.add.group();

    //var music = game.add.audio('theme', 1, true);
    //music.play();

    var nameLabel = game.add.text(game.world.centerX, 100, 'Dicey', { font: 'bold 50px museo-sans-rounded', fill: '#FFF'});
    nameLabel.anchor.set(0.5);

    for (i = 0; i < numberOfChallenges; i++) {
      challenge = challenges[i];
      this.createChallengeButton(i, challenge);
    }

  },

  createChallengeButton: function(index, challenge) {
    button = game.add.button(game.world.centerX - 100, ((index + 1) * 50) + 150, '', this.selectChallenge, this);
    button.challenge = challenge;
    text = game.add.text(0, 0, challenge.name, { font: '20px museo-sans-rounded', fill: '#FFF'});
    button.addChild(text);
  },

  selectChallenge: function(item) {
    selectedChallenge = item.challenge;
    this.start();
  },

  start: function() {
    game.state.start('play');
  }
};
