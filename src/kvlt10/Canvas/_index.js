import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
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

    this.setConfig();

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    this.renderer.setSize(Config.width, Config.height);
    this.renderer.setPixelRatio(Config.dpr);
    this.renderer.setClearColor(0x98339a, 1);
    this.container.appendChild(this.renderer.domElement);

    this.resizeFunction = this.resize.bind(this);
    this.updateFunction = this.update.bind(this);

    // リサイズイベントを設定
    window.addEventListener('resize', this.resizeFunction);

    this.scene = new THREE.Scene();
    // Cameraを作成
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.set(0, 0, 100);
    this.directLight = new THREE.DirectionalLight(0x888888, 1);
    this.ambLight = new THREE.AmbientLight(0xffffff, 0.65);
    this.directLight.position.set(1, 1, 1).normalize();
    this.scene.add(this.directLight);
    this.scene.add(this.ambLight);
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
    this.start();
  }

  initObject() {
    const objLoader = new OBJLoader();
    const vertices = [];
    let objData;
    objLoader.load('./assets/images/skull.obj', root => {
      if (root) {
        root.rotation.x = 30;
        root.rotation.z = 0;
        // this.scene.add(root);
        objData = root.children[3].geometry.attributes.position.array;
        for (let i = 0; i < objData.length; i++) {
          vertices.push(objData[i]);
        }
        this.createParticles(vertices);
      }
    });
  }

  createParticles(vertices) {
    this.geometry = new THREE.BufferGeometry();
    this.geometry.morphAttributes = {};
    // this.material = new THREE.PointsMaterial({
    //   size: 1,
    //   color: 0xff3b6c,
    //   sizeAttenuation: false,
    //   transparent: true,
    //   depthWrite: false,
    // });

    this.material = new THREE.RawShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const verticesArray = new Float32Array(vertices);
    this.geometry.setAttribute('position', new THREE.BufferAttribute(verticesArray, 3));

    // const colorsArray = new Float32Array(colors);
    // this.geometry.addAttribute('color', new THREE.BufferAttribute(colorsArray, 3));

    this.particles = new THREE.Points(this.geometry, this.material);
    this.particles.rotation.x = 30;
    this.particles.rotation.z = 0;
    this.scene.add(this.particles);
  }

  // mesh() {
  //   this.geometry = new THREE.BoxGeometry(10, 10, 10);
  //   this.material = new THREE.MeshNormalMaterial();
  //   this.mesh = new THREE.Mesh(this.geometry, this.material);
  //   this.scene.add(this.mesh);
  // }

  start() {
    this.initObject();
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

    // video
    /*
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
    */
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.updateFunction);
  }
}
