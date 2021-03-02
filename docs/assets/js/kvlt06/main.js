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
/******/ 		"kvlt06/main.js": 0
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
/******/ 	deferredModules.push(["./src/kvlt06/main.js","vendor.js"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/kvlt06/Canvas/_Config.js":
/*!**************************************!*\
  !*** ./src/kvlt06/Canvas/_Config.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Config = {\n  width: 100,\n  // Canvasの幅\n  height: 100,\n  // Canvasの高さ\n  halfWidth: 50,\n  halfHeight: 50,\n  cameraZ: 500,\n  // カメラのz座標\n  dpr: 1,\n  // device pixel ratio\n  aspectRatio: 1.0 // 画面アスペクト比\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Config);\n\n//# sourceURL=webpack:///./src/kvlt06/Canvas/_Config.js?");

/***/ }),

/***/ "./src/kvlt06/Canvas/_index.js":
/*!*************************************!*\
  !*** ./src/kvlt06/Canvas/_index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Canvas; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_deprecated_Geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/deprecated/Geometry.js */ \"./node_modules/three/examples/jsm/deprecated/Geometry.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls.js */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_Config */ \"./src/kvlt06/Canvas/_Config.js\");\n // 必要なクラスをimport\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\nvar Canvas = /*#__PURE__*/function () {\n  function Canvas() {\n    _classCallCheck(this, Canvas);\n\n    this.canvas = document.createElement('canvas');\n    this.ctx = this.canvas.getContext('2d');\n    this.clock = new three__WEBPACK_IMPORTED_MODULE_0__[\"Clock\"]();\n    this.container = document.getElementById('CanvasContainer');\n    this.setConfig();\n    this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]({\n      alpha: true,\n      antialias: true\n    });\n    this.renderer.setSize(_Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].width, _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].height);\n    this.renderer.setPixelRatio(_Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].dpr);\n    this.container.appendChild(this.renderer.domElement);\n    this.resizeFunction = this.resize.bind(this);\n    this.updateFunction = this.update.bind(this); // リサイズイベントを設定\n\n    window.addEventListener('resize', this.resizeFunction);\n    this.scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"](); // Cameraを作成\n\n    this.camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"](45, window.innerWidth / window.innerHeight, 1, 10000);\n    this.camera.position.set(0, 0, 1000);\n    this.z = Math.min(window.innerWidth, window.innerHeight);\n    this.camera.lookAt(0, 0, this.z);\n    this.controls = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_2__[\"OrbitControls\"](this.camera, this.renderer.domElement); // 初期化\n\n    this.init();\n  }\n\n  _createClass(Canvas, [{\n    key: \"setConfig\",\n    value: function setConfig() {\n      // 親要素のサイズを取得\n      var domRect = this.container.getBoundingClientRect();\n      var width = domRect.width;\n      var height = domRect.height;\n      _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].dpr = Math.min(window.devicePixelRatio, 2);\n      _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].width = width;\n      _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].height = height;\n      _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].halfWidth = _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].width / 2;\n      _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].halfHeight = _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].height / 2;\n      _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].aspectRatio = _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].width / _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].height;\n    }\n  }, {\n    key: \"resizeScene\",\n    value: function resizeScene() {\n      this.renderer.setSize(_Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].width, _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].height);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.navigatorMediaDevices = navigator.mediaDevices || (navigator.mozGetUserMedia || navigator.webkitGetUserMedia ? {\n        getUserMedia: function getUserMedia(c) {\n          return new Promise(function (y, n) {\n            (navigator.mozGetUserMedia || navigator.webkitGetUserMedia).call(navigator, c, y, n);\n          });\n        }\n      } : null);\n\n      if (this.navigatorMediaDevices) {\n        this.initVideo();\n      }\n\n      this.start();\n    }\n    /**\n     * initVideo.\n     * カメラ初期化\n     */\n\n  }, {\n    key: \"initVideo\",\n    value: function initVideo() {\n      var _this = this;\n\n      this.video = document.getElementById('video');\n      this.video.autoplay = true;\n      var option = {\n        video: true,\n        audio: false\n      };\n      navigator.mediaDevices.getUserMedia(option).then(function (stream) {\n        _this.video.srcObject = stream;\n\n        _this.video.addEventListener('loadeddata', function () {\n          _this.videoWidth = _this.video.videoWidth;\n          _this.videoHeight = _this.video.videoHeight;\n\n          _this.createParticles();\n        });\n      })[\"catch\"](function (error) {\n        console.log(error); // this.showAlert();\n      });\n    }\n  }, {\n    key: \"createParticles\",\n    value: function createParticles() {\n      var imageData = this.getImageData(this.video);\n      this.geometry = new three__WEBPACK_IMPORTED_MODULE_0__[\"BufferGeometry\"]();\n      this.geometry.morphAttributes = {};\n      this.material = new three__WEBPACK_IMPORTED_MODULE_0__[\"PointsMaterial\"]({\n        size: 1,\n        color: 0xff3b6c,\n        sizeAttenuation: false\n      }); // 格子状にパーティクルを並べる\n\n      for (var y = 0, height = imageData.height; y < height; y++) {\n        for (var x = 0, width = imageData.width; x < width; x++) {\n          var vertex = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](x - imageData.width / 2, -y + imageData.height / 2, 0);\n          this.geometry.vertices.push(vertex);\n        }\n      }\n\n      this.particles = new three__WEBPACK_IMPORTED_MODULE_0__[\"Points\"](this.geometry, this.material);\n      this.scene.add(this.particles);\n    }\n  }, {\n    key: \"getImageData\",\n    value: function getImageData(image, useCache) {\n      // フレーム止まる\n      if (useCache && this.imageCache) {\n        return this.imageCache;\n      }\n\n      var w = image.videoWidth;\n      var h = image.videoHeight;\n      this.canvas.width = w;\n      this.canvas.height = h;\n      this.ctx.translate(w, 0);\n      this.ctx.scale(-1, 1);\n      this.ctx.drawImage(image, 0, 0);\n      this.imageCache = this.ctx.getImageData(0, 0, w, h);\n      return this.imageCache;\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      this.checkFirst = true; // 初回描画判定\n\n      this.resize();\n      this.update();\n    }\n  }, {\n    key: \"resize\",\n    value: function resize() {\n      this.setConfig();\n      this.resizeScene();\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      this.clock.getDelta();\n      this.t = this.clock.elapsedTime * 50; // video\n\n      if (this.particles) {\n        this.particles.material.color.r = 1;\n        this.particles.material.color.g = 1;\n        this.particles.material.color.b = 1;\n        var density = 2;\n        var useCache = parseInt(this.t) % 2 === 0;\n        var imageData = this.getImageData(this.video, useCache);\n        console.log(Math.floor(this.t) * imageData.width % this.particles.geometry.vertices.length);\n        var segment = Math.floor(this.t) * imageData.width % this.particles.geometry.vertices.length; // 一番最初なにも描画されないので一回だけ実行\n\n        if (this.checkFirst) {\n          for (var i = 0, length = this.particles.geometry.vertices.length; i < length; i++) {\n            var particle = this.particles.geometry.vertices[i];\n\n            if (i % density === 0) {\n              particle.z = 10000;\n              continue;\n            }\n\n            var index = i * 4;\n            var gray = (imageData.data[index] + imageData.data[index + 1] + imageData.data[index + 2]) / 3;\n            var threshold = 300;\n\n            if (gray < threshold) {\n              particle.z = gray;\n            } else {\n              particle.z = 10000;\n            }\n          }\n\n          this.checkFirst = false;\n        }\n\n        for (var _i = segment, _length = this.particles.geometry.vertices.length; _i < _length; _i++) {\n          var _particle = this.particles.geometry.vertices[_i];\n\n          if (_i % density === 0) {\n            _particle.z = 10000;\n            continue;\n          }\n\n          var _index = _i * 4;\n\n          var _gray = (imageData.data[_index] + imageData.data[_index + 1] + imageData.data[_index + 2]) / 3;\n\n          var _threshold = 300;\n\n          if (_gray < _threshold) {\n            _particle.z = _gray;\n          } else {\n            _particle.z = 10000;\n          }\n        }\n\n        this.particles.geometry.verticesNeedUpdate = true;\n      }\n\n      requestAnimationFrame(this.updateFunction);\n      this.renderer.render(this.scene, this.camera);\n    }\n  }]);\n\n  return Canvas;\n}();\n\n\n\n//# sourceURL=webpack:///./src/kvlt06/Canvas/_index.js?");

/***/ }),

/***/ "./src/kvlt06/main.js":
/*!****************************!*\
  !*** ./src/kvlt06/main.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Canvas_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas/_index */ \"./src/kvlt06/Canvas/_index.js\");\n\n\n(function () {\n  new _Canvas_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n})();\n\n//# sourceURL=webpack:///./src/kvlt06/main.js?");

/***/ })

/******/ });