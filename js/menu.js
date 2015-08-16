var menuState = {

  create: function() {

    var challenges = game.cache.getJSON('challenges');
    var numberOfChallenges = challenges.length;
    challengeInfo = game.add.group();

    var music = game.add.audio('theme', 1, true);
    music.play();

    var nameLabel = game.add.text(game.world.centerX - 60, 50, 'Dicey', { font: '50px Bree', fill: '#FFF'});

    for (i = 0; i < numberOfChallenges; i++) {
      challenge = challenges[i];
      this.createChallengeButton(i, challenge);
    }

    var startButton = game.add.button(80, 500, '', this.start, this);
    var startText = game.add.text(0, 0, "Let's get dicey!", { font: '30px Bree', fill: '#FFF'});
    startButton.addChild(startText);

  },

  createChallengeButton: function(index, challenge) {
    button = game.add.button(80, ((index + 1) * 50) + 100, '', this.selectChallenge, this);
    button.challenge = challenge;
    text = game.add.text(0, 0, challenge.name, { font: '20px Bree', fill: '#FFF'});
    button.addChild(text);
  },

  updateDescription: function() {
    this.clearInfo();

    var title = game.add.text(300, 150, selectedChallenge.name, { font: '20px Bree', fill: '#FFF'});
    var description = game.add.text(300, 200, selectedChallenge.description, { font: '20px Bree', fill: '#FFF'});

    challengeInfo.add(title);
    challengeInfo.add(description);
  },

  clearInfo: function() {
    challengeInfo.destroy(true, true);
  },

  selectChallenge: function(item) {
    selectedChallenge = item.challenge;
    this.updateDescription();
  },

  start: function() {
    game.state.start('play');
  }
};
