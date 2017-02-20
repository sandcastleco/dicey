window.game = window.game || {};

var dice = [];

function addNewDie(size) {
  var die = new Die(size);
  dice.push(die);
}

// why aren't shadows working on the table?!

window.onload = function() {
  game = new Game("main");
  game.init(home);

  var table = new Table();

  var mainMenuButton = document.getElementById('main-menu');
  mainMenuButton.addEventListener("click", function(e) {
    e.preventDefault();
    game.setScene(menu);
  });
}
