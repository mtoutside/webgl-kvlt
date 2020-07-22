import { Scene } from 'three/src/scenes/Scene';
import { OrthographicCamera } from 'three/src/cameras/OrthographicCamera';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer';
import { Mesh } from 'three/src/objects/Mesh';
import { PlaneBufferGeometry } from 'three/src/geometries/PlaneGeometry';
import { RawShaderMaterial } from 'three/src/materials/RawShaderMaterial';
import { CanvasTexture } from 'three/src/textures/CanvasTexture';
import { LinearFilter, RGBAFormat } from 'three/src/constants';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import Config from './_Config';
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

    // リサイズイベントを設定
    window.addEventListener('resize', this.resizeFunction);

    this.scene = new Scene();
    this.camera = new OrthographicCamera(-1, 1, 1, -1, 0, -1);

    // this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    // レンダリング開始
    // 初期化
    this.init();
  }

  init() {
    this.createMesh();
    this.start();
  }

  createMesh() {
    const segment = 10;

    this.geometry = new PlaneBufferGeometry(2, 2, segment, segment);

    // テクスチャの作成
    this.texture = this.createTexture({
      text: 'KVLT',
      width: Config.width,
      height: Config.height,
      fontSize: 70,
    });

    // マテリアルの作成
    this.material = new RawShaderMaterial({
      uniforms: {
        texture: { value: this.texture },
        time: { value: 0.0 },
        tween: { value: 0.0 },
        resolution: { value: Config.aspectRatio },
        wd: { value: 0.0 },
        speed: { value: 1.0 },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: false,
    });
    console.log(this.texture);


    this.mesh = new Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);
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
    this.time = performance.now() * 0.001;

    this.material.uniforms.time.value = this.time;
    this.material.uniforms.wd.value = PARAMS.wd;
    this.material.uniforms.speed.value = PARAMS.speed;

    this.renderer.render(this.scene, this.camera);
  }
}
