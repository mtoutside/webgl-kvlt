'use strict';

// 必要なクラスをimport
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer';

import Config from './_Config';

export default class BaseCanvas {
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
}
