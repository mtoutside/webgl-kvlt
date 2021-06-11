'use strict';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Config from './_Config';
import fragmentShader from './shader/frag.glsl';
import fragmentShader2 from './shader/frag2.glsl';
import vertexShader from './shader/vert.glsl';

const info = [
  {
    name: 'Rhino',
    text:
      'Rhinoceroses are large, herbivorous mammals identified by their characteristic horned snouts. The word "rhinoceros" comes from the Greek "rhino" (nose) and "ceros" (horn). ',
  },
  {
    name: 'Lion',
    text:
      'Lions go on the hunt for food mostly from dusk till dawn. Female lions do 85-90% of the prides hunting, whilst the male lions patrol the territory and protect the pride.',
  },
  {
    name: 'Leopard',
    text:
      'Leopards are skilled climbers, and like to rest in the branches of trees during the day. They are strong beasts, too, and can carry their heavy prey up into the trees so that pesky scavengers, such as hyenas, don’t steal their meal!',
  },
  {
    name: 'Elephant',
    text:
      'These magnificent mammals spend between 12 to 18 hours eating grass, plants and fruit every single day! They use their long trunks to smell their food and lift it up into their mouth – yum!',
  },
  {
    name: 'Giraffe',
    text:
      'Female giraffes give birth standing up. The result? Newborns are welcomed to the world with a 1.5m drop to the ground! Ouch! But these infants are quick to get on their feet – within 30 minutes they are standing, and only hours later they”re able to run with their mothers.',
  },
];

const config = {
  font: 'Josefin Sans',
  size: 16,
  h1size: 30,
  padding: 10,
  colour: '#fff',
  width: 512,
  height: 256,
  zpos: 0.005,
  planesize: { width: 1, height: 0.5 },
};

const uniforms2 = {
  u_time: { value: 0.0 },
  u_duration: { value: 2.0 },
  u_twirls: { value: 7 },
};

const material2 = new THREE.ShaderMaterial({
  uniforms: uniforms2,
  vertexShader: vertexShader,
  fragmentShader: fragmentShader2,
  transparent: true,
});

const canvasText = new CanvasText(scene, info[1], config, material2);

export default class {
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
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.set(0, 0, 90);
    this.scene.background = new THREE.Color(0x000000);
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
    this.start();
  }

  initMesh() {
    this.geometry = new THREE.PlaneGeometry(2, 1.5);
    this.uniforms = {
      u_tex_1: { value: null },
      u_tex_2: { value: null },
      u_duration: { value: 2.0 },
      u_time: { value: 0.0 },
      u_mouse: { value: { x: 0.0, y: 0.0 } },
      u_resolution: { value: { x: 0, y: 0 } },
    };

    this.material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    });

    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.plane);
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

    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.updateFunction);
  }
}
