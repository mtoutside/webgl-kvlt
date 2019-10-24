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
/******/ 		"kvlt02/main.js": 0
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
/******/ 	deferredModules.push(["./src/kvlt02/main.js","vendor.js"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/kvlt02/Canvas/Item/shader/frag.glsl":
/*!*************************************************!*\
  !*** ./src/kvlt02/Canvas/Item/shader/frag.glsl ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision mediump float;\\n\\nuniform sampler2D texture;\\nuniform float time;\\nuniform float resolution;\\nuniform float tween;\\nuniform float wd;\\nuniform float speed;\\n\\nvarying vec2 vUv;\\n\\nvoid main() {\\n  vec2 uv = vUv;\\n  // 0-1で変化するtweenを0-1-0に変換する\\n\\n  float t = time * speed;\\n  uv.x += .005 * (sin(wd * uv.y + t)); // x軸に対してy軸ずらす\\n  uv.y += .005 * (sin(wd * uv.x + t)); // y軸に対してx軸ずらす\\n\\n  /* uv = uv / 1.6; */\\n  uv = uv.xy / resolution;\\n  /* uv *= .5; */\\n  /* uv = fract(uv); */\\n  vec4 color = texture2D(texture, uv);\\n\\n  /* color *= 3.0; */\\n  /* color = fract(color); */\\n\\n\\n  /* gl_FragColor = vec4(color); */\\n  gl_FragColor = vec4(uv, .0, 1.0);\\n}\\n\"\n\n//# sourceURL=webpack:///./src/kvlt02/Canvas/Item/shader/frag.glsl?");

/***/ }),

/***/ "./src/kvlt02/Canvas/Item/shader/vert.glsl":
/*!*************************************************!*\
  !*** ./src/kvlt02/Canvas/Item/shader/vert.glsl ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision mediump float;\\n\\nuniform mat4 modelViewMatrix;\\nuniform mat4 projectionMatrix;\\nattribute vec3 position;\\nattribute vec2 uv;\\nvarying vec2 vUv;\\n\\nvoid main() {\\n  vUv = uv;\\n  vec3 pos = position;\\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\\n}\\n\"\n\n//# sourceURL=webpack:///./src/kvlt02/Canvas/Item/shader/vert.glsl?");

/***/ }),

/***/ "./src/kvlt02/Canvas/_Config.js":
/*!**************************************!*\
  !*** ./src/kvlt02/Canvas/_Config.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Config = {\n  width: window.innerWidth,\n  // Canvasの幅\n  height: window.innerHeight,\n  // Canvasの高さ\n  cameraZ: 1000,\n  // カメラのz座標\n  dpr: 1,\n  // device pixel ratio\n  aspectRatio: 1.0 // 画面アスペクト比\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Config);\n\n//# sourceURL=webpack:///./src/kvlt02/Canvas/_Config.js?");

/***/ }),

/***/ "./src/kvlt02/Canvas/_index.js":
/*!*************************************!*\
  !*** ./src/kvlt02/Canvas/_index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Canvas; });\n/* harmony import */ var three_src_scenes_Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/src/scenes/Scene */ \"./node_modules/three/src/scenes/Scene.js\");\n/* harmony import */ var three_src_cameras_PerspectiveCamera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/src/cameras/PerspectiveCamera */ \"./node_modules/three/src/cameras/PerspectiveCamera.js\");\n/* harmony import */ var three_src_cameras_OrthographicCamera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/src/cameras/OrthographicCamera */ \"./node_modules/three/src/cameras/OrthographicCamera.js\");\n/* harmony import */ var three_src_renderers_WebGLRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/src/renderers/WebGLRenderer */ \"./node_modules/three/src/renderers/WebGLRenderer.js\");\n/* harmony import */ var three_src_objects_Mesh__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/src/objects/Mesh */ \"./node_modules/three/src/objects/Mesh.js\");\n/* harmony import */ var three_src_geometries_PlaneGeometry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/src/geometries/PlaneGeometry */ \"./node_modules/three/src/geometries/PlaneGeometry.js\");\n/* harmony import */ var three_src_materials_RawShaderMaterial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/src/materials/RawShaderMaterial */ \"./node_modules/three/src/materials/RawShaderMaterial.js\");\n/* harmony import */ var three_src_textures_CanvasTexture__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three/src/textures/CanvasTexture */ \"./node_modules/three/src/textures/CanvasTexture.js\");\n/* harmony import */ var three_src_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three/src/constants */ \"./node_modules/three/src/constants.js\");\n/* harmony import */ var gsap_TweenMax__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gsap/TweenMax */ \"./node_modules/gsap/TweenMax.js\");\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_Config */ \"./src/kvlt02/Canvas/_Config.js\");\n/* harmony import */ var tweakpane__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tweakpane */ \"./node_modules/tweakpane/dist/tweakpane.js\");\n/* harmony import */ var tweakpane__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(tweakpane__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _Item_shader_vert_glsl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Item/shader/vert.glsl */ \"./src/kvlt02/Canvas/Item/shader/vert.glsl\");\n/* harmony import */ var _Item_shader_vert_glsl__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Item_shader_vert_glsl__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _Item_shader_frag_glsl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Item/shader/frag.glsl */ \"./src/kvlt02/Canvas/Item/shader/frag.glsl\");\n/* harmony import */ var _Item_shader_frag_glsl__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Item_shader_frag_glsl__WEBPACK_IMPORTED_MODULE_13__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\n\n\n\n // import Item from './Item/_index';\n\n // シェーダーファイルをimport\n\n\n // Tweakpaneの設定\n\nvar pane = new tweakpane__WEBPACK_IMPORTED_MODULE_11___default.a();\nvar PARAMS = {\n  wd: 10.0,\n  speed: 5.0,\n  fontSize: 90\n};\npane.addInput(PARAMS, 'wd', {\n  label: 'wave detail',\n  min: 0.0,\n  max: 20.0\n});\npane.addInput(PARAMS, 'speed', {\n  min: 1.0,\n  max: 50.0\n});\nvar geometry, mesh, material, camera, scene;\n\nvar Canvas =\n/*#__PURE__*/\nfunction () {\n  function Canvas() {\n    _classCallCheck(this, Canvas);\n\n    this.container = document.getElementById('CanvasContainer');\n    this.setConfig(); // レンダラを作成\n\n    this.renderer = new three_src_renderers_WebGLRenderer__WEBPACK_IMPORTED_MODULE_3__[\"WebGLRenderer\"]({\n      alpha: true,\n      antialias: false\n    });\n    this.renderer.setSize(_Config__WEBPACK_IMPORTED_MODULE_10__[\"default\"].width, _Config__WEBPACK_IMPORTED_MODULE_10__[\"default\"].height);\n    this.renderer.setPixelRatio(_Config__WEBPACK_IMPORTED_MODULE_10__[\"default\"].dpr);\n    this.container.appendChild(this.renderer.domElement); // 関数をthisでバインドして持っておく\n\n    this.resizeFunction = this.resize.bind(this);\n    this.updateFunction = this.update.bind(this);\n    this.start = this.start.bind(this); // リサイズイベントを設定\n\n    window.addEventListener('resize', this.resizeFunction); // 初期化\n\n    this.init();\n  }\n\n  _createClass(Canvas, [{\n    key: \"init\",\n    value: function init() {\n      scene = new three_src_scenes_Scene__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"](); // userDataに入れておく\n      // Cameraを作成\n      // camera = new PerspectiveCamera(\n      //   60,\n      //   Config.width / Config.height,\n      //   0.01,\n      //   10000\n      // );\n\n      camera = new three_src_cameras_OrthographicCamera__WEBPACK_IMPORTED_MODULE_2__[\"OrthographicCamera\"](-1, 1, 1, -1, 0, -1);\n      camera.position.set(0, 0, _Config__WEBPACK_IMPORTED_MODULE_10__[\"default\"].cameraZ); // レンダリング開始\n\n      this.createMesh();\n      scene.add(mesh);\n      this.start();\n    }\n  }, {\n    key: \"createMesh\",\n    value: function createMesh() {\n      var segment = 1;\n      var resolution = _Config__WEBPACK_IMPORTED_MODULE_10__[\"default\"].width / _Config__WEBPACK_IMPORTED_MODULE_10__[\"default\"].height;\n      console.log(resolution);\n      geometry = new three_src_geometries_PlaneGeometry__WEBPACK_IMPORTED_MODULE_5__[\"PlaneBufferGeometry\"](_Config__WEBPACK_IMPORTED_MODULE_10__[\"default\"].width, _Config__WEBPACK_IMPORTED_MODULE_10__[\"default\"].height, segment, segment); // テクスチャの作成\n\n      /*\n        DOM要素が持っているtextデータとフォントサイズをここで指定する\n        */\n\n      var texture = this.createTexture({\n        text: 'KVLT',\n        width: _Config__WEBPACK_IMPORTED_MODULE_10__[\"default\"].width,\n        height: _Config__WEBPACK_IMPORTED_MODULE_10__[\"default\"].height,\n        fontSize: 100\n      }); // マテリアルの作成\n\n      material = new three_src_materials_RawShaderMaterial__WEBPACK_IMPORTED_MODULE_6__[\"RawShaderMaterial\"]({\n        uniforms: {\n          texture: {\n            value: texture\n          },\n          time: {\n            value: 0.0\n          },\n          tween: {\n            value: 0.0\n          },\n          resolution: {\n            value: resolution\n          },\n          wd: {\n            value: 0.0\n          },\n          speed: {\n            value: 1.0\n          }\n        },\n        vertexShader: _Item_shader_vert_glsl__WEBPACK_IMPORTED_MODULE_12___default.a,\n        fragmentShader: _Item_shader_frag_glsl__WEBPACK_IMPORTED_MODULE_13___default.a,\n        transparent: true\n      });\n      mesh = new three_src_objects_Mesh__WEBPACK_IMPORTED_MODULE_4__[\"Mesh\"](geometry, material); // this.scene.add(mesh);\n    } // 2D Canvasからテクスチャを作成する\n\n  }, {\n    key: \"createTexture\",\n    value: function createTexture(options) {\n      // Canvas要素を作成\n      var canvas = document.createElement('canvas'); // dprに対応したサイズを計算\n\n      var width = options.width * _Config__WEBPACK_IMPORTED_MODULE_10__[\"default\"].dpr;\n      var height = options.height * _Config__WEBPACK_IMPORTED_MODULE_10__[\"default\"].dpr; // 幅を指定\n\n      canvas.width = width;\n      canvas.height = height;\n      var ctx = canvas.getContext('2d'); // ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'\n      // ctx.fillRect(0, 0, width, height)\n      // 中央にテキストを描画\n\n      ctx.font = \"bold \".concat(options.fontSize * _Config__WEBPACK_IMPORTED_MODULE_10__[\"default\"].dpr, \"px 'Ubuntu Condensed'\"); // ctx.font = `bold ${options.fontSize * Config.dpr}px UnifrakturCook` なぜか読み込めない\n\n      ctx.textAlign = 'center';\n      ctx.textBaseline = 'middle';\n      ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';\n      ctx.fillText(options.text, width / 2, height / 2); // 文字の輪郭だけ描画\n      // ctx.strokeStyle = 'rgba(255, 255, 255, 1.0)'\n      // ctx.strokeText(options.text.toUpperCase(), width / 2, height / 2)\n      // テクスチャを作成\n\n      var texture = new three_src_textures_CanvasTexture__WEBPACK_IMPORTED_MODULE_7__[\"CanvasTexture\"](canvas);\n      texture.needsUpdate = false;\n      texture.minFilter = three_src_constants__WEBPACK_IMPORTED_MODULE_8__[\"LinearFilter\"];\n      texture.magFilter = three_src_constants__WEBPACK_IMPORTED_MODULE_8__[\"LinearFilter\"];\n      texture.format = three_src_constants__WEBPACK_IMPORTED_MODULE_8__[\"RGBAFormat\"];\n      return texture;\n    }\n  }, {\n    key: \"setConfig\",\n    value: function setConfig() {\n      // 親要素のサイズを取得\n      var domRect = this.container.getBoundingClientRect();\n      console.log(domRect);\n      var width = domRect.width;\n      var height = domRect.height;\n      _Config__WEBPACK_IMPORTED_MODULE_10__[\"default\"].dpr = Math.min(window.devicePixelRatio, 2);\n      _Config__WEBPACK_IMPORTED_MODULE_10__[\"default\"].width = width;\n      _Config__WEBPACK_IMPORTED_MODULE_10__[\"default\"].height = height;\n      _Config__WEBPACK_IMPORTED_MODULE_10__[\"default\"].halfWidth = _Config__WEBPACK_IMPORTED_MODULE_10__[\"default\"].width / 2;\n      _Config__WEBPACK_IMPORTED_MODULE_10__[\"default\"].halfHeight = _Config__WEBPACK_IMPORTED_MODULE_10__[\"default\"].height / 2;\n      _Config__WEBPACK_IMPORTED_MODULE_10__[\"default\"].aspectRatio = _Config__WEBPACK_IMPORTED_MODULE_10__[\"default\"].width / _Config__WEBPACK_IMPORTED_MODULE_10__[\"default\"].height;\n    }\n  }, {\n    key: \"resizeScene\",\n    value: function resizeScene() {\n      this.renderer.setSize(_Config__WEBPACK_IMPORTED_MODULE_10__[\"default\"].width, _Config__WEBPACK_IMPORTED_MODULE_10__[\"default\"].height);\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      this.resize();\n      this.update();\n    }\n  }, {\n    key: \"resize\",\n    value: function resize() {\n      this.setConfig();\n      this.resizeScene();\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      // 最大60fpsでレンダリングをループ\n      requestAnimationFrame(this.updateFunction);\n      var time = performance.now() * 0.001;\n      material.uniforms.time.value = time;\n      material.uniforms.wd.value = PARAMS.wd;\n      material.uniforms.speed.value = PARAMS.speed; // camera.position.z += 0.6;\n      // 今のsceneをcameraでレンダリングする\n\n      this.renderer.render(scene, camera);\n    }\n  }]);\n\n  return Canvas;\n}();\n\n\n\n//# sourceURL=webpack:///./src/kvlt02/Canvas/_index.js?");

/***/ }),

/***/ "./src/kvlt02/main.js":
/*!****************************!*\
  !*** ./src/kvlt02/main.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webfontloader */ \"./node_modules/webfontloader/webfontloader.js\");\n/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Canvas_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Canvas/_index */ \"./src/kvlt02/Canvas/_index.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  // フォントを読み込んでからCanvasを作成する\n  webfontloader__WEBPACK_IMPORTED_MODULE_0___default.a.load({\n    google: {\n      families: ['Ubuntu Condensed'] // families: ['UnifrakturCook'],\n\n    },\n    active: function active() {\n      new _Canvas_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/kvlt02/main.js?");

/***/ })

/******/ });