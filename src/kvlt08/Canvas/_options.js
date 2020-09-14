import fragTorus from './shader/frag.glsl';
import fragSphere from './shader/fragSphere.glsl';
import fragBox from './shader/fragBox.glsl';
import fragPlane from './shader/fragPlane.glsl';
import vertBase from './shader/vert.glsl';
import vertBox from './shader/vertBox.glsl';
import vertPlane from './shader/vertPlane.glsl';

const options = [
  {
    word: 'INTO THE VOID ',
    color: '#ffffff',
    fill: new THREE.Color('0xC0FFEE'),
    geometry: new THREE.TorusKnotGeometry(9, 3, 768, 3, 4, 3),
    position: [0, 0, 0],
    fragmentShader: fragTorus,
    vertexShader: vertBase,
    class: 'geo-1',
  },
  {
    word: 'BLACK SABBATH ',
    color: '#cc66fa',
    fill: new THREE.Color('0xAA0066'),
    geometry: new THREE.SphereGeometry(12, 64, 64),
    position: [0, -70, 0],
    fragmentShader: fragSphere,
    vertexShader: vertBase,
    class: 'geo-2',
  },
  {
    word: 'POSESSED ',
    color: '#cc6688',
    fill: new THREE.Color('0x3e64ff'),
    geometry: new THREE.BoxGeometry(50, 10, 10, 64, 64, 64),
    position: [0, -140, 0],
    fragmentShader: fragBox,
    vertexShader: vertBox,
    class: 'geo-3',
  },
  {
    word: 'KYUSS ',
    color: '#cc6688',
    fill: '#3e64ff',
    geometry: new THREE.PlaneGeometry(27, 27, 64, 64),
    position: [0, -210, 0],
    fragmentShader: fragPlane,
    vertexShader: vertPlane,
    class: 'geo-4',
  },
];

export default options;
