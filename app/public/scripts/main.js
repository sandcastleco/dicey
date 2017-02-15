window.game = window.game || {};
window.canvas = window.canvas || {};

window.onload = function() {
  canvas = new Canvas();
  canvas.draw();
  
  game = new Game("main");
  game.init(home);

  var mainMenuButton = document.getElementById('main-menu');
  mainMenuButton.addEventListener("click", function(e) {
    e.preventDefault();
    game.setScene(menu);
  });
}
