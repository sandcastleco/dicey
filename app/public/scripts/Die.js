function Die(numberOfSides, color, x, y, z) {
  this.numberOfSides = numberOfSides;
  this.color = color || 0xe6c195;
  this.object = null;
  this.geom = diceGeom['d' + numberOfSides];
  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 15;
  this.init();
}

Die.prototype = {
  createShape: function() {
    var vertices = [];
    var faces = [];
    // var cv = new Array(vertices.length), cf = new Array(faces.length);
    for (var i = 0; i < this.geom.vertices.length; i++) {
      var vertex = this.geom.vertices[i];
      vertices.push(new CANNON.Vec3(vertex.x, vertex.y, vertex.z));
    }
    for (var i = 0; i < this.geom.faces.length; ++i) {
      var face = this.geom.faces[i];
      faces.push([face.a, face.b, face.c]);
    }
    return new CANNON.ConvexPolyhedron(vertices, faces);
  },

  createBody: function() {
    var shape = this.createShape();
    this.body = new CANNON.Body({
      mass: 400
    });
    this.body.addShape(shape);
    this.body.angularVelocity.set(1, 2, 1);
    this.body.angularDamping = 0.5;
    this.body.position.z = 10;
    game.canvas.world.addBody(this.body);
  },

  createMesh: function() {
    var geom = new THREE.Geometry();
    geom.vertices = this.geom.vertices;
    geom.faces = this.geom.faces;
    geom.computeFaceNormals();
    var material = new THREE.MeshPhongMaterial( { color: this.color, specular: 0x999999, shininess: 40, shading: THREE.FlatShading } );
    this.mesh = new THREE.Mesh( geom, material );
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    this.mesh.position.z = 1;
    this.mesh.rotation.y = 1;
  },

  draw: function() {
    game.canvas.scene.add(this.mesh);
    console.log('drawing d' + this.numberOfSides + '!');
  },

  init: function() {
    this.createMesh();
    this.createBody();
    this.draw();
    console.log(this.body.position.z);
    console.log(this.mesh);
  }
}
