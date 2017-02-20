window.game = window.game || {};

var dice = [];

function addNewDie(size) {
  var die = new Die(size);
  dice.push(die);
}

window.onload = function() {
  game = new Game("main");
  game.init(home);

  var table = new Table();

  var mainMenuButton = document.getElementById('main-menu');
  mainMenuButton.addEventListener("click", function(e) {
    e.preventDefault();
    game.setScene(menu);
  });

  var diceButtons = document.getElementsByClassName('dice-button');
  for (var i = 0; i < diceButtons.length; i++) {
    diceButtons[i].addEventListener('click', function() {
      addNewDie(this.dataset.type);
    });
  }
}
