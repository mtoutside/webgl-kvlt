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
/******/ 		"kvlt08/main.js": 0
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
/******/ 	deferredModules.push(["./src/kvlt08/main.js","vendor.js"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/kvlt08/Canvas/_Config.js":
/*!**************************************!*\
  !*** ./src/kvlt08/Canvas/_Config.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Config = {\n  width: 100,\n  // Canvasの幅\n  height: 100,\n  // Canvasの高さ\n  halfWidth: 50,\n  halfHeight: 50,\n  cameraZ: 500,\n  // カメラのz座標\n  dpr: 1,\n  // device pixel ratio\n  aspectRatio: 1.0 // 画面アスペクト比\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Config);\n\n//# sourceURL=webpack:///./src/kvlt08/Canvas/_Config.js?");

/***/ }),

/***/ "./src/kvlt08/Canvas/_index.js":
/*!*************************************!*\
  !*** ./src/kvlt08/Canvas/_index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(THREE) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Config */ \"./src/kvlt08/Canvas/_Config.js\");\n/* harmony import */ var _mesh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_mesh */ \"./src/kvlt08/Canvas/_mesh.js\");\n/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_options */ \"./src/kvlt08/Canvas/_options.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\nvar _default = /*#__PURE__*/function () {\n  function _default() {\n    _classCallCheck(this, _default);\n\n    this.canvas = document.createElement('canvas');\n    this.ctx = this.canvas.getContext('2d');\n    this.clock = new THREE.Clock();\n    this.container = document.getElementById('CanvasContainer');\n    this.setConfig();\n    this.renderer = new THREE.WebGLRenderer({\n      alpha: true,\n      antialias: true\n    });\n    this.renderer.setSize(_Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width, _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height);\n    this.renderer.setPixelRatio(_Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dpr);\n    this.container.appendChild(this.renderer.domElement);\n    this.resizeFunction = this.resize.bind(this);\n    this.updateFunction = this.update.bind(this); // リサイズイベントを設定\n\n    window.addEventListener('resize', this.resizeFunction);\n    this.scene = new THREE.Scene(); // Cameraを作成\n\n    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);\n    this.camera.position.set(0, 0, 90);\n    this.scene.background = new THREE.Color(0x000000);\n    this.camera.lookAt(0, 0, 0); // this.controls = new OrbitControls(this.camera, this.renderer.domElement);\n    // 初期化\n\n    this.init();\n  }\n\n  _createClass(_default, [{\n    key: \"setConfig\",\n    value: function setConfig() {\n      // 親要素のサイズを取得\n      var domRect = this.container.getBoundingClientRect();\n      var width = domRect.width;\n      var height = domRect.height;\n      _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dpr = Math.min(window.devicePixelRatio, 2);\n      _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width = width;\n      _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height = height;\n      _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].halfWidth = _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2;\n      _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].halfHeight = _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2;\n      _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].aspectRatio = _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height;\n    }\n  }, {\n    key: \"resizeScene\",\n    value: function resizeScene() {\n      this.renderer.setSize(_Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width, _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      for (var i = 0; i < _options__WEBPACK_IMPORTED_MODULE_3__[\"default\"].length; i++) {\n        var meshes = new _mesh__WEBPACK_IMPORTED_MODULE_2__[\"default\"](_options__WEBPACK_IMPORTED_MODULE_3__[\"default\"][i], this.scene);\n        meshes.init(_options__WEBPACK_IMPORTED_MODULE_3__[\"default\"][i], this.scene); // console.log(meshes);\n      }\n\n      this.start();\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      this.resize();\n      this.update();\n    }\n  }, {\n    key: \"resize\",\n    value: function resize() {\n      this.setConfig();\n      this.resizeScene();\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      this.clock.getDelta();\n\n      for (var i = 0; i < this.scene.children.length; i++) {\n        var obj = this.scene.children[i].material; // console.log(obj);\n\n        obj.uniformsNeedUpdate = true;\n        obj.uniforms.time.value += 0.5;\n      }\n\n      this.renderer.render(this.scene, this.camera);\n      requestAnimationFrame(this.updateFunction);\n    }\n  }]);\n\n  return _default;\n}();\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\")))\n\n//# sourceURL=webpack:///./src/kvlt08/Canvas/_index.js?");

/***/ }),

/***/ "./src/kvlt08/Canvas/_mesh.js":
/*!************************************!*\
  !*** ./src/kvlt08/Canvas/_mesh.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Mesh; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Config */ \"./src/kvlt08/Canvas/_Config.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Mesh = /*#__PURE__*/function () {\n  function Mesh() {\n    _classCallCheck(this, Mesh);\n  }\n\n  _createClass(Mesh, [{\n    key: \"init\",\n    value: function init(options, scene) {\n      this.options = {\n        word: options.word,\n        color: options.color,\n        fill: options.fill,\n        geometry: options.geometry,\n        position: options.position,\n        fragmentShader: options.fragmentShader,\n        vertexShader: options.vertexShader\n      }; // テクスチャの作成\n\n      this.texture = this.createTexture({\n        text: this.options.word,\n        width: _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width,\n        height: _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height,\n        fontSize: 130,\n        color: this.options.color\n      });\n      this.scene = scene;\n      this.create();\n    }\n  }, {\n    key: \"create\",\n    value: function create() {\n      var _this$mesh$position;\n\n      this.geometry = this.options.geometry;\n      this.material = new three__WEBPACK_IMPORTED_MODULE_0__[\"RawShaderMaterial\"]({\n        uniforms: {\n          uTexture: {\n            value: this.texture\n          },\n          time: {\n            value: 0.0\n          },\n          resolution: {\n            value: _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].aspectRatio\n          }\n        },\n        vertexShader: this.options.vertexShader,\n        fragmentShader: this.options.fragmentShader,\n        transparent: false,\n        side: three__WEBPACK_IMPORTED_MODULE_0__[\"DoubleSide\"]\n      });\n      this.mesh = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](this.geometry, this.material);\n\n      (_this$mesh$position = this.mesh.position).set.apply(_this$mesh$position, _toConsumableArray(this.options.position));\n\n      this.mesh.rotation.set(0, 0, 0);\n      this.scene.add(this.mesh); // this.scene.background = new THREE.Color(this.options.fill);\n    } // 2D Canvasからテクスチャを作成する\n\n  }, {\n    key: \"createTexture\",\n    value: function createTexture(options) {\n      // Canvas要素を作成\n      var canvas = document.createElement('canvas');\n      var ctx = canvas.getContext('2d'); // measureTextするためいったん設定\n\n      var fontFamily = 'Helvetica';\n      ctx.font = \"bold \".concat(options.fontSize * _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dpr, \"px '\").concat(fontFamily, \"'\");\n      var textWidth = ctx.measureText(options.text); // dprに対応したサイズを計算\n\n      var width = textWidth.width;\n      var height = options.fontSize * _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dpr * 1.0; // 幅を指定\n\n      canvas.width = width;\n      canvas.height = height; // ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'\n      // ctx.fillRect(0, 0, width, height)\n      // 中央にテキストを描画\n\n      ctx.font = \"bold \".concat(options.fontSize * _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dpr, \"px '\").concat(fontFamily, \"'\");\n      ctx.textAlign = 'left';\n      ctx.textBaseline = 'hanging';\n      ctx.fillStyle = options.color;\n      ctx.fillText(options.text, -5, 20); // console.log(textWidth);\n      // 文字の輪郭だけ描画\n      // ctx.strokeStyle = 'rgba(255, 255, 255, 1.0)'\n      // ctx.strokeText(options.text.toUpperCase(), width / 2, height / 2)\n      // ↓canvasの文字を確認したいとき\n      // document.body.appendChild(canvas);\n      // canvas.style.backgroundColor = '#933';\n      // canvas.style.position = 'relative';\n      // テクスチャを作成\n\n      var texture = new three__WEBPACK_IMPORTED_MODULE_0__[\"CanvasTexture\"](canvas);\n      texture.needsUpdate = false;\n      texture.minFilter = three__WEBPACK_IMPORTED_MODULE_0__[\"LinearFilter\"];\n      texture.magFilter = three__WEBPACK_IMPORTED_MODULE_0__[\"LinearFilter\"];\n      texture.format = three__WEBPACK_IMPORTED_MODULE_0__[\"RGBAFormat\"];\n      return texture;\n    }\n  }]);\n\n  return Mesh;\n}();\n\n\n\n//# sourceURL=webpack:///./src/kvlt08/Canvas/_mesh.js?");

/***/ }),

/***/ "./src/kvlt08/Canvas/_options.js":
/*!***************************************!*\
  !*** ./src/kvlt08/Canvas/_options.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(THREE) {/* harmony import */ var _shader_frag_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shader/frag.glsl */ \"./src/kvlt08/Canvas/shader/frag.glsl\");\n/* harmony import */ var _shader_frag_glsl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_shader_frag_glsl__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shader_fragSphere_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shader/fragSphere.glsl */ \"./src/kvlt08/Canvas/shader/fragSphere.glsl\");\n/* harmony import */ var _shader_fragSphere_glsl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shader_fragSphere_glsl__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shader_fragBox_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shader/fragBox.glsl */ \"./src/kvlt08/Canvas/shader/fragBox.glsl\");\n/* harmony import */ var _shader_fragBox_glsl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shader_fragBox_glsl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shader_fragPlane_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shader/fragPlane.glsl */ \"./src/kvlt08/Canvas/shader/fragPlane.glsl\");\n/* harmony import */ var _shader_fragPlane_glsl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shader_fragPlane_glsl__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _shader_vert_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shader/vert.glsl */ \"./src/kvlt08/Canvas/shader/vert.glsl\");\n/* harmony import */ var _shader_vert_glsl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shader_vert_glsl__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _shader_vertBox_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shader/vertBox.glsl */ \"./src/kvlt08/Canvas/shader/vertBox.glsl\");\n/* harmony import */ var _shader_vertBox_glsl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shader_vertBox_glsl__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _shader_vertPlane_glsl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shader/vertPlane.glsl */ \"./src/kvlt08/Canvas/shader/vertPlane.glsl\");\n/* harmony import */ var _shader_vertPlane_glsl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shader_vertPlane_glsl__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar options = [{\n  word: 'INTO THE VOID ',\n  color: '#ffffff',\n  fill: new THREE.Color(0x000000),\n  geometry: new THREE.TorusKnotGeometry(9, 3, 768, 3, 4, 3),\n  position: [0, 0, 0],\n  fragmentShader: _shader_frag_glsl__WEBPACK_IMPORTED_MODULE_0___default.a,\n  vertexShader: _shader_vert_glsl__WEBPACK_IMPORTED_MODULE_4___default.a,\n  \"class\": 'geo-1'\n}, {\n  word: 'BLACK SABBATH ',\n  color: '#cc66fa',\n  fill: new THREE.Color(0xAA0066),\n  geometry: new THREE.SphereGeometry(12, 64, 64),\n  position: [0, -70, 0],\n  fragmentShader: _shader_fragSphere_glsl__WEBPACK_IMPORTED_MODULE_1___default.a,\n  vertexShader: _shader_vert_glsl__WEBPACK_IMPORTED_MODULE_4___default.a,\n  \"class\": 'geo-2'\n}, {\n  word: 'POSESSED ',\n  color: '#cc6688',\n  fill: new THREE.Color(0x3e64ff),\n  geometry: new THREE.BoxGeometry(50, 10, 10, 64, 64, 64),\n  position: [0, -140, 0],\n  fragmentShader: _shader_fragBox_glsl__WEBPACK_IMPORTED_MODULE_2___default.a,\n  vertexShader: _shader_vertBox_glsl__WEBPACK_IMPORTED_MODULE_5___default.a,\n  \"class\": 'geo-3'\n}, {\n  word: 'KYUSS ',\n  color: '#cc6688',\n  fill: new THREE.Color(0xbbccdd),\n  geometry: new THREE.PlaneGeometry(27, 27, 64, 64),\n  position: [0, -210, 0],\n  fragmentShader: _shader_fragPlane_glsl__WEBPACK_IMPORTED_MODULE_3___default.a,\n  vertexShader: _shader_vertPlane_glsl__WEBPACK_IMPORTED_MODULE_6___default.a,\n  \"class\": 'geo-4'\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (options);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\")))\n\n//# sourceURL=webpack:///./src/kvlt08/Canvas/_options.js?");

/***/ }),

/***/ "./src/kvlt08/Canvas/shader/frag.glsl":
/*!********************************************!*\
  !*** ./src/kvlt08/Canvas/shader/frag.glsl ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision mediump float;\\n\\n#define PI 3.141592653589\\n#define PI2 6.28318530718\\n\\nuniform float time;\\nuniform sampler2D uTexture;\\n\\nvarying vec2 vUv;\\nvarying vec3 vPosition;\\n\\nvoid main() {\\n  float t = time * 0.02;\\n  vec2 repeat = -vec2(12.0, 3.0);\\n  vec2 uv = fract(vUv * repeat + vec2(t, 0.0));\\n  vec3 texture = texture2D(uTexture, uv).rgb;\\n  /* texture *= vec3(uv.x, uv.y, 0.); */\\n\\n  float fog = clamp(vPosition.z / 6.0, 0.0, 1.0);\\n  vec3 fragColor = mix(vec3(0.0), texture, fog);\\n\\n  gl_FragColor = vec4(fragColor, 1.0);\\n}\\n\"\n\n//# sourceURL=webpack:///./src/kvlt08/Canvas/shader/frag.glsl?");

/***/ }),

/***/ "./src/kvlt08/Canvas/shader/fragBox.glsl":
/*!***********************************************!*\
  !*** ./src/kvlt08/Canvas/shader/fragBox.glsl ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision mediump float;\\n\\n#define PI 3.141592653589\\n#define PI2 6.28318530718\\n\\nuniform float time;\\nuniform sampler2D uTexture;\\n\\nvarying vec2 vUv;\\nvarying vec3 vPosition;\\n\\nvoid main() {\\n  float t = time * 0.02;\\n  vec2 repeat = vec2(3.0, 2.0);\\n  vec2 uv = fract(vUv * repeat + vec2(t, 0.0));\\n  vec3 texture = texture2D(uTexture, uv).rgb;\\n  /* texture *= vec3(uv.x, uv.y, 0.); */\\n\\n  /* float fog = clamp(vPosition.z / 6.0, 0.0, 1.0); */\\n  /* vec3 fragColor = mix(vec3(0.0), texture, fog); */\\n  vec3 fragColor = texture;\\n\\n  gl_FragColor = vec4(fragColor, 1.0);\\n}\\n\"\n\n//# sourceURL=webpack:///./src/kvlt08/Canvas/shader/fragBox.glsl?");

/***/ }),

/***/ "./src/kvlt08/Canvas/shader/fragPlane.glsl":
/*!*************************************************!*\
  !*** ./src/kvlt08/Canvas/shader/fragPlane.glsl ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision mediump float;\\n\\n#define PI 3.141592653589\\n#define PI2 6.28318530718\\n\\nuniform float time;\\nuniform sampler2D uTexture;\\n\\nvarying vec2 vUv;\\nvarying float vWave;\\n\\nfloat map(float value, float inputMin, float inputMax, float outputMin, float outputMax) {\\n  return outputMin + (outputMax - outputMin) * ((value - inputMin) / (inputMax - inputMin));\\n}\\n\\nvoid main() {\\n  float t = time * 0.02;\\n  vec2 repeat = vec2(2.0, 6.0);\\n  vec2 uv = fract(vUv * repeat + vec2(t, 0.0));\\n  vec3 texture = texture2D(uTexture, uv).rgb;\\n  /* texture *= vec3(uv.x, uv.y, 0.); */\\n\\n  float wave = vWave;\\n  wave = map(wave, -1.0, 1.0, 0.0, 1.0);\\n\\n  float shadow = 1.0 - wave;\\n\\n  vec3 fragColor = texture * shadow;\\n\\n  gl_FragColor = vec4(fragColor, 1.0);\\n}\\n\"\n\n//# sourceURL=webpack:///./src/kvlt08/Canvas/shader/fragPlane.glsl?");

/***/ }),

/***/ "./src/kvlt08/Canvas/shader/fragSphere.glsl":
/*!**************************************************!*\
  !*** ./src/kvlt08/Canvas/shader/fragSphere.glsl ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision mediump float;\\n\\n#define PI 3.141592653589\\n#define PI2 6.28318530718\\n\\nuniform float time;\\nuniform sampler2D uTexture;\\n\\nvarying vec2 vUv;\\nvarying vec3 vPosition;\\n\\nvoid main() {\\n  float t = time * 0.02;\\n  vec2 repeat = vec2(2.0, 6.0);\\n  vec2 uv = fract(vUv * repeat + vec2(t, 0.0));\\n  vec3 texture = texture2D(uTexture, uv).rgb;\\n  /* texture *= vec3(uv.x, uv.y, 0.); */\\n\\n  float fog = clamp(vPosition.z / 6.0, 0.0, 1.0);\\n  vec3 fragColor = mix(vec3(0.0), texture, fog);\\n\\n  gl_FragColor = vec4(fragColor, 1.0);\\n}\\n\"\n\n//# sourceURL=webpack:///./src/kvlt08/Canvas/shader/fragSphere.glsl?");

/***/ }),

/***/ "./src/kvlt08/Canvas/shader/vert.glsl":
/*!********************************************!*\
  !*** ./src/kvlt08/Canvas/shader/vert.glsl ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision mediump float;\\n\\nuniform float time;\\n\\nattribute vec2 uv;\\nattribute vec3 position;\\n\\nuniform mat4 viewMatrix;\\nuniform mat4 modelViewMatrix;\\nuniform mat4 modelMatrix;\\nuniform mat4 projectionMatrix;\\n\\nvarying vec4 vMvPosition;\\nvarying vec2 vUv;\\nvarying vec3 vPosition;\\n\\nfloat map(float value, float inputMin, float inputMax, float outputMin, float outputMax) {\\n  return outputMin + (outputMax - outputMin) * ((value - inputMin) / (inputMax - inputMin));\\n}\\n\\nvec3 rotateVec3(vec3 p, float angle, vec3 axis){\\n  vec3 a = normalize(axis);\\n  float s = sin(angle);\\n  float c = cos(angle);\\n  float r = 1.0 - c;\\n  mat3 m = mat3(\\n    a.x * a.x * r + c,\\n    a.y * a.x * r + a.z * s,\\n    a.z * a.x * r - a.y * s,\\n    a.x * a.y * r - a.z * s,\\n    a.y * a.y * r + c,\\n    a.z * a.y * r + a.x * s,\\n    a.x * a.z * r + a.y * s,\\n    a.y * a.z * r - a.x * s,\\n    a.z * a.z * r + c\\n  );\\n  return m * p;\\n}\\nvoid main() {\\n  vUv = uv;\\n  vPosition = position;\\n  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\\n\\n  gl_Position = projectionMatrix * mvPosition;\\n}\\n\"\n\n//# sourceURL=webpack:///./src/kvlt08/Canvas/shader/vert.glsl?");

/***/ }),

/***/ "./src/kvlt08/Canvas/shader/vertBox.glsl":
/*!***********************************************!*\
  !*** ./src/kvlt08/Canvas/shader/vertBox.glsl ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision mediump float;\\n\\nuniform float time;\\n\\nattribute vec2 uv;\\nattribute vec3 position;\\n\\nuniform mat4 viewMatrix;\\nuniform mat4 modelViewMatrix;\\nuniform mat4 modelMatrix;\\nuniform mat4 projectionMatrix;\\n\\nvarying vec4 vMvPosition;\\nvarying vec2 vUv;\\nvarying vec3 vPosition;\\n\\nfloat map(float value, float inputMin, float inputMax, float outputMin, float outputMax) {\\n  return outputMin + (outputMax - outputMin) * ((value - inputMin) / (inputMax - inputMin));\\n}\\n\\nvec3 rotateVec3(vec3 p, float angle, vec3 axis){\\n  vec3 a = normalize(axis);\\n  float s = sin(angle);\\n  float c = cos(angle);\\n  float r = 1.0 - c;\\n  mat3 m = mat3(\\n      a.x * a.x * r + c,\\n      a.y * a.x * r + a.z * s,\\n      a.z * a.x * r - a.y * s,\\n      a.x * a.y * r - a.z * s,\\n      a.y * a.y * r + c,\\n      a.z * a.y * r + a.x * s,\\n      a.x * a.z * r + a.y * s,\\n      a.y * a.z * r - a.x * s,\\n      a.z * a.z * r + c\\n      );\\n  return m * p;\\n}\\n\\n/* vec3 rotate(vec3 v, vec3 axis, float angle) { */\\n/*   return (rotateVec3(v, axis, angle) * vec4(v, 1.0)).xyz; */\\n/* } */\\n\\nvoid main() {\\n  vUv = uv;\\n  vPosition = position;\\n  vec3 pos = position;\\n  pos = rotateVec3(pos, pos.x * 0.15 * log(exp(sin(time * 0.1))), vec3(1.0, 0.0, 0.0));\\n  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);\\n\\n  gl_Position = projectionMatrix * mvPosition;\\n}\\n\"\n\n//# sourceURL=webpack:///./src/kvlt08/Canvas/shader/vertBox.glsl?");

/***/ }),

/***/ "./src/kvlt08/Canvas/shader/vertPlane.glsl":
/*!*************************************************!*\
  !*** ./src/kvlt08/Canvas/shader/vertPlane.glsl ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision mediump float;\\n\\nuniform float time;\\n\\nattribute vec2 uv;\\nattribute vec3 position;\\n\\nuniform mat4 viewMatrix;\\nuniform mat4 modelViewMatrix;\\nuniform mat4 modelMatrix;\\nuniform mat4 projectionMatrix;\\n\\nvarying vec2 vUv;\\nvarying float vWave;\\n\\n\\nvec3 rotateVec3(vec3 p, float angle, vec3 axis){\\n  vec3 a = normalize(axis);\\n  float s = sin(angle);\\n  float c = cos(angle);\\n  float r = 1.0 - c;\\n  mat3 m = mat3(\\n      a.x * a.x * r + c,\\n      a.y * a.x * r + a.z * s,\\n      a.z * a.x * r - a.y * s,\\n      a.x * a.y * r - a.z * s,\\n      a.y * a.y * r + c,\\n      a.z * a.y * r + a.x * s,\\n      a.x * a.z * r + a.y * s,\\n      a.y * a.z * r - a.x * s,\\n      a.z * a.z * r + c\\n      );\\n  return m * p;\\n}\\n\\nvoid main() {\\n  vUv = uv;\\n  vec3 pos = position;\\n\\n  float freq = 0.5;\\n  float amp = 1.5;\\n  float t = time * 0.1;\\n\\n  pos.z += sin((pos.x + pos.y) * freq - t) * amp;\\n  vWave = pos.z;\\n\\n  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);\\n\\n  gl_Position = projectionMatrix * mvPosition;\\n}\\n\"\n\n//# sourceURL=webpack:///./src/kvlt08/Canvas/shader/vertPlane.glsl?");

/***/ }),

/***/ "./src/kvlt08/_fullscreen.js":
/*!***********************************!*\
  !*** ./src/kvlt08/_fullscreen.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FullscreenSlider; });\n/* harmony import */ var normalize_wheel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize-wheel */ \"./node_modules/normalize-wheel/index.js\");\n/* harmony import */ var normalize_wheel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_wheel__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var _Canvas_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Canvas/_options */ \"./src/kvlt08/Canvas/_options.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar CLASSNAME_WRAP = 'js-fullscreen-wrap';\nvar CLASSNAME_SECTION = 'js-fullscreen-section';\nvar CLASSNAME_PAGER = 'js-fullscreen-pager';\nvar CLASSNAME_POINTER = 'js-fullscreen-pager-pointer';\nvar CLASSNAME_BG = 'js-fullscreen-bg';\nvar CLASSNAME_SHOW = 'is-shown';\nvar CLASSNAME_SHOW_ASC = 'is-shown-asc';\nvar CLASSNAME_SHOW_DESC = 'is-shown-desc';\nvar CLASSNAME_HIDE = 'is-hidden';\nvar CLASSNAME_HIDE_ASC = 'is-hidden-asc';\nvar CLASSNAME_HIDE_DESC = 'is-hidden-desc';\nvar CLASSNAME_CURRENT = 'is-current';\nvar INTERVAL_TO_FIRE_WHEEL = 1000;\nvar BG_COLORS = ['#0fb4ae', '#7bc8bc', '#868eaf', '#ec6867', '#f8bb0e', '#c0ffee'];\n\nvar FullscreenSlider = /*#__PURE__*/function () {\n  function FullscreenSlider(contents, resolution, canvas) {\n    _classCallCheck(this, FullscreenSlider);\n\n    this.options = _Canvas_options__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    this.elmWrap = contents.querySelector(\".\".concat(CLASSNAME_WRAP));\n    this.elmSection = contents.querySelectorAll(\".\".concat(CLASSNAME_SECTION));\n    this.elmPager = contents.querySelector(\".\".concat(CLASSNAME_PAGER));\n    this.elmPagerPointers = contents.querySelectorAll(\".\".concat(CLASSNAME_POINTER));\n    this.elmBg = contents.querySelector(\".\".concat(CLASSNAME_BG));\n    this.currentId = 0;\n    this.previousId = 0;\n    this.maxId = this.options.length - 1;\n    this.isAscend = true;\n    this.wheelTimer = null;\n    this.isWheeling = false;\n    this.touchStartX = 0;\n    this.touchStartY = 0;\n    this.isTouchMoved = false;\n    this.canvas = canvas;\n    this.resize(resolution);\n    this.on();\n  }\n\n  _createClass(FullscreenSlider, [{\n    key: \"start\",\n    value: function start() {\n      // Start the first animation.\n      document.body.style.overscrollBehavior = 'none'; // this.elmSection[this.currentId].classList.add(CLASSNAME_SHOW);\n      // this.elmSection[this.currentId].classList.add(CLASSNAME_SHOW_ASC);\n      // this.elmPager.classList.add(CLASSNAME_ANIMATE);\n      // this.elmPagerPointers[this.currentId].classList.add(CLASSNAME_CURRENT);\n      // this.elmBg.classList.add(CLASSNAME_ANIMATE);\n      // this.elmBg.style.backgroundColor = BG_COLORS[this.currentId];\n    }\n  }, {\n    key: \"goToPrev\",\n    value: function goToPrev() {\n      if (this.currentId === 0) return;\n      this.previousId = this.currentId;\n      this.currentId--;\n      this.isAscend = false; // this.changeSection();\n\n      this.changeMesh();\n    }\n  }, {\n    key: \"goToNext\",\n    value: function goToNext() {\n      if (this.currentId >= this.maxId) return;\n      this.previousId = this.currentId;\n      this.currentId++;\n      this.isAscend = true; // this.changeSection();\n\n      this.changeMesh();\n    }\n  }, {\n    key: \"goToTarget\",\n    value: function goToTarget(id) {\n      if (this.currentId === id) return;\n      this.isAscend = id > this.currentId;\n      this.previousId = this.currentId;\n      this.currentId = id; // this.changeSection();\n\n      this.changeMesh();\n    }\n  }, {\n    key: \"changeMesh\",\n    value: function changeMesh() {\n      console.log(this.canvas);\n      var tl = gsap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].timeline();\n\n      if (this.isAscend) {\n        this.canvas.scene.background = this.options[this.currentId].fill;\n        tl.to(this.canvas.scene.position, {\n          duration: 1.5,\n          ease: 'expo.Out',\n          y: '+= 70'\n        }, 0); // tl.to(this.canvas.scene.rotation, {\n        //   duration: 1.5,\n        //   ease: 'expo.Out',\n        //   x: '+= 0.2',\n        // }, 0);\n      } else {\n        this.canvas.scene.background = this.options[this.currentId].fill;\n        tl.to(this.canvas.scene.position, {\n          duration: 1.5,\n          ease: 'expo.Out',\n          y: '-= 70'\n        }, 0); // tl.to(this.canvas.scene.rotation, {\n        //   duration: 1.5,\n        //   ease: 'expo.Out',\n        //   x: '-= 0.2',\n        // }, 0);\n      }\n    }\n  }, {\n    key: \"changeSection\",\n    value: function changeSection() {\n      // Add/Remove the ClassName for change the current section and run the animation.\n      // It judges which direction going the next section from the previous section Ascend or Descend.\n      for (var i = 0; i < this.elmSection.length; i++) {\n        this.elmSection[i].classList.remove(CLASSNAME_SHOW);\n        this.elmSection[i].classList.remove(CLASSNAME_SHOW_ASC);\n        this.elmSection[i].classList.remove(CLASSNAME_SHOW_DESC);\n        this.elmSection[i].classList.remove(CLASSNAME_HIDE);\n        this.elmSection[i].classList.remove(CLASSNAME_HIDE_ASC);\n        this.elmSection[i].classList.remove(CLASSNAME_HIDE_DESC);\n      }\n\n      if (this.isAscend) {\n        this.elmSection[this.previousId].classList.add(CLASSNAME_HIDE);\n        this.elmSection[this.previousId].classList.add(CLASSNAME_HIDE_ASC);\n        this.elmSection[this.currentId].classList.add(CLASSNAME_SHOW);\n        this.elmSection[this.currentId].classList.add(CLASSNAME_SHOW_ASC);\n      } else {\n        this.elmSection[this.previousId].classList.add(CLASSNAME_HIDE);\n        this.elmSection[this.previousId].classList.add(CLASSNAME_HIDE_DESC);\n        this.elmSection[this.currentId].classList.add(CLASSNAME_SHOW);\n        this.elmSection[this.currentId].classList.add(CLASSNAME_SHOW_DESC);\n      }\n\n      this.elmPagerPointers[this.previousId].classList.remove(CLASSNAME_CURRENT);\n      this.elmPagerPointers[this.currentId].classList.add(CLASSNAME_CURRENT);\n      this.elmBg.style.backgroundColor = BG_COLORS[this.currentId];\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      // Remove styles of the wrapper element temporarily.\n      this.elmWrap.style.width = 0;\n      this.elmWrap.style.height = 0;\n    }\n  }, {\n    key: \"resize\",\n    value: function resize(resolution) {\n      // Resize the wrapper element to the argument resolution.\n      this.elmWrap.style.width = \"\".concat(resolution.x, \"px\");\n      this.elmWrap.style.height = \"\".concat(resolution.y, \"px\");\n    }\n  }, {\n    key: \"on\",\n    value: function on() {\n      var _this = this;\n\n      // Binding each events.\n      // For wheel events\n      // =====\n      var wheel = function wheel(e) {\n        e.preventDefault();\n        var n = normalize_wheel__WEBPACK_IMPORTED_MODULE_0___default()(e); // Run at the first wheel event only.\n\n        if (_this.isWheeling === false) {\n          if (Math.abs(n.pixelY) < 10) return;\n\n          if (n.pixelY < 0) {\n            _this.goToPrev();\n          } else {\n            _this.goToNext();\n          } // Prevent repeated wheel events fire with a timer.\n\n\n          _this.isWheeling = true;\n          _this.wheelTimer = setTimeout(function () {\n            _this.isWheeling = false;\n          }, INTERVAL_TO_FIRE_WHEEL);\n        }\n      };\n\n      this.elmWrap.addEventListener('wheel', wheel, {\n        capture: true\n      });\n      this.elmWrap.addEventListener('DOMMouseScroll', wheel, {\n        capture: true\n      }); // For touch events\n      // =====\n\n      this.elmWrap.addEventListener('touchstart', function (e) {\n        _this.touchStartX = e.touches[0].clientX;\n        _this.touchStartY = e.touches[0].clientY;\n      }, false);\n      this.elmWrap.addEventListener('touchmove', function (e) {\n        if (_this.isTouchMoved === true) return;\n        var diffX = _this.touchStartX - e.touches[0].clientX;\n        var diffY = _this.touchStartY - e.touches[0].clientY;\n\n        if (Math.abs(diffX) > 20) {\n          return;\n        } else if (diffY < -20) {\n          e.preventDefault();\n\n          _this.goToPrev();\n        } else if (diffY > 20) {\n          e.preventDefault();\n\n          _this.goToNext();\n        }\n\n        if (Math.abs(diffY) > 20) {\n          _this.isTouchMoved = true;\n        }\n      }, false);\n      this.elmWrap.addEventListener('touchend', function (e) {\n        _this.isTouchMoved = false;\n      }, false); // For pager\n      // ======\n\n      var _loop = function _loop() {\n        var id = i;\n\n        _this.elmPagerPointers[i].addEventListener('click', function (e) {\n          e.preventDefault();\n\n          _this.goToTarget(id);\n        });\n      };\n\n      for (var i = 0; i < this.elmPagerPointers.length; i++) {\n        _loop();\n      }\n    }\n  }]);\n\n  return FullscreenSlider;\n}();\n\n\n\n//# sourceURL=webpack:///./src/kvlt08/_fullscreen.js?");

/***/ }),

/***/ "./src/kvlt08/main.js":
/*!****************************!*\
  !*** ./src/kvlt08/main.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Canvas_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas/_index */ \"./src/kvlt08/Canvas/_index.js\");\n/* harmony import */ var _fullscreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_fullscreen */ \"./src/kvlt08/_fullscreen.js\");\n\n\n\n(function () {\n  var cv = new _Canvas_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  var fsSlider = new _fullscreen__WEBPACK_IMPORTED_MODULE_1__[\"default\"](document, {\n    x: window.innerWidth,\n    y: window.innerHeight\n  }, cv);\n  window.addEventListener('resize', function () {\n    fsSlider.reset();\n    fsSlider.resize({\n      x: window.innerWidth,\n      y: window.innerHeight\n    });\n  });\n  init();\n\n  function init() {\n    fsSlider.start();\n  }\n})();\n\n//# sourceURL=webpack:///./src/kvlt08/main.js?");

/***/ })

/******/ });