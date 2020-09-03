import * as THREE from 'three';
import Config from './_Config';
import fragmentShader from './shader/frag.glsl';
import vertexShader from './shader/vert.glsl';

export default class Mesh {
  init(options, scene) {
    this.options = {
      word: options.word,
      color: options.color,
      fill: options.color,
      geometry: options.geometry,
      position: options.position,
    };
    // テクスチャの作成
    this.texture = this.createTexture({
      text: this.options.word,
      width: Config.width,
      height: Config.height,
      fontSize: 130,
      color: this.options.fill,
    });
    this.scene = scene;

    this.create();
  }

  create() {
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

    // console.log(textWidth);

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
}
