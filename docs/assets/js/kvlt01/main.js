!function(e){function t(t){for(var r,a,u=t[0],c=t[1],f=t[2],s=0,p=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(l&&l(t);p.length;)p.shift()();return i.push.apply(i,f||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={1:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var l=c;i.push([75,0]),n()}({43:function(e,t){e.exports="precision highp float;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nattribute vec3 position;\nattribute vec2 uv;\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  vec3 pos = position;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}\n"},44:function(e,t){e.exports="precision highp float;\n\nuniform sampler2D texture;\nuniform float time;\nuniform float tween;\nuniform float wd;\nuniform float speed;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec2 uv = vUv;\n  // 0-1で変化するtweenを0-1-0に変換する\n  float tween010 = sin(tween * 3.14);\n\n  float t = time * speed;\n  uv.x += .05 * (sin(wd * uv.y + t)) * tween; // x軸に対してy軸ずらす\n  uv.y += .05 * (sin(wd * uv.x + t)) * tween; // y軸に対してx軸ずらす\n\n  vec4 color = texture2D(texture, uv);\n\n\n  gl_FragColor = vec4(color);\n}\n"},75:function(e,t,n){"use strict";n.r(t);var r=n(27),o=n.n(r),i=n(39),a=n(14),u={width:100,height:100,halfWidth:50,halfHeight:50,cameraZ:500,dpr:1,aspectRatio:1},c=n(40);function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=document.getElementById("CanvasContainer"),this.setConfig(),this.renderer=new c.a({alpha:!0,antialias:!1}),this.renderer.setSize(u.width,u.height),this.renderer.setPixelRatio(u.dpr),this.container.appendChild(this.renderer.domElement)}var t,n,r;return t=e,(n=[{key:"setConfig",value:function(){var e=this.container.getBoundingClientRect(),t=e.width,n=e.height;u.dpr=Math.min(window.devicePixelRatio,2),u.width=t,u.height=n,u.halfWidth=u.width/2,u.halfHeight=u.height/2,u.aspectRatio=u.width/u.height}},{key:"resizeScene",value:function(){this.renderer.setSize(u.width,u.height)}}])&&f(t.prototype,n),r&&f(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),s=n(13),p=n(29),d=n(26),h=n(38),v=n(0),y=n(32),m=n(3),b=n(22),w=n.n(b),g=n(43),O=n.n(g),x=n(44),j=n.n(x);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return(_=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=C(e);if(t){var o=C(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return k(this,n)}}function k(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E=new w.a,z={wd:10,speed:5,fontSize:90};E.addInput(z,"wd",{label:"wave detail!",min:0,max:20}),E.addInput(z,"speed",{min:1,max:50});var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(i,e);var t,n,r,o=R(i);function i(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),t=o.call(this);var n=e.element,r=e.width,a=e.height;t.geometry=new p.a(r,a,1,1);var u=t.createTexture({text:n.dataset.text,width:r,height:a,fontSize:65});return t.material=new d.a({uniforms:{texture:{value:u},time:{value:0},tween:{value:0},wd:{value:0},speed:{value:1}},vertexShader:O.a,fragmentShader:j.a,transparent:!0}),n.addEventListener("pointerenter",(function(e){e.preventDefault();var n=t.material.uniforms;y.b.to(n.tween,1,{value:1,ease:m.b.easeOut})})),n.addEventListener("pointerleave",(function(){var e=t.material.uniforms;y.b.to(e.tween,1,{value:0,ease:m.b.easeOut})})),t}return t=i,(n=[{key:"createTexture",value:function(e){var t=document.createElement("canvas"),n=e.width*u.dpr,r=e.height*u.dpr;t.width=n,t.height=r;var o=t.getContext("2d");o.font="bold ".concat(e.fontSize*u.dpr,"px UnifrakturCook"),o.textAlign="center",o.textBaseline="middle",o.fillStyle="rgba(255, 255, 255, 1.0)",o.fillText(e.text.toUpperCase(),n/2,r/2),console.log(o);var i=new h.a(t);return i.needsUpdate=!1,i.minFilter=v.P,i.magFilter=v.P,i.format=v.tb,i}},{key:"update",value:function(e){this.material.uniforms.time.value=e,this.material.uniforms.wd.value=z.wd,this.material.uniforms.speed.value=z.speed}}])&&S(t.prototype,n),r&&S(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(s.a);function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t){return(F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=L(e);if(t){var o=L(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return U(this,n)}}function U(e,t){if(t&&("object"===M(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return I(e)}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)}(c,e);var t,n,r,o=B(c);function c(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(e=o.call(this)).scenes=[],e.items=[],e.numItems=0,e.resizeFunction=e.resize.bind(I(e)),e.updateFunction=e.update.bind(I(e)),window.addEventListener("resize",e.resizeFunction),e.init(),e}return t=c,(n=[{key:"init",value:function(){var e=this;document.querySelectorAll(".menu-item").forEach((function(t){var n=new i.a;n.userData.element=t;var r=t.getBoundingClientRect(),o=r.width,c=r.height,f=new a.a(e.calcViewportFov(.5*c),o/c,.001,1e4);f.position.set(0,0,u.cameraZ),n.userData.camera=f;var l=new T({element:t,width:o,height:c});n.add(l),e.scenes.push(n),e.items.push(l)})),this.numItems=this.items.length,this.start()}},{key:"calcViewportFov",value:function(e){return 2*Math.atan(e/u.cameraZ)*(180/Math.PI)}},{key:"start",value:function(){this.resize(),this.update()}},{key:"resize",value:function(){this.setConfig(),this.resizeScene()}},{key:"update",value:function(){requestAnimationFrame(this.updateFunction);var e=.001*performance.now();this.renderer.setScissorTest(!0);for(var t=0;t<this.numItems;t++){var n=this.scenes[t],r=n.userData.camera,o=n.userData.element.getBoundingClientRect(),i=o.width,a=o.height,c=o.left,f=u.height-o.bottom;this.items[t].update(e),this.renderer.setViewport(c,f,i,a),this.renderer.setScissor(c,f,i,a),this.renderer.render(n,r)}}}])&&D(t.prototype,n),r&&D(t,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(l);document.addEventListener("DOMContentLoaded",(function(){o.a.load({google:{families:["UnifrakturCook:700"]},active:function(){new V}})}))}});