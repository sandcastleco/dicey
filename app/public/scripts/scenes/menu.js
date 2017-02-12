var menu = new Scene();

menu.draw = function() {
  game.element.innerHTML += "<h2>Menu</h2>";
  for (var i = 0; i < game.levels.length; i++) {
    var level = game.levels[i];
    game.element.innerHTML += "<h3>" + level.name + "</h3>";
    var listStr = "<ul>";
    for (var j = 0; j < level.challenges.length; j++) {
      var challenge = level.challenges[j];
      listStr += "<li><a class='challenge' data-level='" + level.id + "' data-challenge='" + challenge.id + "' href='#'>Challenge " + challenge.id + "</a></li>";
    }
    listStr += "</ul>"
    game.element.innerHTML += listStr;
  }

  var challenges = document.getElementsByClassName('challenge');

  for (var i = 0; i < challenges.length; i++) {
    challenges[i].addEventListener("click", function(e) {
      e.preventDefault();
      game.setScene(challengeScene, {
        level: this.dataset.level,
        challenge: this.dataset.challenge
      });
    })
  }
}
