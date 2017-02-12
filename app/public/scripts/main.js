(function() {
  console.log("Dicey!");
  var game;
  var home = new Scene();
  var menu = new Scene();
  var challengeScene = new Scene();
  var guessScene = new Scene();
  var resultScene = new Scene();

  home.draw = function() {
    game.element.innerHTML += "<a id='menu' href='#'>Start</a>";
    var menuButton = document.getElementById('menu');
    menuButton.addEventListener('click', function(e) {
      e.preventDefault();
      game.setScene(menu);
    })
  }

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
        game.setScene(challengeScene);
      })
    }
  }

  challengeScene.draw = function() {
    game.element.innerHTML += "<h2>Play!</h2>";
  }

  guessScene.draw = function() {
    game.element.innerHTML += "<h2>Guess!</h2>";
  }

  resultScene.draw = function() {
    game.element.innerHTML += "<h2>Result!</h2>";
  }

  window.onload = function() {
    game = new Game("main");
    game.loadData();
    game.setScene(home);

    var mainMenuButton = document.getElementById('main-menu');
    mainMenuButton.addEventListener("click", function(e) {
      e.preventDefault();
      game.setScene(menu);
    });

  }

})();
