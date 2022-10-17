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
/******/ 		"kvlt01/main.js": 0
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
/******/ 	deferredModules.push(["./src/kvlt01/main.js","vendor.js"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/kvlt01/Canvas/Item/_index.js":
/*!******************************************!*\
  !*** ./src/kvlt01/Canvas/Item/_index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Item; });\n/* harmony import */ var three_src_objects_Mesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/src/objects/Mesh */ \"./node_modules/three/src/objects/Mesh.js\");\n/* harmony import */ var three_src_geometries_PlaneGeometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/src/geometries/PlaneGeometry */ \"./node_modules/three/src/geometries/PlaneGeometry.js\");\n/* harmony import */ var three_src_materials_RawShaderMaterial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/src/materials/RawShaderMaterial */ \"./node_modules/three/src/materials/RawShaderMaterial.js\");\n/* harmony import */ var three_src_textures_CanvasTexture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/src/textures/CanvasTexture */ \"./node_modules/three/src/textures/CanvasTexture.js\");\n/* harmony import */ var three_src_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/src/constants */ \"./node_modules/three/src/constants.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var tweakpane__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tweakpane */ \"./node_modules/tweakpane/dist/tweakpane.js\");\n/* harmony import */ var tweakpane__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tweakpane__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_Config */ \"./src/kvlt01/Canvas/_Config.js\");\n/* harmony import */ var _shader_vert_glsl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shader/vert.glsl */ \"./src/kvlt01/Canvas/Item/shader/vert.glsl\");\n/* harmony import */ var _shader_vert_glsl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_shader_vert_glsl__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _shader_frag_glsl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shader/frag.glsl */ \"./src/kvlt01/Canvas/Item/shader/frag.glsl\");\n/* harmony import */ var _shader_frag_glsl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_shader_frag_glsl__WEBPACK_IMPORTED_MODULE_9__);\n // 必要なクラスをimport\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\n\n // シェーダーファイルをimport\n\n\n // Tweakpaneの設定\n\nvar pane = new tweakpane__WEBPACK_IMPORTED_MODULE_6___default.a();\nvar PARAMS = {\n  wd: 10.0,\n  speed: 5.0,\n  fontSize: 90\n};\npane.addInput(PARAMS, 'wd', {\n  label: 'wave detail!',\n  min: 0.0,\n  max: 20.0\n});\npane.addInput(PARAMS, 'speed', {\n  min: 1.0,\n  max: 50.0\n}); // Meshクラスを継承したItemクラスを作成\n\nvar Item = /*#__PURE__*/function (_Mesh) {\n  _inherits(Item, _Mesh);\n\n  var _super = _createSuper(Item);\n\n  function Item(params) {\n    var _this;\n\n    _classCallCheck(this, Item);\n\n    _this = _super.call(this);\n    var element = params.element; // dom要素\n\n    var width = params.width;\n    var height = params.height;\n    var segment = 1;\n    _this.geometry = new three_src_geometries_PlaneGeometry__WEBPACK_IMPORTED_MODULE_1__[\"PlaneBufferGeometry\"](width, height, segment, segment);\n\n    var texture = _this.createTexture({\n      text: element.dataset.text,\n      width: width,\n      height: height,\n      fontSize: 65\n    });\n\n    _this.material = new three_src_materials_RawShaderMaterial__WEBPACK_IMPORTED_MODULE_2__[\"RawShaderMaterial\"]({\n      uniforms: {\n        texture: {\n          value: texture\n        },\n        time: {\n          value: 0.0\n        },\n        tween: {\n          value: 0.0\n        },\n        wd: {\n          value: 0.0\n        },\n        speed: {\n          value: 1.0\n        }\n      },\n      vertexShader: _shader_vert_glsl__WEBPACK_IMPORTED_MODULE_8___default.a,\n      fragmentShader: _shader_frag_glsl__WEBPACK_IMPORTED_MODULE_9___default.a,\n      transparent: true\n    });\n    element.addEventListener('pointerenter', function (e) {\n      e.preventDefault();\n      var uniforms = _this.material.uniforms;\n      gsap__WEBPACK_IMPORTED_MODULE_5__[\"gsap\"].to(uniforms.tween, 1.0, {\n        value: 1,\n        ease: gsap__WEBPACK_IMPORTED_MODULE_5__[\"Power3\"].easeOut\n      });\n    });\n    element.addEventListener('pointerleave', function () {\n      var uniforms = _this.material.uniforms;\n      gsap__WEBPACK_IMPORTED_MODULE_5__[\"gsap\"].to(uniforms.tween, 1.0, {\n        value: 0,\n        ease: gsap__WEBPACK_IMPORTED_MODULE_5__[\"Power3\"].easeOut\n      });\n    });\n    return _this;\n  }\n\n  _createClass(Item, [{\n    key: \"createTexture\",\n    value: function createTexture(options) {\n      var canvas = document.createElement('canvas');\n      var width = options.width * _Config__WEBPACK_IMPORTED_MODULE_7__[\"default\"].dpr;\n      var height = options.height * _Config__WEBPACK_IMPORTED_MODULE_7__[\"default\"].dpr;\n      canvas.width = width;\n      canvas.height = height;\n      var ctx = canvas.getContext('2d'); // ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'\n      // ctx.fillRect(0, 0, width, height)\n      // ctx.font = `bold ${options.fontSize * Config.dpr}px 'Ubuntu Condensed'`;\n\n      ctx.font = \"bold \".concat(options.fontSize * _Config__WEBPACK_IMPORTED_MODULE_7__[\"default\"].dpr, \"px UnifrakturCook\");\n      ctx.textAlign = 'center';\n      ctx.textBaseline = 'middle';\n      ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';\n      ctx.fillText(options.text.toUpperCase(), width / 2, height / 2);\n      console.log(ctx); // 文字の輪郭だけ描画\n      // ctx.strokeStyle = 'rgba(255, 255, 255, 1.0)'\n      // ctx.strokeText(options.text.toUpperCase(), width / 2, height / 2)\n      // テクスチャを作成\n\n      var texture = new three_src_textures_CanvasTexture__WEBPACK_IMPORTED_MODULE_3__[\"CanvasTexture\"](canvas);\n      texture.needsUpdate = false; // 2のべき乗サイズでなくてもエラーがでなくなるようにフィルターを指定\n\n      texture.minFilter = three_src_constants__WEBPACK_IMPORTED_MODULE_4__[\"LinearFilter\"];\n      texture.magFilter = three_src_constants__WEBPACK_IMPORTED_MODULE_4__[\"LinearFilter\"];\n      texture.format = three_src_constants__WEBPACK_IMPORTED_MODULE_4__[\"RGBAFormat\"];\n      return texture;\n    }\n  }, {\n    key: \"update\",\n    value: function update(time) {\n      this.material.uniforms.time.value = time;\n      this.material.uniforms.wd.value = PARAMS.wd;\n      this.material.uniforms.speed.value = PARAMS.speed;\n    }\n  }]);\n\n  return Item;\n}(three_src_objects_Mesh__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"]);\n\n\n\n//# sourceURL=webpack:///./src/kvlt01/Canvas/Item/_index.js?");

/***/ }),

/***/ "./src/kvlt01/Canvas/Item/shader/frag.glsl":
/*!*************************************************!*\
  !*** ./src/kvlt01/Canvas/Item/shader/frag.glsl ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision highp float;\\n\\nuniform sampler2D texture;\\nuniform float time;\\nuniform float tween;\\nuniform float wd;\\nuniform float speed;\\n\\nvarying vec2 vUv;\\n\\nvoid main() {\\n  vec2 uv = vUv;\\n  // 0-1で変化するtweenを0-1-0に変換する\\n  float tween010 = sin(tween * 3.14);\\n\\n  float t = time * speed;\\n  uv.x += .05 * (sin(wd * uv.y + t)) * tween; // x軸に対してy軸ずらす\\n  uv.y += .05 * (sin(wd * uv.x + t)) * tween; // y軸に対してx軸ずらす\\n\\n  vec4 color = texture2D(texture, uv);\\n\\n\\n  gl_FragColor = vec4(color);\\n}\\n\"\n\n//# sourceURL=webpack:///./src/kvlt01/Canvas/Item/shader/frag.glsl?");

/***/ }),

/***/ "./src/kvlt01/Canvas/Item/shader/vert.glsl":
/*!*************************************************!*\
  !*** ./src/kvlt01/Canvas/Item/shader/vert.glsl ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision highp float;\\n\\nuniform mat4 modelViewMatrix;\\nuniform mat4 projectionMatrix;\\nattribute vec3 position;\\nattribute vec2 uv;\\nvarying vec2 vUv;\\n\\nvoid main() {\\n  vUv = uv;\\n  vec3 pos = position;\\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\\n}\\n\"\n\n//# sourceURL=webpack:///./src/kvlt01/Canvas/Item/shader/vert.glsl?");

/***/ }),

/***/ "./src/kvlt01/Canvas/_BaseCanvas.js":
/*!******************************************!*\
  !*** ./src/kvlt01/Canvas/_BaseCanvas.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BaseCanvas; });\n/* harmony import */ var three_src_renderers_WebGLRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/src/renderers/WebGLRenderer */ \"./node_modules/three/src/renderers/WebGLRenderer.js\");\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Config */ \"./src/kvlt01/Canvas/_Config.js\");\n // 必要なクラスをimport\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n\nvar BaseCanvas = /*#__PURE__*/function () {\n  function BaseCanvas() {\n    _classCallCheck(this, BaseCanvas);\n\n    // Canvasを囲う親要素を取得\n    this.container = document.getElementById('CanvasContainer'); // Configを設定\n\n    this.setConfig(); // レンダラを作成\n\n    this.renderer = new three_src_renderers_WebGLRenderer__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]({\n      alpha: true,\n      antialias: false\n    });\n    this.renderer.setSize(_Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width, _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height);\n    this.renderer.setPixelRatio(_Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dpr);\n    this.container.appendChild(this.renderer.domElement);\n  }\n\n  _createClass(BaseCanvas, [{\n    key: \"setConfig\",\n    value: function setConfig() {\n      // 親要素のサイズを取得\n      var domRect = this.container.getBoundingClientRect();\n      var width = domRect.width;\n      var height = domRect.height;\n      _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dpr = Math.min(window.devicePixelRatio, 2);\n      _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width = width;\n      _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height = height;\n      _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].halfWidth = _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2;\n      _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].halfHeight = _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height / 2;\n      _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].aspectRatio = _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height;\n    }\n  }, {\n    key: \"resizeScene\",\n    value: function resizeScene() {\n      this.renderer.setSize(_Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width, _Config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height);\n    }\n  }]);\n\n  return BaseCanvas;\n}();\n\n\n\n//# sourceURL=webpack:///./src/kvlt01/Canvas/_BaseCanvas.js?");

/***/ }),

/***/ "./src/kvlt01/Canvas/_Config.js":
/*!**************************************!*\
  !*** ./src/kvlt01/Canvas/_Config.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Config = {\n  width: 100,\n  // Canvasの幅\n  height: 100,\n  // Canvasの高さ\n  halfWidth: 50,\n  halfHeight: 50,\n  cameraZ: 500,\n  // カメラのz座標\n  dpr: 1,\n  // device pixel ratio\n  aspectRatio: 1.0 // 画面アスペクト比\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Config);\n\n//# sourceURL=webpack:///./src/kvlt01/Canvas/_Config.js?");

/***/ }),

/***/ "./src/kvlt01/Canvas/_index.js":
/*!*************************************!*\
  !*** ./src/kvlt01/Canvas/_index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Canvas; });\n/* harmony import */ var three_src_scenes_Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/src/scenes/Scene */ \"./node_modules/three/src/scenes/Scene.js\");\n/* harmony import */ var three_src_cameras_PerspectiveCamera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/src/cameras/PerspectiveCamera */ \"./node_modules/three/src/cameras/PerspectiveCamera.js\");\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_Config */ \"./src/kvlt01/Canvas/_Config.js\");\n/* harmony import */ var _BaseCanvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_BaseCanvas */ \"./src/kvlt01/Canvas/_BaseCanvas.js\");\n/* harmony import */ var _Item_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Item/_index */ \"./src/kvlt01/Canvas/Item/_index.js\");\n // 必要なクラスをimport\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n // BaseCanvasを継承したCanvasクラスを作成\n\nvar Canvas = /*#__PURE__*/function (_BaseCanvas) {\n  _inherits(Canvas, _BaseCanvas);\n\n  var _super = _createSuper(Canvas);\n\n  function Canvas() {\n    var _this;\n\n    _classCallCheck(this, Canvas);\n\n    _this = _super.call(this);\n    _this.scenes = []; // 各シーンを入れる配列\n\n    _this.items = []; // 各Itemを入れる配列\n\n    _this.numItems = 0; // Itemの数\n    // 関数をthisでバインドして持っておく\n\n    _this.resizeFunction = _this.resize.bind(_assertThisInitialized(_this));\n    _this.updateFunction = _this.update.bind(_assertThisInitialized(_this)); // リサイズイベントを設定\n\n    window.addEventListener('resize', _this.resizeFunction); // 初期化\n\n    _this.init();\n\n    return _this;\n  }\n\n  _createClass(Canvas, [{\n    key: \"init\",\n    value: function init() {\n      var _this2 = this;\n\n      // .menu-itemを取得\n      var $items = document.querySelectorAll('.menu-item'); // $itemsをループ\n\n      $items.forEach(function ($item) {\n        // $itemごとにSceneを作成\n        var scene = new three_src_scenes_Scene__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"](); // userDataに入れておく\n\n        scene.userData.element = $item; // $itemのサイズを取得\n\n        var rect = $item.getBoundingClientRect();\n        var width = rect.width;\n        var height = rect.height; // Cameraを作成\n\n        var camera = new three_src_cameras_PerspectiveCamera__WEBPACK_IMPORTED_MODULE_1__[\"PerspectiveCamera\"](_this2.calcViewportFov(height * 0.5), width / height, 0.001, 10000);\n        camera.position.set(0, 0, _Config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cameraZ); // userDataに入れておく\n\n        scene.userData.camera = camera; // Itemを作成\n\n        var item = new _Item_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n          element: $item,\n          width: width,\n          height: height\n        }); // ItemごとのSceneにItemを追加\n\n        scene.add(item); // 各配列にも追加しておく\n\n        _this2.scenes.push(scene);\n\n        _this2.items.push(item);\n      });\n      this.numItems = this.items.length; // レンダリング開始\n\n      this.start();\n    } // ターゲットの高さからFOVを計算する\n\n  }, {\n    key: \"calcViewportFov\",\n    value: function calcViewportFov(halfHeight) {\n      return 2.0 * Math.atan(halfHeight / _Config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cameraZ) * (180 / Math.PI);\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      this.resize();\n      this.update();\n    }\n  }, {\n    key: \"resize\",\n    value: function resize() {\n      this.setConfig();\n      this.resizeScene();\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      // 最大60fpsでレンダリングをループ\n      requestAnimationFrame(this.updateFunction);\n      var time = performance.now() * 0.001; // 全てのSceneをループする\n\n      this.renderer.setScissorTest(true);\n\n      for (var i = 0; i < this.numItems; i++) {\n        var scene = this.scenes[i];\n        var camera = scene.userData.camera;\n        var element = scene.userData.element;\n        var rect = element.getBoundingClientRect();\n        var width = rect.width;\n        var height = rect.height;\n        var left = rect.left;\n        var bottom = _Config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].height - rect.bottom;\n        this.items[i].update(time); // 各elementの座標にviewportを合わせ、描画を切り取る\n\n        this.renderer.setViewport(left, bottom, width, height);\n        this.renderer.setScissor(left, bottom, width, height); // 今のsceneをcameraでレンダリングする\n\n        this.renderer.render(scene, camera);\n      }\n    }\n  }]);\n\n  return Canvas;\n}(_BaseCanvas__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/kvlt01/Canvas/_index.js?");

/***/ }),

/***/ "./src/kvlt01/main.js":
/*!****************************!*\
  !*** ./src/kvlt01/main.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webfontloader */ \"./node_modules/webfontloader/webfontloader.js\");\n/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Canvas_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Canvas/_index */ \"./src/kvlt01/Canvas/_index.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  // フォントを読み込んでからCanvasを作成する\n  webfontloader__WEBPACK_IMPORTED_MODULE_0___default.a.load({\n    google: {\n      // families: ['Ubuntu Condensed'],\n      families: ['UnifrakturCook:700']\n    },\n    active: function active() {\n      new _Canvas_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/kvlt01/main.js?");

/***/ })

/******/ });