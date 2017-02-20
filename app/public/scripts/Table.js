function Table(width, height, color) {
  this.width = width || window.innerWidth;
  this.height = height || window.innerHeight;
  this.color = color || 0xffffff;
  this.init();
}

Table.prototype = {
  createBody: function() {
    var groundBody = new CANNON.Body({
      mass: 0
    });
    var groundShape = new CANNON.Plane();
    groundBody.addShape(groundShape);
    game.canvas.world.addBody(groundBody);
  },
  draw: function() {
    var planeGeometry = new THREE.PlaneGeometry( this.width, this.height, 32, 32 );
    var planeMaterial = new THREE.MeshPhongMaterial( { color: this.color } )
    var table = new THREE.Mesh( planeGeometry, planeMaterial );
    table.receiveShadow = true;
    game.canvas.scene.add( table );
  },
  init: function() {
    this.createBody();
    this.draw();
  }
}
