var resultScene = new Scene();

resultScene.init = function(opts) {
  this.win = opts.win;
}

resultScene.draw = function() {
  game.element.innerHTML += "<h2>Result!</h2>";
  if (this.win) {
    game.element.innerHTML += "<h3>Correct!</h3>";
    var level = game.levels[game.currentLevel - 1];
    if (game.currentLevel == game.levels.length && game.currentChallenge == level.challenges.length) {
      game.element.innerHTML += "<p>End of challenges!</p>";
    } else {
      game.element.innerHTML += "<button id='next'>Next challenge</button>";
    }
  } else {
    game.element.innerHTML += "<h3>Nope...</h3>";
    game.element.innerHTML += "<button id='next'>Try again</button>";
  }
  document.cookie = "diceyRes=null";

  var nextButton = document.getElementById("next");
  nextButton.addEventListener("click", function(e) {
    console.log('test');
    e.preventDefault();
    var level = game.levels[game.currentLevel - 1];
    var nextLevel = game.currentLevel;
    var nextChallenge = game.currentChallenge;
    if (resultScene.win) {
      if (game.currentChallenge == level.challenges.length) {
        if (game.currentLevel == game.levels.length) {
          game.setScene(menu);
        } else {
          nextLevel = parseInt(game.currentLevel) + 1;
          nextChallenge = 1;
        }
      } else {
        nextLevel = game.currentLevel;
        nextChallenge = parseInt(game.currentChallenge) + 1;
      }
    }

    game.setScene(challengeScene, {
      level: nextLevel,
      challenge: nextChallenge
    });
  })
}
