function Game(element) {
  this.element = document.getElementById(element);
}

Game.prototype = {

  loadData: function() {
    var game = this;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'api/levels');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      console.log(this);
      if (xhr.status === 200) {
        game.levels = JSON.parse(xhr.responseText);
      }
    };
    xhr.send();
  },

  setScene(scene) {
    this.element.innerHTML = "";
    scene.draw();
  }
}
