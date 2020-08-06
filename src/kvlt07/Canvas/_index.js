'use strict';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import fragmentShader from './shader/frag.glsl';
import vertexShader from './shader/vert.glsl';
import Config from './_Config';

export default class Canvas {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.clock = new THREE.Clock();
    this.container = document.getElementById('CanvasContainer');

    this.particleIndexArray = [];
    this.uniforms = {
      time: {
        type: 'f',
        value: 0.0,
      },
      size: {
        type: 'f',
        value: 10.0,
      },
    };
    // audio
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

  hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return {
      r: parseInt(result[1], 16) / 255,
      g: parseInt(result[2], 16) / 255,
      b: parseInt(result[3], 16) / 255,
    };
  }

  createParticles() {
    const imageData = this.getImageData(this.video);
    this.geometry = new THREE.BufferGeometry();
    this.geometry.morphAttributes = {};
    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const vertices = [];
    const colors = [];

    let colorsPerFace = ['#ff4b78', '#16e36d', '#162cf8', '#2016e3'];

    const step = 3;

    // 格子状にパーティクルを並べる
    for (let y = 0, height = imageData.height; y < height; y += step) {
      for (let x = 0, width = imageData.width; x < width; x += step) {
        let index = (x + y * width) * 4;
        this.particleIndexArray.push(index);

        let gray =
          (imageData.data[index] +
            imageData.data[index + 1] +
            imageData.data[index + 2]) /
          3;
        let z = gray < 300 ? gray : 10000;
        vertices.push(x - imageData.width / 2, -y + imageData.height / 2, z);

        const rgbColor = this.hexToRgb(
          colorsPerFace[Math.floor(Math.random() * colorsPerFace.length)]
        );
        colors.push(rgbColor.r, rgbColor.g, rgbColor.b);
      }
    }

    const verticesArray = new Float32Array(vertices);
    this.geometry.addAttribute(
      'position',
      new THREE.BufferAttribute(verticesArray, 3)
    );

    const colorsArray = new Float32Array(colors);
    this.geometry.addAttribute(
      'color',
      new THREE.BufferAttribute(colorsArray, 3)
    );

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

    this.uniforms.time.value += 0.5;
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
      const useCache = parseInt(t) % 2 === 0;
      const imageData = this.getImageData(this.video, useCache);
      let count = 0;

      for (
        let i = 0,
          length = this.particles.geometry.attributes.position.array.length;
        i < length;
        i += 3
      ) {
        let index = this.particleIndexArray[count];
        let gray =
          (imageData.data[index] +
            imageData.data[index + 1] +
            imageData.data[index + 2]) /
          3;
        let threshold = 300;
        if (gray < threshold) {
          if (gray < threshold / 3) {
            this.particles.geometry.attributes.position.array[i + 2] =
              gray * r * 5;
          } else if (gray < threshold / 2) {
            this.particles.geometry.attributes.position.array[i + 2] =
              gray * g * 5;
          } else {
            this.particles.geometry.attributes.position.array[i + 2] =
              gray * b * 5;
          }
        } else {
          this.particles.geometry.attributes.position.array[i + 2] = 10000;
        }
        count++;
      }
      this.uniforms.size.value = ((r + g + b) / 3) * 35 + 5;
      this.particles.geometry.attributes.position.needsUpdate = true;
    }

    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.updateFunction);
  }
}
