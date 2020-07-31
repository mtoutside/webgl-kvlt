'use strict';

// 必要なクラスをimport
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Config from './_Config';

export default class Canvas {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.clock = new THREE.Clock();
    this.container = document.getElementById('CanvasContainer');
    this.fftSize = 2048;
    this.frequencyRange = {
      bass: [20, 140],
      lowMid: [140, 400],
      mid: [400, 2600],
      highMid: [2600, 5200],
      treble: [5200, 14000],
    };
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
    this.camera.position.set(0, 0, 100);
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
      this.initAudio();
      this.initVideo();
    }

    this.start();
  }

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

  initAudio() {
    const audioListener = new THREE.AudioListener();
    this.audio = new THREE.Audio(audioListener);

    // loader
    const audioLoader = new THREE.AudioLoader();
    audioLoader.load('assets/audio/above-the-clouds.mp3', buffer => {
      this.audio.setBuffer(buffer);
      this.audio.setLoop(true);
      this.audio.setVolume(0.5);
      this.audio.play();
    });

    // analyser
    this.analyser = new THREE.AudioAnalyser(this.audio, this.fftSize);

    /*
    document.body.addEventListener('click', () => {
      if (this.audio) {
        if (this.audio.isPlaying) {
          this.audio.pause();
        } else {
          this.audio.play();
        }
      }
    });
    */
  }

  createParticles() {
    const imageData = this.getImageData(this.video);
    this.geometry = new THREE.Geometry();
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

  /**
   * https://github.com/processing/p5.js-sound/blob/v0.14/lib/p5.sound.js#L1765
   *
   * @param data
   * @param _frequencyRange
   * @returns {number} 0.0 ~ 1.0
   */
  getFrequencyRangeValue(data, _frequencyRange) {
    const nyquist = 48000 / 2;
    const lowIndex = Math.round((_frequencyRange[0] / nyquist) * data.length);
    const highIndex = Math.round((_frequencyRange[1] / nyquist) * data.length);
    let total = 0;
    let numFrequencies = 0;

    for (let i = lowIndex; i <= highIndex; i++) {
      total += data[i];
      numFrequencies += 1;
    }
    return total / numFrequencies / 255;
  }

  mesh() {
    this.geometry = new THREE.BoxGeometry(10, 10, 10);
    this.material = new THREE.MeshNormalMaterial();
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);
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
    this.clock.getDelta();
    const t = this.clock.elapsedTime;

    let r, g, b;

    // audio
    if (this.analyser) {
      const data = this.analyser.getFrequencyData();

      const bass = this.getFrequencyRangeValue(data, this.frequencyRange.bass);
      const mid = this.getFrequencyRangeValue(data, this.frequencyRange.mid);
      const treble = this.getFrequencyRangeValue(
        data,
        this.frequencyRange.treble
      );

      r = bass;
      g = mid;
      b = treble;
    }

    // video
    if (this.particles) {
      this.particles.material.color.r = 1 - r;
      this.particles.material.color.g = 1 - g;
      this.particles.material.color.b = 1 - b;

      const density = 2;
      const useCache = parseInt(t) % 2 === 0;
      const imageData = this.getImageData(this.video, useCache);
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
          if (gray < threshold / 3) {
            particle.z = gray * r * 5;
          } else if (gray < threshold / 2) {
            particle.z = gray * g * 5;
          } else {
            particle.z = gray * b * 5;
          }
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
