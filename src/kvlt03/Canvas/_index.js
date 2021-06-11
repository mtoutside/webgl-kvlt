'use strict';

// 必要なクラスをimport
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Mesh,
  IcosahedronGeometry,
  RawShaderMaterial,
  Clock,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// シェーダーファイルをimport
import vertexShader from './shader/vert.glsl';
import fragmentShader from './shader/frag.glsl';
/* eslint no-unused-vars: 0 */
import MyShaderChunk from './shader/MyShaderChunks';

import Config from './_Config';
import Tweakpane from 'tweakpane';

// Tweakpaneの設定
const pane = new Tweakpane();
const PARAMS = {
  wd: 10.0,
  wd2: 0.5,
  speed: 2.0,
};
pane.addInput(PARAMS, 'wd', {
  label: 'detail',
  min: 0.1,
  max: 20.0,
});
pane.addInput(PARAMS, 'wd2', {
  label: 'detail2',
  min: 0.1,
  max: 10.0,
});
pane.addInput(PARAMS, 'speed', {
  min: 0.1,
  max: 10.0,
});

export default class Canvas {
  constructor() {
    // Canvasを囲う親要素を取得
    this.container = document.getElementById('CanvasContainer');

    // Configを設定
    this.setConfig();

    // レンダラを作成
    this.renderer = new WebGLRenderer({
      alpha: true,
      antialias: false,
    });
    this.renderer.setSize(Config.width, Config.height);
    this.renderer.setPixelRatio(Config.dpr);
    this.container.appendChild(this.renderer.domElement);

    // 関数をthisでバインドして持っておく
    this.resizeFunction = this.resize.bind(this);
    this.updateFunction = this.update.bind(this);

    // リサイズイベントを設定
    window.addEventListener('resize', this.resizeFunction);

    this.scene = new Scene();
    // Cameraを作成
    this.camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.set(0, 0, 100);
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
    this.clock = new Clock();
    this.metaball();
    // レンダリング開始
    this.start();
  }

  metaball() {
    this.resolution = Config.width / Config.height;
    this.geometry = new IcosahedronGeometry(20, 4);
    this.material = new RawShaderMaterial({
      uniforms: {
        u_time: { value: 0.0 },
        // u_mouse: { value:{ x:0.0, y:0.0 }},
        u_resolution: { value: this.resolution },
        u_wd: { value: PARAMS.wd },
        u_wd2: { value: PARAMS.wd2 },
        u_speed: { value: PARAMS.speed },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      wireframe: false,
    });
    // Itemを作成
    this.metaball = new Mesh(this.geometry, this.material);

    // metaballごとのSceneにmetaballを追加
    this.scene.add(this.metaball);
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
    requestAnimationFrame(this.updateFunction);

    this.material.uniforms.u_time.value += this.clock.getDelta();
    this.material.uniforms.u_wd.value = PARAMS.wd;
    this.material.uniforms.u_wd2.value = PARAMS.wd2;
    this.material.uniforms.u_speed.value = PARAMS.speed;
    this.renderer.render(this.scene, this.camera);
  }
}
