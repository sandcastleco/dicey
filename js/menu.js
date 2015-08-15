var menuState = {

  create: function() {

    var nameLabel = game.add.text(game.world.centerX - 60, 50, 'Dicey');
    nameLabel.font = 'Bree';
    nameLabel.fontSize = 50;
    nameLabel.fill = '#FFF';

    challengeInfo = game.add.group();
    console.log(challengeInfo);

    var challenges = game.cache.getJSON('challenges');
    var numberOfChallenges = challenges.length;

    for (i = 0; i < numberOfChallenges; i++) {
      challenge = challenges[i];
      button = game.add.button(80, ((i+1) * 50) + 100, '', this.showInfo, this);
      button.challenge = challenge;
      text = game.add.text(0, 0, challenge.name, { font: '20px Bree', fill: '#FFF'});
      button.addChild(text);
    }

    var startButton = game.add.button(80, 500, '', this.start, this);
    var startText = game.add.text(0, 0, 'Play selected mode!', { font: '30px Bree', fill: '#FFF'});
    startButton.addChild(startText);

    var music = game.add.audio('theme');
    music.loop = true;
    music.play();

  },

  showInfo: function(item) {
    challengeInfo.destroy(true, true);
    challenge = item.challenge;
    var title = game.add.text(300, 150, challenge.name, { font: '20px Bree', fill: '#FFF'});
    var description = game.add.text(300, 200, challenge.description, { font: '20px Bree', fill: '#FFF'});
    challengeInfo.add(title);
    challengeInfo.add(description);
  },

  start: function() {
    game.state.start('play');
  }
};
