var challengeScene = new Scene();

challengeScene.init = function(opts) {
  var level = opts.level - 1;
  var challenge = opts.challenge - 1;
  this.currentLevel = level + 1;
  this.currentChallenge = challenge + 1;
  this.challengeData = game.levels[level].challenges[challenge];
}

challengeScene.rollDice = function(cb) {
  var thisChallenge = this;
  var apiStr = 'api/level/' + this.currentLevel + '/' + this.currentChallenge;
  var xhr = new XMLHttpRequest();
  xhr.open('GET', apiStr);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (xhr.status === 200) {
      thisChallenge.results = JSON.parse(xhr.responseText)
      cb(thisChallenge.results);
    }
  };
  xhr.send();
}

challengeScene.draw = function() {
  game.element.innerHTML += "<h2>Play!</h2>";
  this.rollDice(function(results) {
    for (var i = 0; i < results.length; i++) {
      game.element.innerHTML += results[i].result;
    }
  });

}
