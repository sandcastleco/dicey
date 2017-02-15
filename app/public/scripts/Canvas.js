function Canvas() {

}

Canvas.prototype = {
  draw: function() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    this.renderer = new THREE.WebGLRenderer( {antialias: true});
    this.renderer.setClearColor( 0xffffff );
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    var dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(100, 100, 50);
    this.scene.add(dirLight);
    var dirLightTwo = new THREE.DirectionalLight(0xffffff, 0.5);
    dirLightTwo.position.set(-100, -100, 50);
    this.scene.add(dirLightTwo);

    this.camera.position.z = 5;

    var canvas = this;
    function render() {
      requestAnimationFrame(render);
      canvas.renderer.render(canvas.scene, canvas.camera);
    }

    render();


  }
}
