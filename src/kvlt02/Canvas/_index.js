import { Scene } from 'three/src/scenes/Scene';
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera';
import { OrthographicCamera } from 'three/src/cameras/OrthographicCamera';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer';
import { Mesh } from 'three/src/objects/Mesh';
import { PlaneBufferGeometry } from 'three/src/geometries/PlaneGeometry';
import { RawShaderMaterial } from 'three/src/materials/RawShaderMaterial';
import { CanvasTexture } from 'three/src/textures/CanvasTexture';
import { LinearFilter, RGBAFormat } from 'three/src/constants';
import { TweenMax, Power3 } from 'gsap/TweenMax';

import Config from './_Config';
// import Item from './Item/_index';

import Tweakpane from 'tweakpane';

// シェーダーファイルをimport
import vertexShader from './Item/shader/vert.glsl';
import fragmentShader from './Item/shader/frag.glsl';

// Tweakpaneの設定
const pane = new Tweakpane();
const PARAMS = {
  wd: 10.0,
  speed: 5.0,
  fontSize: 90,
};
pane.addInput(PARAMS, 'wd', {
  label: 'wave detail',
  min: 0.0,
  max: 20.0,
});
pane.addInput(PARAMS, 'speed', {
  min: 1.0,
  max: 50.0,
});

let geometry, mesh, material, camera, scene;
export default class Canvas {
  constructor() {
    this.container = document.getElementById('CanvasContainer');
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
    this.start = this.start.bind(this);

    // リサイズイベントを設定
    window.addEventListener('resize', this.resizeFunction);

    // 初期化
    this.init();
  }

  init() {
    scene = new Scene();
    // userDataに入れておく

    // Cameraを作成
    // camera = new PerspectiveCamera(
    //   60,
    //   Config.width / Config.height,
    //   0.01,
    //   10000
    // );

    camera = new OrthographicCamera(-1, 1, 1, -1, 0, -1);
    camera.position.set(0, 0, Config.cameraZ);
    // レンダリング開始

    this.createMesh();
    scene.add(mesh);
    this.start();
  }

  createMesh() {
    const segment = 1;
    let resolution = Config.width / Config.height;
    console.log(resolution);

    geometry = new PlaneBufferGeometry(
      Config.width,
      Config.height,
      segment,
      segment
    );

    // テクスチャの作成
    /*
      DOM要素が持っているtextデータとフォントサイズをここで指定する
      */
    const texture = this.createTexture({
      text: 'KVLT',
      width: Config.width,
      height: Config.height,
      fontSize: 100,
    });

    // マテリアルの作成
    material = new RawShaderMaterial({
      uniforms: {
        texture: { value: texture },
        time: { value: 0.0 },
        tween: { value: 0.0 },
        resolution: { value: resolution },
        wd: { value: 0.0 },
        speed: { value: 1.0 },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true,
    });

    mesh = new Mesh(geometry, material);
    // this.scene.add(mesh);
  }

  // 2D Canvasからテクスチャを作成する
  createTexture(options) {
    // Canvas要素を作成
    const canvas = document.createElement('canvas');
    // dprに対応したサイズを計算
    const width = options.width * Config.dpr;
    const height = options.height * Config.dpr;
    // 幅を指定
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');

    // ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
    // ctx.fillRect(0, 0, width, height)

    // 中央にテキストを描画
    ctx.font = `bold ${options.fontSize * Config.dpr}px 'Ubuntu Condensed'`;
    // ctx.font = `bold ${options.fontSize * Config.dpr}px UnifrakturCook` なぜか読み込めない
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
    ctx.fillText(options.text, width / 2, height / 2);

    // 文字の輪郭だけ描画
    // ctx.strokeStyle = 'rgba(255, 255, 255, 1.0)'
    // ctx.strokeText(options.text.toUpperCase(), width / 2, height / 2)

    // テクスチャを作成
    const texture = new CanvasTexture(canvas);
    texture.needsUpdate = false;
    texture.minFilter = LinearFilter;
    texture.magFilter = LinearFilter;
    texture.format = RGBAFormat;

    return texture;
  }

  setConfig() {
    // 親要素のサイズを取得
    const domRect = this.container.getBoundingClientRect();
    console.log(domRect)
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

  start() {
    this.resize();
    this.update();
  }

  resize() {
    this.setConfig();
    this.resizeScene();
  }

  update() {
    // 最大60fpsでレンダリングをループ
    requestAnimationFrame(this.updateFunction);
    const time = performance.now() * 0.001;

    material.uniforms.time.value = time;
    material.uniforms.wd.value = PARAMS.wd;
    material.uniforms.speed.value = PARAMS.speed;

    // camera.position.z += 0.6;
    // 今のsceneをcameraでレンダリングする
    this.renderer.render(scene, camera);
  }
}
