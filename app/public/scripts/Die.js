function Die(numberOfSides, color, x, y, z) {
  this.numberOfSides = numberOfSides;
  this.color = color || 0xe6c195;
  this.object = null;
  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;
  this.init();
}

Die.prototype = {
  createMesh: function() {
    var geom = new THREE.Geometry();
    var dieGeom = diceGeom['d' + this.numberOfSides];
    geom.vertices = dieGeom.vertices;
    geom.faces = dieGeom.faces;
    geom.computeFaceNormals();
    var material = new THREE.MeshLambertMaterial( { color: this.color });
    this.object = new THREE.Mesh( geom, material );
    console.log(this.x);
    this.object.position.x = this.x;
    console.log(this.object.position);
  },

  draw: function() {
    canvas.scene.add(this.object);
    console.log('drawing d' + this.numberOfSides + '!');
  },

  init: function() {
    this.createMesh();
  }
}
