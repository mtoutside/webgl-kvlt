'use strict';

// 必要なクラスをimport
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

/* eslint no-unused-vars: 0 */
// import MyShaderChunk from './shader/MyShaderChunks';
import fragmentShader from './shader/frag.glsl';
import vertexShader from './shader/vert.glsl';

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
    this.scenes = [];
    // Configを設定
    this.setConfig();

    // レンダラを作成
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    this.renderer.setClearColor(new THREE.Color(0xffffff, 1));
    this.renderer.setSize(Config.width, Config.height);
    this.renderer.setPixelRatio(Config.dpr);
    this.container.appendChild(this.renderer.domElement);

    // 関数をthisでバインドして持っておく
    this.resizeFunction = this.resize.bind(this);
    this.updateFunction = this.update.bind(this);

    // リサイズイベントを設定
    window.addEventListener('resize', this.resizeFunction);

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
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    if (width !== Config.width || height !== Config.height) {
      this.renderer.setSize(width, height, false);
    }
  }

  init() {
    this.clock = new THREE.Clock();
    this.createGeo();

    // レンダリング開始
    this.start();
  }

  createGeo() {
    const content = document.getElementById('content');

    for (let i = 0; i < 35; i++) {
      this.scene = new THREE.Scene();

      let element = document.createElement('div');
      element.className = 'list-item';

      let sceneElement = document.createElement('div');
      element.appendChild(sceneElement);

      let descriptionElement = document.createElement('div');
      descriptionElement.innerText = 'Scene ' + (i + 1);
      element.appendChild(descriptionElement);

      this.scene.userData.element = sceneElement;
      content.appendChild(element);

      // Cameraを作成
      this.camera = new THREE.PerspectiveCamera(50, 1, 1, 10);
      this.camera.position.set(0, 0, 2);
      this.scene.userData.camera = this.camera;

      this.controls = new OrbitControls(
        this.scene.userData.camera,
        this.scene.userData.element
      );
      this.controls.minDistane = 2;
      this.controls.maxDistane = 5;
      this.controls.enablePan = false;
      this.controls.enableZoom = false;
      this.scene.userData.controls = this.controls;

      this.geometories = [
        new THREE.BoxBufferGeometry(1, 1, 1),
        new THREE.SphereBufferGeometry(0.5, 12, 8),
        new THREE.DodecahedronBufferGeometry(0.5),
        new THREE.CylinderBufferGeometry(0.5, 0.5, 1, 12),
      ];

      let geometoriesIndex = (this.geometories.length * Math.random()) | 0;
      this.geometry = this.geometories[geometoriesIndex];

      this.material = new THREE.MeshStandardMaterial({
        color: new THREE.Color().setHSL(Math.random(), 1, 0.75),
        roughness: 0.5,
        metalness: 0,
        flatShading: true,
      });

      this.scene.add(new THREE.Mesh(this.geometry, this.material));
      this.scene.add(new THREE.HemisphereLight(0xaaaaaa, 0x444444));

      let light = new THREE.DirectionalLight(0xffffff, 0.5);
      light.position.set(1, 1, 1);
      this.scene.add(light);
      this.scenes.push(this.scene);
    }
  }

  textex() {
    this.resolution = Config.width / Config.height;
    this.geometry = new THREE.BoxGeometry(1, 1, 1);
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
      wireframe: true,
    });
    // Itemを作成
    this.textex = new THREE.Mesh(this.geometry, this.material);
    console.log(this.textex);

    // metaballごとのSceneにmetaballを追加
    this.scene.add(this.textex);
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

    this.container.style.transform = `translate3d(0, ${window.scrollY}px, 0)`;
    this.renderer.setClearColor(0xffffff);
    this.renderer.setScissorTest(false);
    this.renderer.clear();

    this.renderer.setClearColor(0xe0e0e0);
    this.renderer.setScissorTest(true);

    this.scenes.forEach(sceneElm => {
      sceneElm.children[0].rotation.y = Date.now() * 0.001;

      let element = sceneElm.userData.element;

      let rect = element.getBoundingClientRect();

      if (
        rect.bottom < 0 ||
        rect.top > this.renderer.domElement.clientHeight ||
        rect.right < 0 ||
        rect.left > this.renderer.domElement.clientWidth
      ) {
        return;
      }

      let width = rect.right - rect.left;
      let height = rect.bottom - rect.top;
      let left = rect.left;
      let bottom = this.container.clientHeight - rect.bottom;

      this.renderer.setViewport(left, bottom, width, height);
      this.renderer.setScissor(left, bottom, width, height);

      let camera = sceneElm.userData.camera;
      this.renderer.render(sceneElm, camera);
    });
  }
}
