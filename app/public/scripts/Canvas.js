function Canvas() {

}

Canvas.prototype = {
  initWorld: function() {
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer( {antialias: true});
    this.renderer.setClearColor( 0xffffff );
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    // this.world = new CANNON.World();
    // this.world.gravity.set(0, 0, -9.82);
    // this.world.broadphase = new CANNON.NaiveBroadphase();
    // this.world.solver.iterations = 10;
  },
  initLights: function() {
    var light = new THREE.PointLight( 0xffffff, 1, 100 );
    light.position.set( 20, 0, 20 );
    light.castShadow = true;
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;
    light.shadow.camera.left = 500
    this.scene.add( light );
    var ambientLight = new THREE.AmbientLight( 0x151515 ); // soft white light
    this.scene.add( ambientLight );
  },
  initCamera: function() {
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 100);
    this.camera.position.z = 15;
    this.scene.add(this.camera);
  },
  initAction: function() {
    var canvas = this;
    function render() {
      requestAnimationFrame(render);
      canvas.renderer.render(canvas.scene, canvas.camera);
    }
    render();
  },
  draw: function() {
    this.initWorld();
    this.initLights();
    this.initCamera();
    this.initAction();
  }
}
