function Game(element) {
  this.element = document.getElementById(element);
  this.levels = [];
}

Game.prototype = {

  loadData: function() {
    var thisGame = this;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'api/levels');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      if (xhr.status === 200) {
        thisGame.levels = JSON.parse(xhr.responseText);
      }
    };
    xhr.send();
  },

  setScene: function(scene, opts) {
    this.element.innerHTML = "";
    if (scene.init) {
      scene.init(opts);
    }
    scene.draw();
  },

  init: function(scene) {
    console.log("Dicey!");
    this.loadData();
    this.setScene(scene)
  }
}
