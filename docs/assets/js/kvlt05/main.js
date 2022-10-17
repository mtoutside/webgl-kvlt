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
/******/ 		"kvlt05/main.js": 0
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
/******/ 	deferredModules.push(["./src/kvlt05/main.js","vendor.js"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/kvlt05/Canvas/_Config.js":
/*!**************************************!*\
  !*** ./src/kvlt05/Canvas/_Config.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Config = {\n  width: 100,\n  // Canvasの幅\n  height: 100,\n  // Canvasの高さ\n  halfWidth: 50,\n  halfHeight: 50,\n  cameraZ: 500,\n  // カメラのz座標\n  dpr: 1,\n  // device pixel ratio\n  aspectRatio: 1.0 // 画面アスペクト比\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Config);\n\n//# sourceURL=webpack:///./src/kvlt05/Canvas/_Config.js?");

/***/ }),

/***/ "./src/kvlt05/Canvas/_index.js":
/*!*************************************!*\
  !*** ./src/kvlt05/Canvas/_index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Canvas; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _shader_frag_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shader/frag.glsl */ \"./src/kvlt05/Canvas/shader/frag.glsl\");\n/* harmony import */ var _shader_frag_glsl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shader_frag_glsl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shader_vert_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shader/vert.glsl */ \"./src/kvlt05/Canvas/shader/vert.glsl\");\n/* harmony import */ var _shader_vert_glsl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shader_vert_glsl__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_Config */ \"./src/kvlt05/Canvas/_Config.js\");\n/* harmony import */ var tweakpane__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tweakpane */ \"./node_modules/tweakpane/dist/tweakpane.js\");\n/* harmony import */ var tweakpane__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tweakpane__WEBPACK_IMPORTED_MODULE_5__);\n // 必要なクラスをimport\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n/* eslint no-unused-vars: 0 */\n// import MyShaderChunk from './shader/MyShaderChunks';\n\n\n\n\n // Tweakpaneの設定\n\nvar pane = new tweakpane__WEBPACK_IMPORTED_MODULE_5___default.a();\nvar PARAMS = {\n  wd: 10.0,\n  wd2: 0.5,\n  speed: 2.0\n};\npane.addInput(PARAMS, 'wd', {\n  label: 'detail',\n  min: 0.1,\n  max: 20.0\n});\npane.addInput(PARAMS, 'wd2', {\n  label: 'detail2',\n  min: 0.1,\n  max: 10.0\n});\npane.addInput(PARAMS, 'speed', {\n  min: 0.1,\n  max: 10.0\n});\n\nvar Canvas = /*#__PURE__*/function () {\n  function Canvas() {\n    _classCallCheck(this, Canvas);\n\n    // Canvasを囲う親要素を取得\n    this.container = document.getElementById('CanvasContainer');\n    this.scenes = []; // Configを設定\n\n    this.setConfig(); // レンダラを作成\n\n    this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]({\n      alpha: true,\n      antialias: true\n    });\n    this.renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](0xffffff, 1));\n    this.renderer.setSize(_Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].width, _Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].height);\n    this.renderer.setPixelRatio(_Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].dpr);\n    this.container.appendChild(this.renderer.domElement); // 関数をthisでバインドして持っておく\n\n    this.resizeFunction = this.resize.bind(this);\n    this.updateFunction = this.update.bind(this); // リサイズイベントを設定\n\n    window.addEventListener('resize', this.resizeFunction); // 初期化\n\n    this.init();\n  }\n\n  _createClass(Canvas, [{\n    key: \"setConfig\",\n    value: function setConfig() {\n      // 親要素のサイズを取得\n      var domRect = this.container.getBoundingClientRect();\n      var width = domRect.width;\n      var height = domRect.height;\n      _Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].dpr = Math.min(window.devicePixelRatio, 2);\n      _Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].width = width;\n      _Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].height = height;\n      _Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].halfWidth = _Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].width / 2;\n      _Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].halfHeight = _Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].height / 2;\n      _Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].aspectRatio = _Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].width / _Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].height;\n    }\n  }, {\n    key: \"resizeScene\",\n    value: function resizeScene() {\n      var width = this.container.clientWidth;\n      var height = this.container.clientHeight;\n\n      if (width !== _Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].width || height !== _Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].height) {\n        this.renderer.setSize(width, height, false);\n      }\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.clock = new three__WEBPACK_IMPORTED_MODULE_0__[\"Clock\"]();\n      this.createGeo(); // レンダリング開始\n\n      this.start();\n    }\n  }, {\n    key: \"createGeo\",\n    value: function createGeo() {\n      var content = document.getElementById('content');\n\n      for (var i = 0; i < 35; i++) {\n        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\n        var element = document.createElement('div');\n        element.className = 'list-item';\n        var sceneElement = document.createElement('div');\n        element.appendChild(sceneElement);\n        var descriptionElement = document.createElement('div');\n        descriptionElement.innerText = 'Scene ' + (i + 1);\n        element.appendChild(descriptionElement);\n        this.scene.userData.element = sceneElement;\n        content.appendChild(element); // Cameraを作成\n\n        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"](50, 1, 1, 10);\n        this.camera.position.set(0, 0, 2);\n        this.scene.userData.camera = this.camera;\n        this.controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__[\"OrbitControls\"](this.scene.userData.camera, this.scene.userData.element);\n        this.controls.minDistane = 2;\n        this.controls.maxDistane = 5;\n        this.controls.enablePan = false;\n        this.controls.enableZoom = false;\n        this.scene.userData.controls = this.controls;\n        this.geometories = [new three__WEBPACK_IMPORTED_MODULE_0__[\"BoxBufferGeometry\"](1, 1, 1), new three__WEBPACK_IMPORTED_MODULE_0__[\"SphereBufferGeometry\"](0.5, 12, 8), new three__WEBPACK_IMPORTED_MODULE_0__[\"DodecahedronBufferGeometry\"](0.5), new three__WEBPACK_IMPORTED_MODULE_0__[\"CylinderBufferGeometry\"](0.5, 0.5, 1, 12)];\n        var geometoriesIndex = this.geometories.length * Math.random() | 0;\n        this.geometry = this.geometories[geometoriesIndex];\n        this.material = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshStandardMaterial\"]({\n          color: new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"]().setHSL(Math.random(), 1, 0.75),\n          roughness: 0.5,\n          metalness: 0,\n          flatShading: true\n        });\n        this.scene.add(new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](this.geometry, this.material));\n        this.scene.add(new three__WEBPACK_IMPORTED_MODULE_0__[\"HemisphereLight\"](0xaaaaaa, 0x444444));\n        var light = new three__WEBPACK_IMPORTED_MODULE_0__[\"DirectionalLight\"](0xffffff, 0.5);\n        light.position.set(1, 1, 1);\n        this.scene.add(light);\n        this.scenes.push(this.scene);\n      }\n    }\n  }, {\n    key: \"textex\",\n    value: function textex() {\n      this.resolution = _Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].width / _Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].height;\n      this.geometry = new three__WEBPACK_IMPORTED_MODULE_0__[\"BoxGeometry\"](1, 1, 1);\n      this.material = new three__WEBPACK_IMPORTED_MODULE_0__[\"RawShaderMaterial\"]({\n        uniforms: {\n          u_time: {\n            value: 0.0\n          },\n          // u_mouse: { value:{ x:0.0, y:0.0 }},\n          u_resolution: {\n            value: this.resolution\n          },\n          u_wd: {\n            value: PARAMS.wd\n          },\n          u_wd2: {\n            value: PARAMS.wd2\n          },\n          u_speed: {\n            value: PARAMS.speed\n          }\n        },\n        vertexShader: _shader_vert_glsl__WEBPACK_IMPORTED_MODULE_3___default.a,\n        fragmentShader: _shader_frag_glsl__WEBPACK_IMPORTED_MODULE_2___default.a,\n        wireframe: true\n      }); // Itemを作成\n\n      this.textex = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](this.geometry, this.material);\n      console.log(this.textex); // metaballごとのSceneにmetaballを追加\n\n      this.scene.add(this.textex);\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      this.resize();\n      this.update();\n    }\n  }, {\n    key: \"resize\",\n    value: function resize() {\n      this.setConfig();\n      this.resizeScene();\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      var _this = this;\n\n      requestAnimationFrame(this.updateFunction);\n      this.container.style.transform = \"translate3d(0, \".concat(window.scrollY, \"px, 0)\");\n      this.renderer.setClearColor(0xffffff);\n      this.renderer.setScissorTest(false);\n      this.renderer.clear();\n      this.renderer.setClearColor(0xe0e0e0);\n      this.renderer.setScissorTest(true);\n      this.scenes.forEach(function (sceneElm) {\n        sceneElm.children[0].rotation.y = Date.now() * 0.001;\n        var element = sceneElm.userData.element;\n        var rect = element.getBoundingClientRect();\n\n        if (rect.bottom < 0 || rect.top > _this.renderer.domElement.clientHeight || rect.right < 0 || rect.left > _this.renderer.domElement.clientWidth) {\n          return;\n        }\n\n        var width = rect.right - rect.left;\n        var height = rect.bottom - rect.top;\n        var left = rect.left;\n        var bottom = _this.container.clientHeight - rect.bottom;\n\n        _this.renderer.setViewport(left, bottom, width, height);\n\n        _this.renderer.setScissor(left, bottom, width, height);\n\n        var camera = sceneElm.userData.camera;\n\n        _this.renderer.render(sceneElm, camera);\n      });\n    }\n  }]);\n\n  return Canvas;\n}();\n\n\n\n//# sourceURL=webpack:///./src/kvlt05/Canvas/_index.js?");

/***/ }),

/***/ "./src/kvlt05/Canvas/shader/frag.glsl":
/*!********************************************!*\
  !*** ./src/kvlt05/Canvas/shader/frag.glsl ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision mediump float;\\n\\n#define PI 3.141592653589\\n#define PI2 6.28318530718\\n\\nuniform vec2 u_mouse;\\nuniform vec2 u_resolution;\\nuniform float u_time;\\nuniform sampler2D txtTexture;\\n\\nvarying vec2 vUv;\\nvarying vec4 vColor;\\n\\nvoid main() {\\n  vec2 uv = vUv;\\n  vec4 color = texture2D(txtTexture, uv) * vColor;\\n  gl_FragColor = color;\\n}\\n\"\n\n//# sourceURL=webpack:///./src/kvlt05/Canvas/shader/frag.glsl?");

/***/ }),

/***/ "./src/kvlt05/Canvas/shader/vert.glsl":
/*!********************************************!*\
  !*** ./src/kvlt05/Canvas/shader/vert.glsl ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision mediump float;\\n\\nuniform mat4 modelViewMatrix;\\nuniform mat4 modelMatrix;\\nuniform mat4 projectionMatrix;\\nuniform vec3 cameraPosition;\\nuniform float u_time;\\nuniform float u_wd;\\nuniform float u_wd2;\\nuniform float u_speed;\\n\\nattribute vec3 position;\\nattribute vec3 normal;\\nattribute vec2 uv;\\n\\nvarying vec2 vUv;\\nvarying vec4 vColor;\\n\\nconst float PI = 3.1415926535897932384626433832795;\\nconst float radius = 60.0;\\n\\nfloat map(float value, float inputMin, float inputMax, float outputMin, float outputMax, bool clamp) {\\n  if(clamp == true) {\\n    if(value < inputMin) return outputMin;\\n    if(value > inputMax) return outputMax;\\n  }\\n\\n  float p = (outputMax - outputMin) / (inputMax - inputMin);\\n  return ((value - inputMin) * p) + outputMin;\\n}\\n\\nfloat getRad(float scale, float offset) {\\n  return map(mod(u_time * scale + offset, PI * 2.0), 0.0, PI * 2.0, -PI, PI, true);\\n}\\n\\nvec3 rotateVec3(vec3 p, float angle, vec3 axis){\\n  vec3 a = normalize(axis);\\n  float s = sin(angle);\\n  float c = cos(angle);\\n  float r = 1.0 - c;\\n  mat3 m = mat3(\\n    a.x * a.x * r + c,\\n    a.y * a.x * r + a.z * s,\\n    a.z * a.x * r - a.y * s,\\n    a.x * a.y * r - a.z * s,\\n    a.y * a.y * r + c,\\n    a.z * a.y * r + a.x * s,\\n    a.x * a.z * r + a.y * s,\\n    a.y * a.z * r - a.x * s,\\n    a.z * a.z * r + c\\n  );\\n  return m * p;\\n}\\n\\nvoid main() {\\n  vec3 pos = position;\\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\\n\\n  vColor = vec4(1.0, 0.0, 0.0, 1.0);\\n  vUv = uv;\\n\\n}\\n\"\n\n//# sourceURL=webpack:///./src/kvlt05/Canvas/shader/vert.glsl?");

/***/ }),

/***/ "./src/kvlt05/main.js":
/*!****************************!*\
  !*** ./src/kvlt05/main.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Canvas_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas/_index */ \"./src/kvlt05/Canvas/_index.js\");\n\n\n(function () {\n  new _Canvas_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n})();\n\n//# sourceURL=webpack:///./src/kvlt05/main.js?");

/***/ })

/******/ });