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
/******/ 		"kvlt09/main.js": 0
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
/******/ 	deferredModules.push(["./src/kvlt09/main.js","vendor.js"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/kvlt09/Canvas/_Config.js":
/*!**************************************!*\
  !*** ./src/kvlt09/Canvas/_Config.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Config = {\n  width: 100,\n  // Canvasの幅\n  height: 100,\n  // Canvasの高さ\n  halfWidth: 50,\n  halfHeight: 50,\n  cameraZ: 500,\n  // カメラのz座標\n  dpr: 1,\n  // device pixel ratio\n  aspectRatio: 1.0 // 画面アスペクト比\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Config);\n\n//# sourceURL=webpack:///./src/kvlt09/Canvas/_Config.js?");

/***/ }),

/***/ "./src/kvlt09/Canvas/_index.js":
/*!*************************************!*\
  !*** ./src/kvlt09/Canvas/_index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(THREE) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Config */ \"./src/kvlt09/Canvas/_Config.js\");\n/* harmony import */ var _shader_frag_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shader/frag.glsl */ \"./src/kvlt09/Canvas/shader/frag.glsl\");\n/* harmony import */ var _shader_frag_glsl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shader_frag_glsl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shader_frag2_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shader/frag2.glsl */ \"./src/kvlt09/Canvas/shader/frag2.glsl\");\n/* harmony import */ var _shader_frag2_glsl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shader_frag2_glsl__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _shader_vert_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shader/vert.glsl */ \"./src/kvlt09/Canvas/shader/vert.glsl\");\n/* harmony import */ var _shader_vert_glsl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shader_vert_glsl__WEBPACK_IMPORTED_MODULE_4__);\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\nvar info = [{\n  name: 'Rhino',\n  text: 'Rhinoceroses are large, herbivorous mammals identified by their characteristic horned snouts. The word \"rhinoceros\" comes from the Greek \"rhino\" (nose) and \"ceros\" (horn). '\n}, {\n  name: 'Lion',\n  text: 'Lions go on the hunt for food mostly from dusk till dawn. Female lions do 85-90% of the prides hunting, whilst the male lions patrol the territory and protect the pride.'\n}, {\n  name: 'Leopard',\n  text: 'Leopards are skilled climbers, and like to rest in the branches of trees during the day. They are strong beasts, too, and can carry their heavy prey up into the trees so that pesky scavengers, such as hyenas, don’t steal their meal!'\n}, {\n  name: 'Elephant',\n  text: 'These magnificent mammals spend between 12 to 18 hours eating grass, plants and fruit every single day! They use their long trunks to smell their food and lift it up into their mouth – yum!'\n}, {\n  name: 'Giraffe',\n  text: 'Female giraffes give birth standing up. The result? Newborns are welcomed to the world with a 1.5m drop to the ground! Ouch! But these infants are quick to get on their feet – within 30 minutes they are standing, and only hours later they”re able to run with their mothers.'\n}];\nvar config = {\n  font: 'Josefin Sans',\n  size: 16,\n  h1size: 30,\n  padding: 10,\n  colour: '#fff',\n  width: 512,\n  height: 256,\n  zpos: 0.005,\n  planesize: {\n    width: 1,\n    height: 0.5\n  }\n};\nvar uniforms2 = {\n  u_time: {\n    value: 0.0\n  },\n  u_duration: {\n    value: 2.0\n  },\n  u_twirls: {\n    value: 7\n  }\n};\nvar material2 = new THREE.ShaderMaterial({\n  uniforms: uniforms2,\n  vertexShader: _shader_vert_glsl__WEBPACK_IMPORTED_MODULE_4___default.a,\n  fragmentShader: _shader_frag2_glsl__WEBPACK_IMPORTED_MODULE_3___default.a,\n  transparent: true\n});\nvar canvasText = new CanvasText(scene, info[1], config, material2);\n\nvar _default = /*#__PURE__*/function () {\n  function _default() {\n    _classCallCheck(this, _default);\n\n    this.canvas = document.createElement('canvas');\n    this.ctx = this.canvas.getContext('2d');\n    this.clock = new THREE.Clock();\n    this.container = document.getElementById('CanvasContainer');\n    this.setConfig();\n    this.renderer = new THREE.WebGLRenderer({\n      alpha: true,\n      antialias: true\n    });\n    this.renderer.setSize(_Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width, _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height);\n    this.renderer.setPixelRatio(_Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dpr);\n    this.container.appendChild(this.renderer.domElement);\n    this.resizeFunction = this.resize.bind(this);\n    this.updateFunction = this.update.bind(this); // リサイズイベントを設定\n\n    window.addEventListener('resize', this.resizeFunction);\n    this.scene = new THREE.Scene(); // Cameraを作成\n\n    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);\n    this.camera.position.set(0, 0, 90);\n    this.scene.background = new THREE.Color(0x000000);\n    this.camera.lookAt(0, 0, 0); // this.controls = new OrbitControls(this.camera, this.renderer.domElement);\n    // 初期化\n\n    this.init();\n  }\n\n  _createClass(_default, [{\n    key: \"setConfig\",\n    value: function setConfig() {\n      // 親要素のサイズを取得\n      var domRect = this.container.getBoundingClientRect();\n      var width = domRect.width;\n      var height = domRect.height;\n      _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dpr = Math.min(window.devicePixelRatio, 2);\n      _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width = width;\n      _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height = height;\n      _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].halfWidth = _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2;\n      _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].halfHeight = _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2;\n      _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].aspectRatio = _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height;\n    }\n  }, {\n    key: \"resizeScene\",\n    value: function resizeScene() {\n      this.renderer.setSize(_Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width, _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.start();\n    }\n  }, {\n    key: \"initMesh\",\n    value: function initMesh() {\n      this.geometry = new THREE.PlaneGeometry(2, 1.5);\n      this.uniforms = {\n        u_tex_1: {\n          value: null\n        },\n        u_tex_2: {\n          value: null\n        },\n        u_duration: {\n          value: 2.0\n        },\n        u_time: {\n          value: 0.0\n        },\n        u_mouse: {\n          value: {\n            x: 0.0,\n            y: 0.0\n          }\n        },\n        u_resolution: {\n          value: {\n            x: 0,\n            y: 0\n          }\n        }\n      };\n      this.material = new THREE.ShaderMaterial({\n        uniforms: uniforms,\n        vertexShader: _shader_vert_glsl__WEBPACK_IMPORTED_MODULE_4___default.a,\n        fragmentShader: _shader_frag_glsl__WEBPACK_IMPORTED_MODULE_2___default.a\n      });\n      this.plane = new THREE.Mesh(this.geometry, this.material);\n      this.scene.add(this.plane);\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      this.resize();\n      this.update();\n    }\n  }, {\n    key: \"resize\",\n    value: function resize() {\n      this.setConfig();\n      this.resizeScene();\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      this.clock.getDelta();\n      this.renderer.render(this.scene, this.camera);\n      requestAnimationFrame(this.updateFunction);\n    }\n  }]);\n\n  return _default;\n}();\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\")))\n\n//# sourceURL=webpack:///./src/kvlt09/Canvas/_index.js?");

/***/ }),

/***/ "./src/kvlt09/Canvas/shader/frag.glsl":
/*!********************************************!*\
  !*** ./src/kvlt09/Canvas/shader/frag.glsl ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision mediump float;\\n\\n#define PI 3.141592653589\\n#define PI2 6.28318530718\\n\\nuniform float time;\\nuniform sampler2D uTexture;\\n\\nvarying vec2 vUv;\\nvarying vec3 vPosition;\\n\\nvoid main() {\\n  float t = time * 0.02;\\n  vec2 repeat = -vec2(12.0, 3.0);\\n  vec2 uv = fract(vUv * repeat + vec2(t, 0.0));\\n  vec3 texture = texture2D(uTexture, uv).rgb;\\n  /* texture *= vec3(uv.x, uv.y, 0.); */\\n\\n  float fog = clamp(vPosition.z / 6.0, 0.0, 1.0);\\n  vec3 fragColor = mix(vec3(0.0), texture, fog);\\n\\n  gl_FragColor = vec4(fragColor, 1.0);\\n}\\n\"\n\n//# sourceURL=webpack:///./src/kvlt09/Canvas/shader/frag.glsl?");

/***/ }),

/***/ "./src/kvlt09/Canvas/shader/frag2.glsl":
/*!*********************************************!*\
  !*** ./src/kvlt09/Canvas/shader/frag2.glsl ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision mediump float;\\n\\n#define PI 3.141592653589\\n#define PI2 6.28318530718\\n\\nuniform float time;\\nuniform sampler2D uTexture;\\n\\nvarying vec2 vUv;\\nvarying vec3 vPosition;\\n\\nvoid main() {\\n  float t = time * 0.02;\\n  vec2 repeat = -vec2(12.0, 3.0);\\n  vec2 uv = fract(vUv * repeat + vec2(t, 0.0));\\n  vec3 texture = texture2D(uTexture, uv).rgb;\\n  /* texture *= vec3(uv.x, uv.y, 0.); */\\n\\n  float fog = clamp(vPosition.z / 6.0, 0.0, 1.0);\\n  vec3 fragColor = mix(vec3(0.0), texture, fog);\\n\\n  gl_FragColor = vec4(fragColor, 1.0);\\n}\\n\"\n\n//# sourceURL=webpack:///./src/kvlt09/Canvas/shader/frag2.glsl?");

/***/ }),

/***/ "./src/kvlt09/Canvas/shader/vert.glsl":
/*!********************************************!*\
  !*** ./src/kvlt09/Canvas/shader/vert.glsl ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision mediump float;\\n\\nuniform float time;\\n\\nattribute vec2 uv;\\nattribute vec3 position;\\n\\nuniform mat4 viewMatrix;\\nuniform mat4 modelViewMatrix;\\nuniform mat4 modelMatrix;\\nuniform mat4 projectionMatrix;\\n\\nvarying vec4 vMvPosition;\\nvarying vec2 vUv;\\nvarying vec3 vPosition;\\n\\nfloat map(float value, float inputMin, float inputMax, float outputMin, float outputMax) {\\n  return outputMin + (outputMax - outputMin) * ((value - inputMin) / (inputMax - inputMin));\\n}\\n\\nvec3 rotateVec3(vec3 p, float angle, vec3 axis){\\n  vec3 a = normalize(axis);\\n  float s = sin(angle);\\n  float c = cos(angle);\\n  float r = 1.0 - c;\\n  mat3 m = mat3(\\n    a.x * a.x * r + c,\\n    a.y * a.x * r + a.z * s,\\n    a.z * a.x * r - a.y * s,\\n    a.x * a.y * r - a.z * s,\\n    a.y * a.y * r + c,\\n    a.z * a.y * r + a.x * s,\\n    a.x * a.z * r + a.y * s,\\n    a.y * a.z * r - a.x * s,\\n    a.z * a.z * r + c\\n  );\\n  return m * p;\\n}\\nvoid main() {\\n  vUv = uv;\\n  vPosition = position;\\n  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\\n\\n  gl_Position = projectionMatrix * mvPosition;\\n}\\n\"\n\n//# sourceURL=webpack:///./src/kvlt09/Canvas/shader/vert.glsl?");

/***/ }),

/***/ "./src/kvlt09/main.js":
/*!****************************!*\
  !*** ./src/kvlt09/main.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Canvas_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas/_index */ \"./src/kvlt09/Canvas/_index.js\");\n\n\n(function () {\n  var cv = new _Canvas_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n})();\n\n//# sourceURL=webpack:///./src/kvlt09/main.js?");

/***/ })

/******/ });