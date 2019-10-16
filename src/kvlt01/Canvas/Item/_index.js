'use strict';

// 必要なクラスをimport
import { Mesh } from 'three/src/objects/Mesh';
import { PlaneBufferGeometry } from 'three/src/geometries/PlaneGeometry';
import { RawShaderMaterial } from 'three/src/materials/RawShaderMaterial';
import { CanvasTexture } from 'three/src/textures/CanvasTexture';
import { LinearFilter, RGBAFormat } from 'three/src/constants';
import { TweenMax, Power3 } from 'gsap/TweenMax';

import Tweakpane from 'tweakpane';

import Config from '../_Config';

// シェーダーファイルをimport
import vertexShader from './shader/vert.glsl';
import fragmentShader from './shader/frag.glsl';

// Tweakpaneの設定
const pane = new Tweakpane();
const PARAMS = {
  wd: 10.0,
  speed: 5.0,
  fontSize: 90,
};
pane.addInput(PARAMS, 'wd', {
  label: 'wave detail!',
  min: 0.0,
  max: 20.0,
});
pane.addInput(PARAMS, 'speed', {
  min: 1.0,
  max: 50.0,
});
// Meshクラスを継承したItemクラスを作成
export default class Item extends Mesh {
  constructor(params) {
    super();

    const element = params.element; // dom要素
    const width = params.width;
    const height = params.height;
    const segment = 1;

    // Geometryの作成
    /*
      シェーダーによる演出のため、
      x方向を100分割してなめらかな曲線を作れるようにしておく
    */
    this.geometry = new PlaneBufferGeometry(width, height, segment, segment);

    // テクスチャの作成
    /*
      DOM要素が持っているtextデータとフォントサイズをここで指定する
    */
    const texture = this.createTexture({
      text: element.dataset.text,
      width: width,
      height: height,
      fontSize: 92,
    });

    // マテリアルの作成
    this.material = new RawShaderMaterial({
      uniforms: {
        texture: { value: texture },
        time: { value: 0.0 },
        tween: { value: 0.0 },
        wd: { value: 0.0 },
        speed: { value: 1.0 },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true,
    });

    // 全てのイージングを加速したり減速したりできる
    // TweenMax.globalTimeScale(0.1)

    // マウスが要素に入った時のアニメーション
    element.addEventListener('mouseenter', () => {
      const uniforms = this.material.uniforms;

      TweenMax.to(uniforms.tween, 1.0, {
        value: 1,
        ease: Power3.easeOut,
      });
    });

    // マウスが要素から離れた時のアニメーション
    element.addEventListener('mouseleave', () => {
      const uniforms = this.material.uniforms;

      TweenMax.to(uniforms.tween, 1.0, {
        value: 0,
        ease: Power3.easeOut,
      });
    });
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
    ctx.fillText(options.text.toUpperCase(), width / 2, height / 2);
    console.log(ctx);

    // 文字の輪郭だけ描画
    // ctx.strokeStyle = 'rgba(255, 255, 255, 1.0)'
    // ctx.strokeText(options.text.toUpperCase(), width / 2, height / 2)

    // テクスチャを作成
    const texture = new CanvasTexture(canvas);
    texture.needsUpdate = false;
    // 2のべき乗サイズでなくてもエラーがでなくなるようにフィルターを指定
    texture.minFilter = LinearFilter;
    texture.magFilter = LinearFilter;
    texture.format = RGBAFormat;

    return texture;
  }

  update(time) {
    // uniformを更新
    this.material.uniforms.time.value = time;
    this.material.uniforms.wd.value = PARAMS.wd;
    this.material.uniforms.speed.value = PARAMS.speed;
  }
}
