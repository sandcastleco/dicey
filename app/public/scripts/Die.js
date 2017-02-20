function Die(numberOfSides, color, x, y, z) {
  this.numberOfSides = numberOfSides;
  this.color = color || 0xe6c195;
  this.object = null;
  this.geom = diceGeom['d' + numberOfSides];
  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 10;
  this.init();
}

// var canvas = document.createElement("canvas");
// var context = canvas.getContext("2d");
// canvas.width = canvas.height = 2;
// context.shadowColor = "#000";
// context.shadowBlur = 7;
// context.fillStyle = "orange";
// context.font = "30pt arial bold";
// context.fillText('Test', 10, 64);
//
// var xm = new THREE.MeshBasicMaterial({ map: new THREE.Texture(x), transparent: true });
// xm.map.needsUpdate = true;
//
// var mesh = new THREE.Mesh(new THREE.CubeGeometry(150, 150, 150), xm);
// mesh.position.x = -400;
// mesh.position.y = 0;
// mesh.position.z = 0;
// mesh.doubleSided = true;
// scene.add(mesh);
//
// function calc_texture_size(approx) {
//     return Math.pow(2, Math.floor(Math.log(approx) / Math.log(2)));
// }
// function createTextTexture(color, back_color) {
//     var canvas = document.createElement("canvas");
//     var context = canvas.getContext("2d");
//     var ts = calc_texture_size(25 + 25 * 2 * 1) * 2;
//     canvas.width = canvas.height = ts;
//     context.font = ts / (1 + 2 * 1) + "pt Arial";
//     context.fillStyle = 0xe6c195;
//     context.fillRect(0, 0, canvas.width, canvas.height);
//     context.textAlign = "center";
//     context.textBaseline = "middle";
//     context.fillStyle = '#aaaaaa';
//     context.fillText("5", canvas.width / 2, canvas.height / 2);
//     // if (text == '6' || text == '9') {
//     //     context.fillText('  .', canvas.width / 2, canvas.height / 2);
//     // }
//     var texture = new THREE.Texture(canvas);
//     texture.needsUpdate = true;
//     return texture;
// }
// var materials = [];
// var labels = [' ', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
// for (var i = 0; i < labels.length; ++i) {
//   var material = new THREE.MeshPhongMaterial(
//     $t.copyto(this.material_options,
//     { map: createTextTexture(labels[i] })));
//   materials.push(material);
// }
//
// return materials;

Die.prototype = {
  createShape: function() {
    var vertices = [];
    var faces = [];
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
    this.body.position.x = this.x;
    this.body.position.y = this.y;
    this.body.position.z = this.z;
    game.canvas.world.addBody(this.body);
  },

  createMesh: function() {
    var geom = new THREE.Geometry();
    geom.vertices = this.geom.vertices;
    geom.faces = this.geom.faces;
    geom.computeFaceNormals();

    // var canvas = document.createElement("canvas");
    // var context = canvas.getContext("2d");
    // canvas.width = canvas.height = 128;
    // // context.fillStyle = "#FFFFFF";
    // // context.fillRect(0, 0, canvas.width, canvas.height);
    // context.textAlign = "center";
    // context.textBaseline = "middle";
    // context.fillStyle = '#FFFFFF';
    // context.font = "40pt arial bold";
    // context.fillText('?', 10, 64);
    //
    // var texture = new THREE.Texture(canvas);
    // texture.needsUpdate = true;
    // var material = new THREE.MeshBasicMaterial({ map: texture });
    var material = new THREE.MeshPhongMaterial({ color: this.color, specular: 0x999999, shininess: 40, shading: THREE.FlatShading });
    this.mesh = new THREE.Mesh( geom, material );
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    this.mesh.position.x = this.x;
    this.mesh.position.y = this.y;
    this.mesh.position.z = this.z;
  },

  draw: function() {
    game.canvas.scene.add(this.mesh);
  },

  init: function() {
    this.createMesh();
    this.createBody();
    this.draw();
  }
}
