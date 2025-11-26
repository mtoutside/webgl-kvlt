'use strict';

// 必要なクラスをimport
import { PerspectiveCamera, Scene } from 'three';

import Config from './_Config';
import BaseCanvas from './_BaseCanvas';
import Item from './Item/_index';

// BaseCanvasを継承したCanvasクラスを作成
export default class Canvas extends BaseCanvas {
  constructor() {
    super();

    this.scenes = []; // 各シーンを入れる配列
    this.items = []; // 各Itemを入れる配列
    this.numItems = 0; // Itemの数

    // 関数をthisでバインドして持っておく
    this.resizeFunction = this.resize.bind(this);
    this.updateFunction = this.update.bind(this);

    // リサイズイベントを設定
    window.addEventListener('resize', this.resizeFunction);

    // 初期化
    this.init();
  }

  init() {
    // .menu-itemを取得
    const $items = document.querySelectorAll('.menu-item');

    // $itemsをループ
    $items.forEach($item => {
      // $itemごとにSceneを作成
      const scene = new Scene();
      // userDataに入れておく
      scene.userData.element = $item;

      // $itemのサイズを取得
      const rect = $item.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      // Cameraを作成
      const camera = new PerspectiveCamera(
        this.calcViewportFov(height * 0.5),
        width / height,
        0.001,
        10000
      );
      camera.position.set(0, 0, Config.cameraZ);
      // userDataに入れておく
      scene.userData.camera = camera;

      // Itemを作成
      const item = new Item({
        element: $item,
        width: width,
        height: height,
      });

      // ItemごとのSceneにItemを追加
      scene.add(item);
      // 各配列にも追加しておく
      this.scenes.push(scene);
      this.items.push(item);
    });

    this.numItems = this.items.length;

    // レンダリング開始
    this.start();
  }

  // ターゲットの高さからFOVを計算する
  calcViewportFov(halfHeight) {
    return 2.0 * Math.atan(halfHeight / Config.cameraZ) * (180 / Math.PI);
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

    // 全てのSceneをループする
    this.renderer.setScissorTest(true);
    for (let i = 0; i < this.numItems; i++) {
      const scene = this.scenes[i];
      const camera = scene.userData.camera;
      const element = scene.userData.element;
      const rect = element.getBoundingClientRect();

      const width = rect.width;
      const height = rect.height;
      const left = rect.left;
      const bottom = Config.height - rect.bottom;

      this.items[i].update(time);

      // 各elementの座標にviewportを合わせ、描画を切り取る
      this.renderer.setViewport(left, bottom, width, height);
      this.renderer.setScissor(left, bottom, width, height);

      // 今のsceneをcameraでレンダリングする
      this.renderer.render(scene, camera);
    }
  }
}
