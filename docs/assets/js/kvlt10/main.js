/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"kvlt10/main.js": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/kvlt10/main.js","vendor.js"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/kvlt10/Canvas/_Config.js":
/*!**************************************!*\
  !*** ./src/kvlt10/Canvas/_Config.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Config = {\n  width: 100,\n  // Canvasの幅\n  height: 100,\n  // Canvasの高さ\n  halfWidth: 50,\n  halfHeight: 50,\n  cameraZ: 500,\n  // カメラのz座標\n  dpr: 1,\n  // device pixel ratio\n  aspectRatio: 1.0 // 画面アスペクト比\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Config);\n\n//# sourceURL=webpack:///./src/kvlt10/Canvas/_Config.js?");

/***/ }),

/***/ "./src/kvlt10/Canvas/_index.js":
/*!*************************************!*\
  !*** ./src/kvlt10/Canvas/_index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Canvas; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var three_examples_jsm_loaders_OBJLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/loaders/OBJLoader */ \"./node_modules/three/examples/jsm/loaders/OBJLoader.js\");\n/* harmony import */ var _shader_frag_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shader/frag.glsl */ \"./src/kvlt10/Canvas/shader/frag.glsl\");\n/* harmony import */ var _shader_frag_glsl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shader_frag_glsl__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _shader_vert_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shader/vert.glsl */ \"./src/kvlt10/Canvas/shader/vert.glsl\");\n/* harmony import */ var _shader_vert_glsl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shader_vert_glsl__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_Config */ \"./src/kvlt10/Canvas/_Config.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\nvar Canvas = /*#__PURE__*/function () {\n  function Canvas() {\n    _classCallCheck(this, Canvas);\n\n    this.canvas = document.createElement('canvas');\n    this.ctx = this.canvas.getContext('2d');\n    this.clock = new three__WEBPACK_IMPORTED_MODULE_0__[\"Clock\"]();\n    this.container = document.getElementById('CanvasContainer');\n    this.particleIndexArray = [];\n    this.uniforms = {\n      time: {\n        type: 'f',\n        value: 0.0\n      },\n      size: {\n        type: 'f',\n        value: 10.0\n      }\n    };\n    this.setConfig();\n    this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]({\n      alpha: true,\n      antialias: true\n    });\n    this.renderer.setSize(_Config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].width, _Config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].height);\n    this.renderer.setPixelRatio(_Config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].dpr);\n    this.renderer.setClearColor(0x98339a, 1);\n    this.container.appendChild(this.renderer.domElement);\n    this.resizeFunction = this.resize.bind(this);\n    this.updateFunction = this.update.bind(this); // リサイズイベントを設定\n\n    window.addEventListener('resize', this.resizeFunction);\n    this.scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"](); // Cameraを作成\n\n    this.camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"](45, window.innerWidth / window.innerHeight, 1, 10000);\n    this.camera.position.set(0, 0, 100);\n    this.directLight = new three__WEBPACK_IMPORTED_MODULE_0__[\"DirectionalLight\"](0x888888, 1);\n    this.ambLight = new three__WEBPACK_IMPORTED_MODULE_0__[\"AmbientLight\"](0xffffff, 0.65);\n    this.directLight.position.set(1, 1, 1).normalize();\n    this.scene.add(this.directLight);\n    this.scene.add(this.ambLight);\n    this.z = Math.min(window.innerWidth, window.innerHeight);\n    this.camera.lookAt(0, 0, this.z);\n    this.controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__[\"OrbitControls\"](this.camera, this.renderer.domElement); // 初期化\n\n    this.init();\n  }\n\n  _createClass(Canvas, [{\n    key: \"setConfig\",\n    value: function setConfig() {\n      // 親要素のサイズを取得\n      var domRect = this.container.getBoundingClientRect();\n      var width = domRect.width;\n      var height = domRect.height;\n      _Config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].dpr = Math.min(window.devicePixelRatio, 2);\n      _Config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].width = width;\n      _Config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].height = height;\n      _Config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].halfWidth = _Config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].width / 2;\n      _Config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].halfHeight = _Config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].height / 2;\n      _Config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].aspectRatio = _Config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].width / _Config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].height;\n    }\n  }, {\n    key: \"resizeScene\",\n    value: function resizeScene() {\n      this.renderer.setSize(_Config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].width, _Config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].height);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.start();\n    }\n  }, {\n    key: \"initObject\",\n    value: function initObject() {\n      var _this = this;\n\n      var objLoader = new three_examples_jsm_loaders_OBJLoader__WEBPACK_IMPORTED_MODULE_2__[\"OBJLoader\"]();\n      var vertices = [];\n      var objData;\n      objLoader.load('./assets/images/skull.obj', function (root) {\n        if (root) {\n          root.rotation.x = 30;\n          root.rotation.z = 0; // this.scene.add(root);\n\n          objData = root.children[3].geometry.attributes.position.array;\n\n          for (var i = 0; i < objData.length; i++) {\n            vertices.push(objData[i]);\n          }\n\n          _this.createParticles(vertices);\n        }\n      });\n    }\n  }, {\n    key: \"createParticles\",\n    value: function createParticles(vertices) {\n      this.geometry = new three__WEBPACK_IMPORTED_MODULE_0__[\"BufferGeometry\"]();\n      this.geometry.morphAttributes = {}; // this.material = new THREE.PointsMaterial({\n      //   size: 1,\n      //   color: 0xff3b6c,\n      //   sizeAttenuation: false,\n      //   transparent: true,\n      //   depthWrite: false,\n      // });\n\n      this.material = new three__WEBPACK_IMPORTED_MODULE_0__[\"RawShaderMaterial\"]({\n        uniforms: this.uniforms,\n        vertexShader: _shader_vert_glsl__WEBPACK_IMPORTED_MODULE_4___default.a,\n        fragmentShader: _shader_frag_glsl__WEBPACK_IMPORTED_MODULE_3___default.a,\n        transparent: true,\n        depthWrite: false,\n        blending: three__WEBPACK_IMPORTED_MODULE_0__[\"AdditiveBlending\"]\n      });\n      var verticesArray = new Float32Array(vertices);\n      this.geometry.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_0__[\"BufferAttribute\"](verticesArray, 3)); // const colorsArray = new Float32Array(colors);\n      // this.geometry.addAttribute('color', new THREE.BufferAttribute(colorsArray, 3));\n\n      this.particles = new three__WEBPACK_IMPORTED_MODULE_0__[\"Points\"](this.geometry, this.material);\n      this.particles.rotation.x = 30;\n      this.particles.rotation.z = 0;\n      this.scene.add(this.particles);\n    } // mesh() {\n    //   this.geometry = new THREE.BoxGeometry(10, 10, 10);\n    //   this.material = new THREE.MeshNormalMaterial();\n    //   this.mesh = new THREE.Mesh(this.geometry, this.material);\n    //   this.scene.add(this.mesh);\n    // }\n\n  }, {\n    key: \"start\",\n    value: function start() {\n      this.initObject();\n      this.resize();\n      this.update();\n    }\n  }, {\n    key: \"resize\",\n    value: function resize() {\n      this.setConfig();\n      this.resizeScene();\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      this.clock.getDelta();\n      var t = this.clock.elapsedTime;\n      this.uniforms.time.value += 0.5;\n      var r, g, b; // video\n\n      /*\n      if (this.particles) {\n        const useCache = parseInt(t) % 2 === 0;\n        const imageData = this.getImageData(this.video, useCache);\n        let count = 0;\n         for (\n          let i = 0,\n            length = this.particles.geometry.attributes.position.array.length;\n          i < length;\n          i += 3\n        ) {\n          let index = this.particleIndexArray[count];\n          let gray =\n            (imageData.data[index] +\n              imageData.data[index + 1] +\n              imageData.data[index + 2]) /\n            3;\n          let threshold = 300;\n          if (gray < threshold) {\n            if (gray < threshold / 3) {\n              this.particles.geometry.attributes.position.array[i + 2] =\n                gray * r * 5;\n            } else if (gray < threshold / 2) {\n              this.particles.geometry.attributes.position.array[i + 2] =\n                gray * g * 5;\n            } else {\n              this.particles.geometry.attributes.position.array[i + 2] =\n                gray * b * 5;\n            }\n          } else {\n            this.particles.geometry.attributes.position.array[i + 2] = 10000;\n          }\n          count++;\n        }\n        this.uniforms.size.value = ((r + g + b) / 3) * 35 + 5;\n        this.particles.geometry.attributes.position.needsUpdate = true;\n      }\n      */\n\n      this.renderer.render(this.scene, this.camera);\n      requestAnimationFrame(this.updateFunction);\n    }\n  }]);\n\n  return Canvas;\n}();\n\n\n\n//# sourceURL=webpack:///./src/kvlt10/Canvas/_index.js?");

/***/ }),

/***/ "./src/kvlt10/Canvas/shader/frag.glsl":
/*!********************************************!*\
  !*** ./src/kvlt10/Canvas/shader/frag.glsl ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision mediump float;\\n\\n#define PI 3.141592653589\\n#define PI2 6.28318530718\\n\\nuniform float time;\\n\\n/* varying vec2 vUv; */\\n/* varying vec3 vPosition; */\\n\\nvoid main() {\\n  float t = time * 0.02;\\n  vec3 fragColor = vec3((0.1 * sin(-t)), 1.0, (0.1 * sin(t)));\\n\\n  gl_FragColor = vec4(fragColor, 1.0);\\n}\\n\"\n\n//# sourceURL=webpack:///./src/kvlt10/Canvas/shader/frag.glsl?");

/***/ }),

/***/ "./src/kvlt10/Canvas/shader/vert.glsl":
/*!********************************************!*\
  !*** ./src/kvlt10/Canvas/shader/vert.glsl ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision mediump float;\\n\\nuniform float time;\\n\\nattribute vec2 uv;\\nattribute vec3 position;\\n\\nuniform mat4 viewMatrix;\\nuniform mat4 modelViewMatrix;\\nuniform mat4 modelMatrix;\\nuniform mat4 projectionMatrix;\\n\\n/* varying vec4 vMvPosition; */\\n/* varying vec2 vUv; */\\n/* varying vec3 vPosition; */\\n\\nfloat map(float value, float inputMin, float inputMax, float outputMin, float outputMax) {\\n  return outputMin + (outputMax - outputMin) * ((value - inputMin) / (inputMax - inputMin));\\n}\\n\\nvec3 rotateVec3(vec3 p, float angle, vec3 axis){\\n  vec3 a = normalize(axis);\\n  float s = sin(angle);\\n  float c = cos(angle);\\n  float r = 1.0 - c;\\n  mat3 m = mat3(\\n    a.x * a.x * r + c,\\n    a.y * a.x * r + a.z * s,\\n    a.z * a.x * r - a.y * s,\\n    a.x * a.y * r - a.z * s,\\n    a.y * a.y * r + c,\\n    a.z * a.y * r + a.x * s,\\n    a.x * a.z * r + a.y * s,\\n    a.y * a.z * r - a.x * s,\\n    a.z * a.z * r + c\\n  );\\n  return m * p;\\n}\\nvoid main() {\\n  /* vUv = uv; */\\n  /* vPosition = position; */\\n  gl_PointSize = 1.0;\\n  float t = time * 0.02;\\n  /* position.x +=sin(t); */\\n  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\\n\\n  gl_Position = projectionMatrix * mvPosition;\\n}\\n\"\n\n//# sourceURL=webpack:///./src/kvlt10/Canvas/shader/vert.glsl?");

/***/ }),

/***/ "./src/kvlt10/main.js":
/*!****************************!*\
  !*** ./src/kvlt10/main.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Canvas_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas/_index */ \"./src/kvlt10/Canvas/_index.js\");\n\n\n(function () {\n  var cv = new _Canvas_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n})();\n\n//# sourceURL=webpack:///./src/kvlt10/main.js?");

/***/ })

/******/ });