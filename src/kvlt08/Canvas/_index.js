'use strict';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Config from './_Config';
import Mesh from './_mesh';
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
    fill: '#000000',
    geometry: new THREE.TorusKnotGeometry(9, 3, 768, 3, 4, 3),
    position: [0, 0, 0],
    fragmentShader: fragTorus,
    vertexShader: vertBase,
    class: 'geo-1',
  },
  {
    word: 'BLACK SABBATH ',
    color: '#cc66fa',
    fill: '#3e64ff',
    geometry: new THREE.SphereGeometry(12, 64, 64),
    position: [0, -70, 0],
    fragmentShader: fragSphere,
    vertexShader: vertBase,
    class: 'geo-2',
  },
  {
    word: 'POSESSED ',
    color: '#cc6688',
    fill: '#3e64ff',
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
    position: [0, -190, 0],
    fragmentShader: fragPlane,
    vertexShader: vertPlane,
    class: 'geo-4',
  },
];

export default  class {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.clock = new THREE.Clock();
    this.container = document.getElementById('CanvasContainer');
    this.setConfig();

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    this.renderer.setSize(Config.width, Config.height);
    this.renderer.setPixelRatio(Config.dpr);
    this.container.appendChild(this.renderer.domElement);

    this.resizeFunction = this.resize.bind(this);
    this.updateFunction = this.update.bind(this);

    // リサイズイベントを設定
    window.addEventListener('resize', this.resizeFunction);

    this.scene = new THREE.Scene();
    // Cameraを作成
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    this.camera.position.set(0, 0, 90);
    this.scene.background = new THREE.Color('#000000');
    this.camera.lookAt(0, 0, 0);
    // this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    // 初期化
    this.init();
  }

  setConfig() {
    // 親要素のサイズを取得
    const domRect = this.container.getBoundingClientRect();
    const width = domRect.width;
    const height = domRect.height;

    Config.dpr = Math.min(window.devicePixelRatio, 2);
    Config.width = width;
    Config.height = height;
    Config.halfWidth = Config.width / 2;
    Config.halfHeight = Config.height / 2;
    Config.aspectRatio = Config.width / Config.height;
  }

  resizeScene() {
    this.renderer.setSize(Config.width, Config.height);
  }

  init() {
    for (let i = 0; i < options.length; i++) {
      let meshes = new Mesh(options[i], this.scene);
      meshes.init(options[i], this.scene);
      // console.log(meshes);
    }
    this.start();
  }

  start() {
    this.resize();
    this.update();
  }

  resize() {
    this.setConfig();
    this.resizeScene();
  }

  update() {
    this.clock.getDelta();

    for (let i = 0; i < this.scene.children.length; i++) {
      let obj = this.scene.children[i].material;
      // console.log(obj);
      obj.uniformsNeedUpdate = true;
      obj.uniforms.time.value += 0.5;
    }
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.updateFunction);
  }
}
