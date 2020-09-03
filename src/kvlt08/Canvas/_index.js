'use strict';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import fragmentShader from './shader/frag.glsl';
import vertexShader from './shader/vert.glsl';
import Config from './_Config';
// import Options from './_Options';

const options = [
  {
    word: 'WORD',
    color: '#ffffff',
    fill: '#000000',
    geometry: new THREE.TorusKnotGeometry(9, 3, 768, 3, 4, 3),
    position: [0, 0, 0],
    class: 'geo-1',
  },
  {
    word: 'POISON',
    color: '#ccffff',
    fill: '#3e64ff',
    geometry: new THREE.SphereGeometry(12, 64, 64),
    position: [20, 0, 0],
    class: 'geo-1',
  },
];

export default class Canvas {
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
    this.camera.position.set(0, 0, 50);
    this.scene.background = new THREE.Color('#000000');
    this.z = Math.min(window.innerWidth, window.innerHeight);
    this.camera.lookAt(0, 0, this.z);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

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
    this.mesh(options);
    this.start();
  }

  mesh(options) {
    for (let i = 0; i < options.length; i++) {
      this.options = {
        word: options[i].word,
        color: options[i].color,
        fill: options[i].color,
        geometry: options[i].geometry,
        position: options[i].position,
      };
      console.log(this.options);
      // テクスチャの作成
      this.texture = this.createTexture({
        text: this.options.word,
        width: Config.width,
        height: Config.height,
        fontSize: 130,
        color: this.options.fill,
      });

      this.geometry = this.options.geometry;
      this.material = new THREE.RawShaderMaterial({
        uniforms: {
          uTexture: { value: this.texture },
          time: { value: 0.0 },
          resolution: { value: Config.aspectRatio },
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        transparent: false,
        side: THREE.DoubleSide,
      });
      this.mesh = new THREE.Mesh(this.geometry, this.material);
      this.mesh.position.set(...this.options.position);
      this.mesh.rotation.set(0, 0, 0);
      this.scene.add(this.mesh);
    }
  }

  // 2D Canvasからテクスチャを作成する
  createTexture(options) {
    // Canvas要素を作成
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // measureTextするためいったん設定
    const fontFamily = 'Ubuntu Condensed';
    ctx.font = `bold ${options.fontSize * Config.dpr}px '${fontFamily}'`;
    const textWidth = ctx.measureText(options.text);

    // dprに対応したサイズを計算
    const width = textWidth.width;
    const height = options.fontSize * Config.dpr * 1.0;
    // 幅を指定
    canvas.width = width;
    canvas.height = height;

    // ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
    // ctx.fillRect(0, 0, width, height)

    // 中央にテキストを描画
    ctx.font = `bold ${options.fontSize * Config.dpr}px '${fontFamily}'`;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'hanging';
    ctx.fillStyle = options.color;
    ctx.fillText(options.text, -5, 20);

    console.log(textWidth);

    // 文字の輪郭だけ描画
    // ctx.strokeStyle = 'rgba(255, 255, 255, 1.0)'
    // ctx.strokeText(options.text.toUpperCase(), width / 2, height / 2)

    // ↓canvasの文字を確認したいとき
    // document.body.appendChild(canvas);
    // canvas.style.backgroundColor = '#933';
    // canvas.style.position = 'relative';

    // テクスチャを作成
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = false;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBAFormat;

    return texture;
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

    this.material.uniforms.time.value += 0.5;

    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.updateFunction);
  }
}
