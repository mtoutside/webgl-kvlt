const options = [
  {
    word: 'WORD',
    color: '#ffffff',
    fill: '#000000',
    geometry: new THREE.TorusKnotGeometry(9, 3, 768, 3, 4, 3),
    class: 'geo-1',
  },
  {
    word: 'POISON',
    color: '#ffffff',
    fill: '#3e64ff',
    geometry: new THREE.SphereGeometry(12, 64, 64),
    class: 'geo-1',
  },
];

export default options;
