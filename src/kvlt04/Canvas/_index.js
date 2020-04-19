'use strict';

// 必要なクラスをimport
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import FloatingChars from './_fc';
import WebFontLoader from 'webfontloader';

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
  constructor(numChars, charWidth, numTexturesGridCols, textureGridSize) {
    this.numChars = numChars || 10;
    this.charWidth = charWidth || 32;
    this.numTexturesGridCols = numTexturesGridCols || 1;
    this.textureGridSize = textureGridSize || 128;
    this.animationValue1 = 1;
    this.animationValue2 = 0;
    this.animationValue3 = 0;

    // Canvasを囲う親要素を取得
    this.container = document.getElementById('CanvasContainer');

    // Configを設定
    this.setConfig();

    // レンダラを作成
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    this.renderer.setClearColor(new THREE.Color(0xffffff));
    this.renderer.setSize(Config.width, Config.height);
    this.renderer.setPixelRatio(Config.dpr);
    this.container.appendChild(this.renderer.domElement);

    // 関数をthisでバインドして持っておく
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
    this.clock = new THREE.Clock();
    // this.textex();

    this.initFloatingChars()
    .then(() => {
      this.start();
    });

    // レンダリング開始
    // this.start();
  }

  textex() {
    this.resolution = Config.width / Config.height;
    this.geometry = new THREE.PlaneGeometry(50, 50);
    this.material = new THREE.RawShaderMaterial({
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
    this.textex = new THREE.Mesh(this.geometry, this.material);
    console.log(this.textex);

    // metaballごとのSceneにmetaballを追加
    this.scene.add(this.textex);
  }

  initFloatingChars() {
    return new Promise((resolve) => {
      WebFontLoader.load({
        google: {
          families: [ 'Cabin Sketch' ]
        },
        active: () => {
          console.log('font loaded');
          this.floatingChars = new FloatingChars(
            this.numChars,
            this.charWidth,
            this.numTexturesGridCols,
            this.textureGridSize
          );

          this.floatingChars.createTexture('B', 'Cabin Sketch');
          console.log(this.floatingChars);

          this.scene.add(this.floatingChars);
          resolve();
        }
      });
    });
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

    // this.material.uniforms.u_time.value += this.clock.getDelta();
    // this.material.uniforms.u_wd.value = PARAMS.wd;
    // this.material.uniforms.u_wd2.value = PARAMS.wd2;
    // this.material.uniforms.u_speed.value = PARAMS.speed;
    this.floatingChars.update(this.camera);
    this.renderer.render(this.scene, this.camera);
  }
}
