var diceGeom = {

  d6: {
    vertices: [
      new THREE.Vector3(-1, -1, -1),
      new THREE.Vector3(1, -1, -1),
      new THREE.Vector3(1, 1, -1),
      new THREE.Vector3(-1, 1, -1),
      new THREE.Vector3(-1, -1, 1),
      new THREE.Vector3(1, -1, 1),
      new THREE.Vector3(1, 1, 1),
      new THREE.Vector3(-1, 1, 1)
    ],
    faces: [
      new THREE.Face3(3, 1, 0),
      new THREE.Face3(2, 1, 3),
      new THREE.Face3(4, 6, 7),
      new THREE.Face3(4, 5, 6),
      new THREE.Face3(0, 7, 3),
      new THREE.Face3(4, 7, 0),
      new THREE.Face3(2, 6, 1),
      new THREE.Face3(1, 6, 5),
      new THREE.Face3(7, 2, 3),
      new THREE.Face3(6, 2, 7),
      new THREE.Face3(0, 1, 4),
      new THREE.Face3(4, 1, 5)
    ]
  },

  d8: {
    vertices: [
      new THREE.Vector3(1, 0, 0),
      new THREE.Vector3(-1, 0, 0),
      new THREE.Vector3(0, 1, 0),
      new THREE.Vector3(0, -1, 0),
      new THREE.Vector3(0, 0, 1),
      new THREE.Vector3(0, 0, -1)
    ],
    faces: [
      new THREE.Face3(0, 2, 4, 1),
      new THREE.Face3(0, 4, 3, 2),
      new THREE.Face3(0, 3, 5, 3),
      new THREE.Face3(0, 5, 2, 4),
      new THREE.Face3(1, 3, 4, 5),
      new THREE.Face3(1, 4, 2, 6),
      new THREE.Face3(1, 2, 5, 7),
      new THREE.Face3(1, 5, 3, 8)
    ]
  }

};
