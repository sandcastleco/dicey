function Table(width, height, color) {
  this.width = width || window.innerWidth;
  this.height = height || window.innerHeight;
  this.color = color || 0xffffff;
  this.init();
}

Table.prototype = {
  draw: function() {
    var planeGeometry = new THREE.PlaneGeometry( this.width, this.height, 32, 32 );
    var planeMaterial = new THREE.MeshPhongMaterial( { color: this.color } )
    var table = new THREE.Mesh( planeGeometry, planeMaterial );
    table.receiveShadow = true;
    game.canvas.scene.add( table );
  },
  init: function() {
    this.draw();
  }
}
