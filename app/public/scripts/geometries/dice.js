var t = (1 + Math.sqrt(5)) / 2;

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
  },

  d20: {
    vertices: [
      new THREE.Vector3(-1, t, 0),
      new THREE.Vector3(1, t, 0 ),
      new THREE.Vector3(-1, -t, 0),
      new THREE.Vector3(1, -t, 0),
      new THREE.Vector3(0, -1, t),
      new THREE.Vector3(0, 1, t),
      new THREE.Vector3(0, -1, -t),
      new THREE.Vector3(0, 1, -t),
      new THREE.Vector3(t, 0, -1),
      new THREE.Vector3(t, 0, 1),
      new THREE.Vector3(-t, 0, -1),
      new THREE.Vector3(-t, 0, 1)
    ],
    faces: [
      new THREE.Face3(0, 11, 5, 1),
      new THREE.Face3(0, 5, 1, 2),
      new THREE.Face3(0, 1, 7, 3),
      new THREE.Face3(0, 7, 10, 4),
      new THREE.Face3(0, 10, 11, 5),
      new THREE.Face3(1, 5, 9, 6),
      new THREE.Face3(5, 11, 4, 7),
      new THREE.Face3(11, 10, 2, 8),
      new THREE.Face3(10, 7, 6, 9),
      new THREE.Face3(7, 1, 8, 10),
      new THREE.Face3(3, 9, 4, 11),
      new THREE.Face3(3, 4, 2, 12),
      new THREE.Face3(3, 2, 6, 13),
      new THREE.Face3(3, 6, 8, 14),
      new THREE.Face3(3, 8, 9, 15),
      new THREE.Face3(4, 9, 5, 16),
      new THREE.Face3(2, 4, 11, 17),
      new THREE.Face3(6, 2, 10, 18),
      new THREE.Face3(8, 6, 7, 19),
      new THREE.Face3(9, 8, 1, 20)
    ]
  }

};
