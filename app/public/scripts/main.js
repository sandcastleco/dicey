window.game = window.game || {};

window.onload = function() {
  game = new Game("main");
  game.init(home);

  var mainMenuButton = document.getElementById('main-menu');
  mainMenuButton.addEventListener("click", function(e) {
    e.preventDefault();
    game.setScene(menu);
  });
}
