'use strict';

// 必要なクラスをimport
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import FloatingChars from './_fc';
import WebFontLoader from 'webfontloader';

import Config from './_Config';

export default class Canvas {
  constructor(
    numChars = 1000,
    charWidth = 4,
    numTextureGridCols = 16,
    textureGridSize = 128,
    fontFamily = 'Cabin Sketch'
  ) {
    this.numChars = numChars;
    this.charWidth = charWidth;
    this.numTextureGridCols = numTextureGridCols;
    this.textureGridSize = textureGridSize;
    this.fontFamily = fontFamily;
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
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
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
    this.initFloatingChars().then(() => {
      this.start();
    });
  }

  initFloatingChars() {
    return new Promise(resolve => {
      WebFontLoader.load({
        google: {
          families: [this.fontFamily],
        },
        active: () => {
          console.log('font loaded');
          this.floatingChars = new FloatingChars(
            this.numChars,
            this.charWidth,
            this.numTextureGridCols,
            this.textureGridSize
          );

          this.floatingChars.createTexture(
            '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|:;?<>,.',
            this.fontFamily
          );
          this.scene.add(this.floatingChars);
          resolve();
        },
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

    this.floatingChars.update(this.camera);
    this.renderer.render(this.scene, this.camera);
  }
}
