var home = new Scene();

home.draw = function() {
  game.element.innerHTML += "<a id='menu' href='#'>Start</a>";
  var menuButton = document.getElementById('menu');
  menuButton.addEventListener('click', function(e) {
    e.preventDefault();
    game.setScene(menu);
  })
}
