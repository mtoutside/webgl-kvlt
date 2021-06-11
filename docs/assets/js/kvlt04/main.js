!function(t){function e(e){for(var i,o,s=e[0],u=e[1],h=e[2],c=0,f=[];c<s.length;c++)o=s[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);for(l&&l(e);f.length;)f.shift()();return r.push.apply(r,h||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={4:0},r=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var h=0;h<s.length;h++)e(s[h]);var l=u;r.push([73,0]),n()}({47:function(t,e){t.exports="precision mediump float;\n\nuniform mat4 viewMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 projectionMatrix;\nuniform vec3 cameraPosition;\nuniform float u_time;\nuniform float numChars;\nuniform float numTextureGridRows;\nuniform float numTextureGridCols;\nuniform float textureTxtLength;\n\nuniform float animationValue1;\nuniform float animationValue2;\nuniform float animationValue3;\n\nuniform float u_wd;\nuniform float u_wd2;\nuniform float u_speed;\n\nattribute vec3 position;\nattribute vec3 randomValues;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute float charIndex;\n\nvarying vec2 vUv;\nvarying vec4 vColor;\n\nconst float PI = 3.1415926535897932384626433832795;\nconst float radius = 60.0;\n\nfloat map(float value, float inputMin, float inputMax, float outputMin, float outputMax, bool clamp) {\n  if(clamp == true) {\n    if(value < inputMin) return outputMin;\n    if(value > inputMax) return outputMax;\n  }\n\n  float p = (outputMax - outputMin) / (inputMax - inputMin);\n  return ((value - inputMin) * p) + outputMin;\n}\n\n// time, scale, offsetを使って角度を返す\n// 範囲は -PI ~ PI\nfloat getRad(float scale, float offset) {\n  return map(mod(u_time * scale + offset, PI * 2.0), 0.0, PI * 2.0, -PI, PI, true);\n}\n\nvec3 rotateVec3(vec3 p, float angle, vec3 axis){\n  vec3 a = normalize(axis);\n  float s = sin(angle);\n  float c = cos(angle);\n  float r = 1.0 - c;\n  mat3 m = mat3(\n    a.x * a.x * r + c,\n    a.y * a.x * r + a.z * s,\n    a.z * a.x * r - a.y * s,\n    a.x * a.y * r - a.z * s,\n    a.y * a.y * r + c,\n    a.z * a.y * r + a.x * s,\n    a.x * a.z * r + a.y * s,\n    a.y * a.z * r - a.x * s,\n    a.z * a.z * r + c\n  );\n  return m * p;\n}\n\n// hsvの値をrgbに変換\nvec3 hsv2rgb(vec3 c) {\n  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n\n// 距離から透明度を計算\nfloat getAlpha(float distance) {\n  float da = abs(distance - 400.0) / 500.0;\n  return clamp(1.0 - da, 0.0, 1.0);\n}\n\nvoid main() {\n  vec3 pos = position;\n  float theta;\n\n  //\n  // animation1\n  //\n\n  // y軸を中心にリング状になるように文字を配置\n  pos -= animationValue1 * position;\n  theta = getRad(4.0, (randomValues.x + randomValues.y + randomValues.z) * 20.0);\n  pos.z += animationValue1 * (radius + radius * map(sin(theta), -1.0, 1.0, 0.0, 1.0, true));\n  theta = getRad(4.0, randomValues.x * 20.0);\n  pos = rotateVec3(pos, animationValue1 * theta,vec3(0.0, 1.0, 0.0));\n  theta = getRad(4.0, randomValues.y * 20.0);\n  pos = rotateVec3(pos, animationValue1 * theta,vec3(1.0, 0.0, 0.0));\n  theta = getRad(4.0, randomValues.z * 20.0);\n  pos = rotateVec3(pos, animationValue1 * theta,vec3(0.0, 0.0, 1.0));\n\n  //\n  // animation2\n  //\n\n  float numRings = 8.0;\n  float ringIndex = mod(charIndex, numRings);\n  float numCharasPerRing = numChars / numRings;\n\n  pos.y += animationValue2 * map(ringIndex, 0.0, numRings -1.0, -60.0, 60.0, true);\n  pos.z += animationValue2 * radius;\n\n  theta = getRad(10.0, PI * 2.0 / numCharasPerRing * mod((charIndex - ringIndex) / numRings, numCharasPerRing));\n  pos = rotateVec3(pos, animationValue2 * theta, vec3(0.0, 1.0, 0.0));\n\n\n\n  //\n  // animation3\n  //\n\n  pos.z += animationValue3 * radius;\n  theta = getRad(6.0, randomValues.x * 10.0);\n  pos = rotateVec3(pos, animationValue3 * theta, vec3(0.0, 1.0, 0.0));\n  theta = getRad(6.0, randomValues.y * 10.0);\n  pos = rotateVec3(pos, animationValue3 * theta, vec3(1.0, 0.0, 0.0));\n  theta = getRad(6.0, randomValues.z * 10.0);\n  pos = rotateVec3(pos, animationValue3 * theta, vec3(0.0, 0.0, 1.0));\n\n  //\n  // フラグメントシェーダーに渡すUV座標を計算\n  //\n\n  // テクスチャの文字何番目を使うか\n  float txtTextureIndex = mod(charIndex, textureTxtLength);\n\n  // テクスチャの横方向のグリッド単位\n  float uUnit = 1.0 / numTextureGridCols;\n\n  // テクスチャの縦方向のグリッド単位\n  float vUnit = 1.0 / numTextureGridRows;\n\n  // uv代入\n  vUv = vec2(\n        (uv.x + mod(txtTextureIndex, numTextureGridCols)) * uUnit,\n        (uv.y + floor(txtTextureIndex / numTextureGridCols)) * vUnit\n      );\n\n  //\n  // 文字色計算\n  //\n\n  vec4 modelPos = modelMatrix * vec4(pos, 1.0);\n  vec4 modelViewPos = viewMatrix * modelPos;\n  modelViewPos += vec4(position, 0.0) * animationValue1;\n  gl_Position = projectionMatrix * modelViewPos;\n\n  // カメラからの距離\n  float d = distance(cameraPosition, modelPos.xyz);\n\n  vColor = vec4(hsv2rgb(\n        vec3(\n          (sin(getRad(2.0, randomValues.x * 2.0)) + 1.0) * 0.5,\n          0.8,\n          0.8\n          )\n        ), getAlpha(d));\n\n\n  /* vUv =  uv; */\n}\n"},48:function(t,e){t.exports="precision mediump float;\n\n#define PI 3.141592653589\n#define PI2 6.28318530718\n\nuniform vec2 u_mouse;\nuniform vec2 u_resolution;\nuniform float u_time;\nuniform sampler2D txtTexture;\n\nvarying vec2 vUv;\nvarying vec4 vColor;\n\nvoid main() {\n  vec2 uv = vUv;\n  vec4 color = texture2D(txtTexture, uv) * vColor;\n  if(color.a == 0.0) {\n    discard;\n  } else {\n    gl_FragColor = color;\n  }\n}\n"},73:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n(17);function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var o=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.numChars=e,this.charWidth=n,this.geometry=new i.BufferGeometry,this.init()}var e,n,a;return e=t,(n=[{key:"init",value:function(){this.vertices=[],this.charIndices=[],this.randomValues=[],this.uvs=[],this.indices=[];for(var t=this.charWidth,e=this.charWidth/2,n=t/2,a=0;a<this.numChars;a++){var r=[Math.random(),Math.random(),Math.random()];this.vertices.push(-e),this.vertices.push(n),this.vertices.push(0),this.uvs.push(0),this.uvs.push(0),this.charIndices.push(a),this.randomValues.push(r[0]),this.randomValues.push(r[1]),this.randomValues.push(r[2]),this.vertices.push(e),this.vertices.push(n),this.vertices.push(0),this.uvs.push(1),this.uvs.push(0),this.charIndices.push(a),this.randomValues.push(r[0]),this.randomValues.push(r[1]),this.randomValues.push(r[2]),this.vertices.push(-e),this.vertices.push(-n),this.vertices.push(0),this.uvs.push(0),this.uvs.push(1),this.charIndices.push(a),this.randomValues.push(r[0]),this.randomValues.push(r[1]),this.randomValues.push(r[2]),this.vertices.push(e),this.vertices.push(-n),this.vertices.push(0),this.uvs.push(1),this.uvs.push(1),this.charIndices.push(a),this.randomValues.push(r[0]),this.randomValues.push(r[1]),this.randomValues.push(r[2]);var o=4*a;this.indices.push(o+0),this.indices.push(o+2),this.indices.push(o+1),this.indices.push(o+2),this.indices.push(o+3),this.indices.push(o+1)}this.geometry.addAttribute("position",new i.BufferAttribute(new Float32Array(this.vertices),3)),this.geometry.addAttribute("randomValues",new i.BufferAttribute(new Float32Array(this.randomValues),3)),this.geometry.addAttribute("charIndex",new i.BufferAttribute(new Uint16Array(this.charIndices),1)),this.geometry.addAttribute("uv",new i.BufferAttribute(new Float32Array(this.uvs),2)),this.geometry.setIndex(new i.BufferAttribute(new Uint16Array(this.indices),1)),delete this.vertices,delete this.charIndices,delete this.randomValues,delete this.uvs,delete this.indices,this.geometry.computeVertexNormals()}},{key:"getGeometry",value:function(){return this.geometry}}])&&r(e.prototype,n),a&&r(e,a),t}(),s=n(22),u=n.n(s),h=n(47),l=n.n(h),c=n(48),f=n.n(c);function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=y(t);if(e){var a=y(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return x(this,n)}}function x(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var g=new u.a,b={animation1:1,animation2:0,animation3:0};g.addInput(b,"animation1",{label:"animation1",min:0,max:1}),g.addInput(b,"animation2",{label:"animation2",min:0,max:1}),g.addInput(b,"animation3",{label:"animation3",min:0,max:1});var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(s,t);var e,n,a,r=v(s);function s(t,e,n,a){var u;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(u=r.call(this)).numChars=t,u.charWidth=e,u.numTextureGridCols=n,u.textureGridsize=a,u.geometry=new o(u.numChars,u.charWidth).getGeometry(),console.log(u.geometry),u.material=new i.RawShaderMaterial({transparent:!0,side:i.DoubleSide,uniforms:{txtTexture:{type:"t"},u_time:{type:"1f",value:0},numChars:{type:"1f",value:u.numChars},numTextureGridCols:{type:"1f",value:u.numTextureGridCols},numTextureGridRows:{type:"1f",value:1},textureTxtLength:{type:"1f",value:1},animationValue1:{type:"1f",value:b.animation1},animationValue2:{type:"1f",value:b.animation2},animationValue3:{type:"1f",value:b.animation3}},vertexShader:l.a,fragmentShader:f.a}),u}return e=s,(n=[{key:"update",value:function(){this.material.uniforms.u_time.value+=.001,this.material.uniforms.animationValue1.value=b.animation1,this.material.uniforms.animationValue2.value=b.animation2,this.material.uniforms.animationValue3.value=b.animation3}},{key:"createTexture",value:function(t,e){var n,a,r=t.length,o=Math.ceil(r/this.numTextureGridCols);this.txtCanvas=document.createElement("canvas"),this.txtCanvasCtx=this.txtCanvas.getContext("2d"),this.txtCanvas.width=this.textureGridsize*this.numTextureGridCols,this.txtCanvas.height=this.textureGridsize*o,this.txtCanvasCtx.clearRect(0,0,this.txtCanvas.width,this.txtCanvas.height),this.txtCanvasCtx.font="normal ".concat(.8*this.textureGridsize,"px ").concat(e),this.txtCanvasCtx.textAlign="center",this.txtCanvasCtx.fillStyle="#ffffff";for(var s=0,u=r;s<u;s++)n=s%this.numTextureGridCols,a=Math.floor(s/this.numTextureGridCols),this.txtCanvasCtx.fillText(t.charAt(s),n*this.textureGridsize+this.textureGridsize/2,a*this.textureGridsize+.8*this.textureGridsize,this.textureGridsize);this.txtTexture=new i.Texture(this.txtCanvas),this.txtTexture.flipY=!1,this.txtTexture.needsUpdate=!0,this.txtTexture.minFilter=i.LinearFilter,this.txtTexture.magFilter=i.LinearFilter,this.material.uniforms.txtTexture.value=this.txtTexture,this.material.uniforms.numTextureGridRows.value=o,this.material.uniforms.textureTxtLength.value=r}},{key:"setUniform",value:function(t,e){this.material.uniforms[t].value=e}}])&&d(e.prototype,n),a&&d(e,a),s}(i.Mesh),C=n(28),V=n.n(C),T={width:100,height:100,halfWidth:50,halfHeight:50,cameraZ:500,dpr:1,aspectRatio:1};function P(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function z(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}new(function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:16,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:128,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"Cabin Sketch";P(this,t),this.numChars=e,this.charWidth=n,this.numTextureGridCols=r,this.textureGridSize=o,this.fontFamily=s,this.animationValue1=1,this.animationValue2=0,this.animationValue3=0,this.container=document.getElementById("CanvasContainer"),this.setConfig(),this.renderer=new i.WebGLRenderer({alpha:!0,antialias:!0}),this.renderer.setClearColor(new i.Color(16777215)),this.renderer.setSize(T.width,T.height),this.renderer.setPixelRatio(T.dpr),this.container.appendChild(this.renderer.domElement),this.resizeFunction=this.resize.bind(this),this.updateFunction=this.update.bind(this),window.addEventListener("resize",this.resizeFunction),this.scene=new i.Scene,this.camera=new i.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1e4),this.camera.position.set(0,0,100),this.controls=new a.a(this.camera,this.renderer.domElement),this.init()}var e,n,r;return e=t,(n=[{key:"setConfig",value:function(){var t=this.container.getBoundingClientRect(),e=t.width,n=t.height;T.dpr=Math.min(window.devicePixelRatio,2),T.width=e,T.height=n,T.halfWidth=T.width/2,T.halfHeight=T.height/2,T.aspectRatio=T.width/T.height}},{key:"resizeScene",value:function(){this.renderer.setSize(T.width,T.height)}},{key:"init",value:function(){var t=this;this.initFloatingChars().then((function(){t.start()}))}},{key:"initFloatingChars",value:function(){var t=this;return new Promise((function(e){V.a.load({google:{families:[t.fontFamily]},active:function(){console.log("font loaded"),t.floatingChars=new w(t.numChars,t.charWidth,t.numTextureGridCols,t.textureGridSize),t.floatingChars.createTexture("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|:;?<>,.",t.fontFamily),t.scene.add(t.floatingChars),e()}})}))}},{key:"start",value:function(){this.resize(),this.update()}},{key:"resize",value:function(){this.setConfig(),this.resizeScene()}},{key:"update",value:function(){requestAnimationFrame(this.updateFunction),this.floatingChars.update(this.camera),this.renderer.render(this.scene,this.camera)}}])&&z(e.prototype,n),r&&z(e,r),t}())}});