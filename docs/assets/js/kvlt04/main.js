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
/******/ 		"kvlt04/main.js": 0
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
/******/ 	deferredModules.push(["./src/kvlt04/main.js","vendor.js"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/kvlt04/Canvas/_Config.js":
/*!**************************************!*\
  !*** ./src/kvlt04/Canvas/_Config.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Config = {\n  width: 100,\n  // Canvasの幅\n  height: 100,\n  // Canvasの高さ\n  halfWidth: 50,\n  halfHeight: 50,\n  cameraZ: 500,\n  // カメラのz座標\n  dpr: 1,\n  // device pixel ratio\n  aspectRatio: 1.0 // 画面アスペクト比\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Config);\n\n//# sourceURL=webpack:///./src/kvlt04/Canvas/_Config.js?");

/***/ }),

/***/ "./src/kvlt04/Canvas/_fc.js":
/*!**********************************!*\
  !*** ./src/kvlt04/Canvas/_fc.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _fcg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_fcg */ \"./src/kvlt04/Canvas/_fcg.js\");\n/* harmony import */ var tweakpane__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tweakpane */ \"./node_modules/tweakpane/dist/tweakpane.js\");\n/* harmony import */ var tweakpane__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tweakpane__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shader_vert_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shader/vert.glsl */ \"./src/kvlt04/Canvas/shader/vert.glsl\");\n/* harmony import */ var _shader_vert_glsl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shader_vert_glsl__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _shader_frag_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shader/frag.glsl */ \"./src/kvlt04/Canvas/shader/frag.glsl\");\n/* harmony import */ var _shader_frag_glsl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shader_frag_glsl__WEBPACK_IMPORTED_MODULE_4__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n // シェーダーファイルをimport\n\n\n // Tweakpaneの設定\n\nvar pane = new tweakpane__WEBPACK_IMPORTED_MODULE_2___default.a();\nvar PARAMS = {\n  animation1: 1.0,\n  animation2: 0.0,\n  animation3: 0.0\n};\npane.addInput(PARAMS, 'animation1', {\n  label: 'animation1',\n  min: 0.0,\n  max: 1.0\n});\npane.addInput(PARAMS, 'animation2', {\n  label: 'animation2',\n  min: 0.0,\n  max: 1.0\n});\npane.addInput(PARAMS, 'animation3', {\n  label: 'animation3',\n  min: 0.0,\n  max: 1.0\n});\n\nvar FloatingChars = /*#__PURE__*/function (_THREE$Mesh) {\n  _inherits(FloatingChars, _THREE$Mesh);\n\n  var _super = _createSuper(FloatingChars);\n\n  function FloatingChars(numChars, charWidth, numTextureGridCols, textureGridsize) {\n    var _this;\n\n    _classCallCheck(this, FloatingChars);\n\n    _this = _super.call(this);\n    _this.numChars = numChars;\n    _this.charWidth = charWidth;\n    _this.numTextureGridCols = numTextureGridCols;\n    _this.textureGridsize = textureGridsize;\n    _this.geometry = new _fcg__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_this.numChars, _this.charWidth).getGeometry();\n    console.log(_this.geometry);\n    _this.material = new three__WEBPACK_IMPORTED_MODULE_0__[\"RawShaderMaterial\"]({\n      transparent: true,\n      side: three__WEBPACK_IMPORTED_MODULE_0__[\"DoubleSide\"],\n      uniforms: {\n        txtTexture: {\n          type: 't'\n        },\n        u_time: {\n          type: '1f',\n          value: 0\n        },\n        numChars: {\n          type: '1f',\n          value: _this.numChars\n        },\n        numTextureGridCols: {\n          type: '1f',\n          value: _this.numTextureGridCols\n        },\n        numTextureGridRows: {\n          type: '1f',\n          value: 1\n        },\n        textureTxtLength: {\n          type: '1f',\n          value: 1\n        },\n        animationValue1: {\n          type: '1f',\n          value: PARAMS.animation1\n        },\n        animationValue2: {\n          type: '1f',\n          value: PARAMS.animation2\n        },\n        animationValue3: {\n          type: '1f',\n          value: PARAMS.animation3\n        }\n      },\n      vertexShader: _shader_vert_glsl__WEBPACK_IMPORTED_MODULE_3___default.a,\n      fragmentShader: _shader_frag_glsl__WEBPACK_IMPORTED_MODULE_4___default.a\n    });\n    return _this;\n  }\n\n  _createClass(FloatingChars, [{\n    key: \"update\",\n    value: function update() {\n      this.material.uniforms.u_time.value += 0.001;\n      this.material.uniforms.animationValue1.value = PARAMS.animation1;\n      this.material.uniforms.animationValue2.value = PARAMS.animation2;\n      this.material.uniforms.animationValue3.value = PARAMS.animation3;\n    }\n  }, {\n    key: \"createTexture\",\n    value: function createTexture(txt, fontFamily) {\n      var textureTxtLength = txt.length;\n      var numTextureGridRows = Math.ceil(textureTxtLength / this.numTextureGridCols);\n      this.txtCanvas = document.createElement('canvas');\n      this.txtCanvasCtx = this.txtCanvas.getContext('2d');\n      this.txtCanvas.width = this.textureGridsize * this.numTextureGridCols;\n      this.txtCanvas.height = this.textureGridsize * numTextureGridRows;\n      this.txtCanvasCtx.clearRect(0, 0, this.txtCanvas.width, this.txtCanvas.height);\n      this.txtCanvasCtx.font = \"normal \".concat(this.textureGridsize * 0.8, \"px \").concat(fontFamily);\n      this.txtCanvasCtx.textAlign = 'center';\n      this.txtCanvasCtx.fillStyle = '#ffffff';\n      var colIndex;\n      var rowIndex;\n\n      for (var i = 0, l = textureTxtLength; i < l; i++) {\n        colIndex = i % this.numTextureGridCols;\n        rowIndex = Math.floor(i / this.numTextureGridCols);\n        this.txtCanvasCtx.fillText(txt.charAt(i), colIndex * this.textureGridsize + this.textureGridsize / 2, rowIndex * this.textureGridsize + this.textureGridsize * 0.8, this.textureGridsize);\n      }\n\n      this.txtTexture = new three__WEBPACK_IMPORTED_MODULE_0__[\"Texture\"](this.txtCanvas);\n      this.txtTexture.flipY = false;\n      this.txtTexture.needsUpdate = true;\n      this.txtTexture.minFilter = three__WEBPACK_IMPORTED_MODULE_0__[\"LinearFilter\"];\n      this.txtTexture.magFilter = three__WEBPACK_IMPORTED_MODULE_0__[\"LinearFilter\"];\n      this.material.uniforms.txtTexture.value = this.txtTexture;\n      this.material.uniforms.numTextureGridRows.value = numTextureGridRows;\n      this.material.uniforms.textureTxtLength.value = textureTxtLength; // ↓canvasの文字を確認したいとき\n      // document.body.appendChild(this.txtCanvas);\n      // this.txtCanvas.style.backgroundColor = '#333';\n      // this.txtCanvas.style.position = 'relative';\n    }\n  }, {\n    key: \"setUniform\",\n    value: function setUniform(uniformKey, value) {\n      this.material.uniforms[uniformKey].value = value;\n    }\n  }]);\n\n  return FloatingChars;\n}(three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FloatingChars);\n\n//# sourceURL=webpack:///./src/kvlt04/Canvas/_fc.js?");

/***/ }),

/***/ "./src/kvlt04/Canvas/_fcg.js":
/*!***********************************!*\
  !*** ./src/kvlt04/Canvas/_fcg.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FloatingCharsGeometry; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar FloatingCharsGeometry = /*#__PURE__*/function () {\n  function FloatingCharsGeometry(numChars, charWidth) {\n    _classCallCheck(this, FloatingCharsGeometry);\n\n    this.numChars = numChars;\n    this.charWidth = charWidth;\n    this.geometry = new three__WEBPACK_IMPORTED_MODULE_0__[\"BufferGeometry\"]();\n    this.init();\n  }\n\n  _createClass(FloatingCharsGeometry, [{\n    key: \"init\",\n    value: function init() {\n      this.vertices = [];\n      this.charIndices = [];\n      this.randomValues = [];\n      this.uvs = [];\n      this.indices = [];\n      var charHeight = this.charWidth;\n      var charHalfWidth = this.charWidth / 2;\n      var charHalfHeight = charHeight / 2;\n\n      for (var i = 0; i < this.numChars; i++) {\n        var randomValue = [Math.random(), Math.random(), Math.random()]; // 頂点データを生成\n        // 左上\n\n        this.vertices.push(-charHalfWidth); // x\n\n        this.vertices.push(charHalfHeight); // y\n\n        this.vertices.push(0); // z\n\n        this.uvs.push(0); // u\n\n        this.uvs.push(0); // v\n\n        this.charIndices.push(i); // 何文字目かを表すインデックス番号\n\n        this.randomValues.push(randomValue[0]); // GLSLで使用するランダムな値 (vec3になるので3つ)\n\n        this.randomValues.push(randomValue[1]); // GLSLで使用するランダムな値 (vec3になるので3つ)\n\n        this.randomValues.push(randomValue[2]); // GLSLで使用するランダムな値 (vec3になるので3つ)\n        // 右上\n\n        this.vertices.push(charHalfWidth);\n        this.vertices.push(charHalfHeight);\n        this.vertices.push(0);\n        this.uvs.push(1);\n        this.uvs.push(0);\n        this.charIndices.push(i);\n        this.randomValues.push(randomValue[0]);\n        this.randomValues.push(randomValue[1]);\n        this.randomValues.push(randomValue[2]); // 左下\n\n        this.vertices.push(-charHalfWidth);\n        this.vertices.push(-charHalfHeight);\n        this.vertices.push(0);\n        this.uvs.push(0);\n        this.uvs.push(1);\n        this.charIndices.push(i);\n        this.randomValues.push(randomValue[0]);\n        this.randomValues.push(randomValue[1]);\n        this.randomValues.push(randomValue[2]); // 右下\n\n        this.vertices.push(charHalfWidth);\n        this.vertices.push(-charHalfHeight);\n        this.vertices.push(0);\n        this.uvs.push(1);\n        this.uvs.push(1);\n        this.charIndices.push(i);\n        this.randomValues.push(randomValue[0]);\n        this.randomValues.push(randomValue[1]);\n        this.randomValues.push(randomValue[2]); // ポリゴンを生成するインデックスをpush (三角形ポリゴンが2枚なので6個)\n\n        var indexOffset = i * 4;\n        this.indices.push(indexOffset + 0);\n        this.indices.push(indexOffset + 2);\n        this.indices.push(indexOffset + 1);\n        this.indices.push(indexOffset + 2);\n        this.indices.push(indexOffset + 3);\n        this.indices.push(indexOffset + 1);\n      } // attributes\n\n\n      this.geometry.addAttribute('position', new three__WEBPACK_IMPORTED_MODULE_0__[\"BufferAttribute\"](new Float32Array(this.vertices), 3));\n      this.geometry.addAttribute('randomValues', new three__WEBPACK_IMPORTED_MODULE_0__[\"BufferAttribute\"](new Float32Array(this.randomValues), 3));\n      this.geometry.addAttribute('charIndex', new three__WEBPACK_IMPORTED_MODULE_0__[\"BufferAttribute\"](new Uint16Array(this.charIndices), 1));\n      this.geometry.addAttribute('uv', new three__WEBPACK_IMPORTED_MODULE_0__[\"BufferAttribute\"](new Float32Array(this.uvs), 2)); // index\n\n      this.geometry.setIndex(new three__WEBPACK_IMPORTED_MODULE_0__[\"BufferAttribute\"](new Uint16Array(this.indices), 1)); // 配列としては使用しないので削除\n\n      delete this.vertices;\n      delete this.charIndices;\n      delete this.randomValues;\n      delete this.uvs;\n      delete this.indices;\n      this.geometry.computeVertexNormals();\n    }\n  }, {\n    key: \"getGeometry\",\n    value: function getGeometry() {\n      return this.geometry;\n    }\n  }]);\n\n  return FloatingCharsGeometry;\n}();\n\n\n\n//# sourceURL=webpack:///./src/kvlt04/Canvas/_fcg.js?");

/***/ }),

/***/ "./src/kvlt04/Canvas/_index.js":
/*!*************************************!*\
  !*** ./src/kvlt04/Canvas/_index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Canvas; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _fc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_fc */ \"./src/kvlt04/Canvas/_fc.js\");\n/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webfontloader */ \"./node_modules/webfontloader/webfontloader.js\");\n/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_Config */ \"./src/kvlt04/Canvas/_Config.js\");\n // 必要なクラスをimport\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n\n\n\n\nvar Canvas = /*#__PURE__*/function () {\n  function Canvas() {\n    var numChars = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;\n    var charWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;\n    var numTextureGridCols = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 16;\n    var textureGridSize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 128;\n    var fontFamily = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'Cabin Sketch';\n\n    _classCallCheck(this, Canvas);\n\n    this.numChars = numChars;\n    this.charWidth = charWidth;\n    this.numTextureGridCols = numTextureGridCols;\n    this.textureGridSize = textureGridSize;\n    this.fontFamily = fontFamily;\n    this.animationValue1 = 1;\n    this.animationValue2 = 0;\n    this.animationValue3 = 0; // Canvasを囲う親要素を取得\n\n    this.container = document.getElementById('CanvasContainer'); // Configを設定\n\n    this.setConfig(); // レンダラを作成\n\n    this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]({\n      alpha: true,\n      antialias: true\n    });\n    this.renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](0xffffff));\n    this.renderer.setSize(_Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].width, _Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].height);\n    this.renderer.setPixelRatio(_Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].dpr);\n    this.container.appendChild(this.renderer.domElement); // 関数をthisでバインドして持っておく\n\n    this.resizeFunction = this.resize.bind(this);\n    this.updateFunction = this.update.bind(this); // リサイズイベントを設定\n\n    window.addEventListener('resize', this.resizeFunction);\n    this.scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"](); // Cameraを作成\n\n    this.camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"](45, window.innerWidth / window.innerHeight, 1, 10000);\n    this.camera.position.set(0, 0, 100);\n    this.controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__[\"OrbitControls\"](this.camera, this.renderer.domElement); // 初期化\n\n    this.init();\n  }\n\n  _createClass(Canvas, [{\n    key: \"setConfig\",\n    value: function setConfig() {\n      // 親要素のサイズを取得\n      var domRect = this.container.getBoundingClientRect();\n      var width = domRect.width;\n      var height = domRect.height;\n      _Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].dpr = Math.min(window.devicePixelRatio, 2);\n      _Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].width = width;\n      _Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].height = height;\n      _Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].halfWidth = _Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].width / 2;\n      _Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].halfHeight = _Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].height / 2;\n      _Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].aspectRatio = _Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].width / _Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].height;\n    }\n  }, {\n    key: \"resizeScene\",\n    value: function resizeScene() {\n      this.renderer.setSize(_Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].width, _Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].height);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.initFloatingChars().then(function () {\n        _this.start();\n      });\n    }\n  }, {\n    key: \"initFloatingChars\",\n    value: function initFloatingChars() {\n      var _this2 = this;\n\n      return new Promise(function (resolve) {\n        webfontloader__WEBPACK_IMPORTED_MODULE_3___default.a.load({\n          google: {\n            families: [_this2.fontFamily]\n          },\n          active: function active() {\n            console.log('font loaded');\n            _this2.floatingChars = new _fc__WEBPACK_IMPORTED_MODULE_2__[\"default\"](_this2.numChars, _this2.charWidth, _this2.numTextureGridCols, _this2.textureGridSize);\n\n            _this2.floatingChars.createTexture('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|:;?<>,.', _this2.fontFamily);\n\n            _this2.scene.add(_this2.floatingChars);\n\n            resolve();\n          }\n        });\n      });\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      this.resize();\n      this.update();\n    }\n  }, {\n    key: \"resize\",\n    value: function resize() {\n      this.setConfig();\n      this.resizeScene();\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      requestAnimationFrame(this.updateFunction);\n      this.floatingChars.update(this.camera);\n      this.renderer.render(this.scene, this.camera);\n    }\n  }]);\n\n  return Canvas;\n}();\n\n\n\n//# sourceURL=webpack:///./src/kvlt04/Canvas/_index.js?");

/***/ }),

/***/ "./src/kvlt04/Canvas/shader/frag.glsl":
/*!********************************************!*\
  !*** ./src/kvlt04/Canvas/shader/frag.glsl ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision mediump float;\\n\\n#define PI 3.141592653589\\n#define PI2 6.28318530718\\n\\nuniform vec2 u_mouse;\\nuniform vec2 u_resolution;\\nuniform float u_time;\\nuniform sampler2D txtTexture;\\n\\nvarying vec2 vUv;\\nvarying vec4 vColor;\\n\\nvoid main() {\\n  vec2 uv = vUv;\\n  vec4 color = texture2D(txtTexture, uv) * vColor;\\n  if(color.a == 0.0) {\\n    discard;\\n  } else {\\n    gl_FragColor = color;\\n  }\\n}\\n\"\n\n//# sourceURL=webpack:///./src/kvlt04/Canvas/shader/frag.glsl?");

/***/ }),

/***/ "./src/kvlt04/Canvas/shader/vert.glsl":
/*!********************************************!*\
  !*** ./src/kvlt04/Canvas/shader/vert.glsl ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision mediump float;\\n\\nuniform mat4 viewMatrix;\\nuniform mat4 modelViewMatrix;\\nuniform mat4 modelMatrix;\\nuniform mat4 projectionMatrix;\\nuniform vec3 cameraPosition;\\nuniform float u_time;\\nuniform float numChars;\\nuniform float numTextureGridRows;\\nuniform float numTextureGridCols;\\nuniform float textureTxtLength;\\n\\nuniform float animationValue1;\\nuniform float animationValue2;\\nuniform float animationValue3;\\n\\nuniform float u_wd;\\nuniform float u_wd2;\\nuniform float u_speed;\\n\\nattribute vec3 position;\\nattribute vec3 randomValues;\\nattribute vec3 normal;\\nattribute vec2 uv;\\nattribute float charIndex;\\n\\nvarying vec2 vUv;\\nvarying vec4 vColor;\\n\\nconst float PI = 3.1415926535897932384626433832795;\\nconst float radius = 60.0;\\n\\nfloat map(float value, float inputMin, float inputMax, float outputMin, float outputMax, bool clamp) {\\n  if(clamp == true) {\\n    if(value < inputMin) return outputMin;\\n    if(value > inputMax) return outputMax;\\n  }\\n\\n  float p = (outputMax - outputMin) / (inputMax - inputMin);\\n  return ((value - inputMin) * p) + outputMin;\\n}\\n\\n// time, scale, offsetを使って角度を返す\\n// 範囲は -PI ~ PI\\nfloat getRad(float scale, float offset) {\\n  return map(mod(u_time * scale + offset, PI * 2.0), 0.0, PI * 2.0, -PI, PI, true);\\n}\\n\\nvec3 rotateVec3(vec3 p, float angle, vec3 axis){\\n  vec3 a = normalize(axis);\\n  float s = sin(angle);\\n  float c = cos(angle);\\n  float r = 1.0 - c;\\n  mat3 m = mat3(\\n    a.x * a.x * r + c,\\n    a.y * a.x * r + a.z * s,\\n    a.z * a.x * r - a.y * s,\\n    a.x * a.y * r - a.z * s,\\n    a.y * a.y * r + c,\\n    a.z * a.y * r + a.x * s,\\n    a.x * a.z * r + a.y * s,\\n    a.y * a.z * r - a.x * s,\\n    a.z * a.z * r + c\\n  );\\n  return m * p;\\n}\\n\\n// hsvの値をrgbに変換\\nvec3 hsv2rgb(vec3 c) {\\n  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\\n  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\\n  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\\n}\\n\\n// 距離から透明度を計算\\nfloat getAlpha(float distance) {\\n  float da = abs(distance - 400.0) / 500.0;\\n  return clamp(1.0 - da, 0.0, 1.0);\\n}\\n\\nvoid main() {\\n  vec3 pos = position;\\n  float theta;\\n\\n  //\\n  // animation1\\n  //\\n\\n  // y軸を中心にリング状になるように文字を配置\\n  pos -= animationValue1 * position;\\n  theta = getRad(4.0, (randomValues.x + randomValues.y + randomValues.z) * 20.0);\\n  pos.z += animationValue1 * (radius + radius * map(sin(theta), -1.0, 1.0, 0.0, 1.0, true));\\n  theta = getRad(4.0, randomValues.x * 20.0);\\n  pos = rotateVec3(pos, animationValue1 * theta,vec3(0.0, 1.0, 0.0));\\n  theta = getRad(4.0, randomValues.y * 20.0);\\n  pos = rotateVec3(pos, animationValue1 * theta,vec3(1.0, 0.0, 0.0));\\n  theta = getRad(4.0, randomValues.z * 20.0);\\n  pos = rotateVec3(pos, animationValue1 * theta,vec3(0.0, 0.0, 1.0));\\n\\n  //\\n  // animation2\\n  //\\n\\n  float numRings = 8.0;\\n  float ringIndex = mod(charIndex, numRings);\\n  float numCharasPerRing = numChars / numRings;\\n\\n  pos.y += animationValue2 * map(ringIndex, 0.0, numRings -1.0, -60.0, 60.0, true);\\n  pos.z += animationValue2 * radius;\\n\\n  theta = getRad(10.0, PI * 2.0 / numCharasPerRing * mod((charIndex - ringIndex) / numRings, numCharasPerRing));\\n  pos = rotateVec3(pos, animationValue2 * theta, vec3(0.0, 1.0, 0.0));\\n\\n\\n\\n  //\\n  // animation3\\n  //\\n\\n  pos.z += animationValue3 * radius;\\n  theta = getRad(6.0, randomValues.x * 10.0);\\n  pos = rotateVec3(pos, animationValue3 * theta, vec3(0.0, 1.0, 0.0));\\n  theta = getRad(6.0, randomValues.y * 10.0);\\n  pos = rotateVec3(pos, animationValue3 * theta, vec3(1.0, 0.0, 0.0));\\n  theta = getRad(6.0, randomValues.z * 10.0);\\n  pos = rotateVec3(pos, animationValue3 * theta, vec3(0.0, 0.0, 1.0));\\n\\n  //\\n  // フラグメントシェーダーに渡すUV座標を計算\\n  //\\n\\n  // テクスチャの文字何番目を使うか\\n  float txtTextureIndex = mod(charIndex, textureTxtLength);\\n\\n  // テクスチャの横方向のグリッド単位\\n  float uUnit = 1.0 / numTextureGridCols;\\n\\n  // テクスチャの縦方向のグリッド単位\\n  float vUnit = 1.0 / numTextureGridRows;\\n\\n  // uv代入\\n  vUv = vec2(\\n        (uv.x + mod(txtTextureIndex, numTextureGridCols)) * uUnit,\\n        (uv.y + floor(txtTextureIndex / numTextureGridCols)) * vUnit\\n      );\\n\\n  //\\n  // 文字色計算\\n  //\\n\\n  vec4 modelPos = modelMatrix * vec4(pos, 1.0);\\n  vec4 modelViewPos = viewMatrix * modelPos;\\n  modelViewPos += vec4(position, 0.0) * animationValue1;\\n  gl_Position = projectionMatrix * modelViewPos;\\n\\n  // カメラからの距離\\n  float d = distance(cameraPosition, modelPos.xyz);\\n\\n  vColor = vec4(hsv2rgb(\\n        vec3(\\n          (sin(getRad(2.0, randomValues.x * 2.0)) + 1.0) * 0.5,\\n          0.8,\\n          0.8\\n          )\\n        ), getAlpha(d));\\n\\n\\n  /* vUv =  uv; */\\n}\\n\"\n\n//# sourceURL=webpack:///./src/kvlt04/Canvas/shader/vert.glsl?");

/***/ }),

/***/ "./src/kvlt04/main.js":
/*!****************************!*\
  !*** ./src/kvlt04/main.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Canvas_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas/_index */ \"./src/kvlt04/Canvas/_index.js\");\n\n\n(function () {\n  new _Canvas_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n})();\n\n//# sourceURL=webpack:///./src/kvlt04/main.js?");

/***/ })

/******/ });