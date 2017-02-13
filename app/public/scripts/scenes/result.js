var resultScene = new Scene();

resultScene.init = function(opts) {
  this.win = opts.win;
}

resultScene.draw = function() {
  game.element.innerHTML += "<h2>Result!</h2>";
  if (this.win) {
    game.element.innerHTML += "<h3>Correct!</h3>";
  } else {
    game.element.innerHTML += "<h3>Nope...</h3>";
  }
  document.cookie = "diceyRes=null";
}
