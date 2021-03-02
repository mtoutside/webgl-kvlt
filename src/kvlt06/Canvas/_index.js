'use strict';

// 必要なクラスをimport
import * as THREE from 'three';
import  {Geometry}  from 'three/examples/jsm/deprecated/Geometry.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Config from './_Config';

export default class Canvas {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.clock = new THREE.Clock();
    this.container = document.getElementById('CanvasContainer');
    this.setConfig();

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    this.renderer.setSize(Config.width, Config.height);
    this.renderer.setPixelRatio(Config.dpr);
    this.container.appendChild(this.renderer.domElement);

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
    this.camera.position.set(0, 0, 1000);
    this.z = Math.min(window.innerWidth, window.innerHeight);
    this.camera.lookAt(0, 0, this.z);
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
    this.navigatorMediaDevices =
      navigator.mediaDevices ||
      (navigator.mozGetUserMedia || navigator.webkitGetUserMedia
        ? {
            getUserMedia: c => {
              return new Promise((y, n) => {
                (
                  navigator.mozGetUserMedia || navigator.webkitGetUserMedia
                ).call(navigator, c, y, n);
              });
            },
          }
        : null);

    if (this.navigatorMediaDevices) {
      this.initVideo();
    }

    this.start();
  }

  /**
   * initVideo.
   * カメラ初期化
   */
  initVideo() {
    this.video = document.getElementById('video');
    this.video.autoplay = true;

    const option = {
      video: true,
      audio: false,
    };

    navigator.mediaDevices
      .getUserMedia(option)
      .then(stream => {
        this.video.srcObject = stream;
        this.video.addEventListener('loadeddata', () => {
          this.videoWidth = this.video.videoWidth;
          this.videoHeight = this.video.videoHeight;

          this.createParticles();
        });
      })
      .catch(error => {
        console.log(error);
        // this.showAlert();
      });
  }

  createParticles() {
    const imageData = this.getImageData(this.video);
    this.geometry = new THREE.BufferGeometry();
    this.geometry.morphAttributes = {};
    this.material = new THREE.PointsMaterial({
      size: 1,
      color: 0xff3b6c,
      sizeAttenuation: false,
    });

    // 格子状にパーティクルを並べる
    for (let y = 0, height = imageData.height; y < height; y++) {
      for (let x = 0, width = imageData.width; x < width; x++) {
        const vertex = new THREE.Vector3(
          x - imageData.width / 2,
          -y + imageData.height / 2,
          0
        );
        this.geometry.vertices.push(vertex);
      }
    }

    this.particles = new THREE.Points(this.geometry, this.material);
    this.scene.add(this.particles);
  }

  getImageData(image, useCache) {
    // フレーム止まる
    if (useCache && this.imageCache) {
      return this.imageCache;
    }

    const w = image.videoWidth;
    const h = image.videoHeight;

    this.canvas.width = w;
    this.canvas.height = h;

    this.ctx.translate(w, 0);
    this.ctx.scale(-1, 1);
    this.ctx.drawImage(image, 0, 0);
    this.imageCache = this.ctx.getImageData(0, 0, w, h);

    return this.imageCache;
  }

  start() {
    this.checkFirst = true; // 初回描画判定
    this.resize();
    this.update();
  }

  resize() {
    this.setConfig();
    this.resizeScene();
  }

  update() {
    this.clock.getDelta();
    this.t = this.clock.elapsedTime * 50;
    // video
    if (this.particles) {
      this.particles.material.color.r = 1;
      this.particles.material.color.g = 1;
      this.particles.material.color.b = 1;

      const density = 2;
      const useCache = parseInt(this.t) % 2 === 0;

      const imageData = this.getImageData(this.video, useCache);

      console.log(
        (Math.floor(this.t) * imageData.width) %
          this.particles.geometry.vertices.length
      );
      const segment =
        (Math.floor(this.t) * imageData.width) %
        this.particles.geometry.vertices.length;

      // 一番最初なにも描画されないので一回だけ実行
      if (this.checkFirst) {
        for (
          let i = 0, length = this.particles.geometry.vertices.length;
          i < length;
          i++
        ) {
          const particle = this.particles.geometry.vertices[i];
          if (i % density === 0) {
            particle.z = 10000;
            continue;
          }
          let index = i * 4;
          let gray =
            (imageData.data[index] +
              imageData.data[index + 1] +
              imageData.data[index + 2]) /
            3;
          let threshold = 300;
          if (gray < threshold) {
            particle.z = gray;
          } else {
            particle.z = 10000;
          }
        }

        this.checkFirst = false;
      }

      for (
        let i = segment, length = this.particles.geometry.vertices.length;
        i < length;
        i++
      ) {
        const particle = this.particles.geometry.vertices[i];
        if (i % density === 0) {
          particle.z = 10000;
          continue;
        }
        let index = i * 4;
        let gray =
          (imageData.data[index] +
            imageData.data[index + 1] +
            imageData.data[index + 2]) /
          3;
        let threshold = 300;
        if (gray < threshold) {
          particle.z = gray;
        } else {
          particle.z = 10000;
        }
      }

      this.particles.geometry.verticesNeedUpdate = true;
    }

    requestAnimationFrame(this.updateFunction);
    this.renderer.render(this.scene, this.camera);
  }
}
