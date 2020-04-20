import * as THREE from 'three';
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
export default class Item extends THREE.Mesh {
  constructor(params) {
    super();

    this.element = params.element; // dom要素
    const width = params.width;
    const height = params.height;
    const segment = 1;

    this.geometry = new THREE.PlaneBufferGeometry(width, height, segment, segment);

    const texture = this.createTexture({
      text: this.element.dataset.text,
      width: width,
      height: height,
      fontSize: 65,
    });

    this.material = new THREE.RawShaderMaterial({
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

    this.element.addEventListener('pointerenter', e => {
      e.preventDefault();
      const uniforms = this.material.uniforms;

      TweenMax.to(uniforms.tween, 1.0, {
        value: 1,
        ease: Power3.easeOut,
      });
    });

    this.element.addEventListener('pointerleave', () => {
      const uniforms = this.material.uniforms;

      TweenMax.to(uniforms.tween, 1.0, {
        value: 0,
        ease: Power3.easeOut,
      });
    });

    this.is();
  }

  is() {
    const uniforms = this.material.uniforms;
    const options = {
      root: null, // root is viewport
      rootMargin: "-30% 0px", // center of viewport
      threshold: 0.5
    };

    const observer = new IntersectionObserver(addAnim, options);

      observer.observe(this.element);

    // callback function
    function addAnim(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fadeUp", "isVisible");

          TweenMax.to(uniforms.tween, 1.0, {
            value: 1,
            ease: Power3.easeOut,
          });
        } else {
          TweenMax.to(uniforms.tween, 1.0, {
            value: 0,
            ease: Power3.easeOut,
          });
        }
      });
    }
  }
  createTexture(options) {
    const canvas = document.createElement('canvas');
    const width = options.width * Config.dpr;
    const height = options.height * Config.dpr;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
    // ctx.fillRect(0, 0, width, height)

    ctx.font = `bold ${options.fontSize * Config.dpr}px 'Noto Serif JP'`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
    ctx.fillText(options.text, width / 2, height / 2);
    // console.log(ctx);

    // 文字の輪郭だけ描画
    // ctx.strokeStyle = 'rgba(255, 255, 255, 1.0)'
    // ctx.strokeText(options.text.toUpperCase(), width / 2, height / 2)

    // テクスチャを作成
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = false;
    // 2のべき乗サイズでなくてもエラーがでなくなるようにフィルターを指定
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBAFormat;

    return texture;
  }

  update(time) {
    this.material.uniforms.time.value = time;
    this.material.uniforms.wd.value = PARAMS.wd;
    this.material.uniforms.speed.value = PARAMS.speed;
  }
}
