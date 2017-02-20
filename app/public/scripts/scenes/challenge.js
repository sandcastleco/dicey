var challengeScene = new Scene();

challengeScene.dice = [];

challengeScene.init = function(opts) {
  game.currentLevel = opts.level;
  game.currentChallenge = opts.challenge;
  var levelIndex = opts.level - 1;
  var challengeIndex = opts.challenge - 1;
  this.challengeData = game.levels[levelIndex].challenges[challengeIndex];
}

challengeScene.rollDice = function(cb) {
  var thisChallenge = this;
  var apiStr = 'api/level/' + game.currentLevel + '/' + game.currentChallenge;
  var xhr = new XMLHttpRequest();
  xhr.open('GET', apiStr);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (xhr.status === 200) {
      var results = JSON.parse(xhr.responseText)
      cb(results);
    }
  };
  xhr.send();
}

challengeScene.updateTimer = function(time) {
  var timerEl = document.getElementById('timer');
  timerEl.textContent = time;
}

challengeScene.drawDice = function() {
  for (var i = 0; i < this.dice.length; i++) {
    this.dice[i].draw();
  }
}

challengeScene.draw = function() {
  var scene = this;
  var time = this.challengeData.parameters.time;
  game.element.innerHTML += "<h2>Play!</h2>";
  this.rollDice(function(results) {
    scene.dice = [];
    var dieX = -3;
    for (var i = 0; i < results.length; i++) {
      var die = new Die(results[i].type, null, dieX, 0, 10);
      dieX += 3;
      scene.dice.push(die);
      game.element.innerHTML += results[i].result + ' ';
    }

    scene.drawDice();

    game.element.innerHTML += "<p id='timer'></p>";
    // scene.updateTimer(time);
    // var timer = window.setInterval(function() {
    //   time--;
    //   if (time === 0) {
    //     window.clearInterval(timer);
    //     game.setScene(guessScene);
    //   } else {
    //     scene.updateTimer(time);
    //   }
    // }, 1000);
  });

}
