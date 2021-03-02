!function(e){function t(t){for(var i,o,u=t[0],s=t[1],l=t[2],d=0,h=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);for(c&&c(t);h.length;)h.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,u=1;u<n.length;u++){var s=n[u];0!==r[s]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={2:0},a=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var c=s;a.push([76,0]),n()}({43:function(e,t){e.exports="precision mediump float;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nattribute vec3 position;\nattribute vec2 uv;\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  vec3 pos = position;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}\n"},44:function(e,t){e.exports="precision mediump float;\n\nuniform sampler2D texture;\nuniform float time;\nuniform float resolution;\nuniform float tween;\nuniform float wd;\nuniform float speed;\n\nvarying vec2 vUv;\n\nvoid main() {\n  /* vec2 uv = vUv; */\n  // 0-1で変化するtweenを0-1-0に変換する\n\n  float t = time * speed;\n\n  vec2 repeat = vec2(8.0, 8.0); // (行, 列)回繰り返し\n  vec2 uv = fract(vUv * repeat + vec2(t, 0.0));\n\n  uv += vec2(sin(t), 0.0);\n\n  /* uv.x += .008 * (sin(wd * uv.y * t)); */\n  /* uv.y += .008 * (sin(wd * uv.x * t)); */\n\n  vec3 color = texture2D(texture, uv).rgb;\n  gl_FragColor = vec4(color, 1.0);\n}\n"},76:function(e,t,n){"use strict";n.r(t);var i=n(28),r=n.n(i),a=n(33),o=n(42),u=n(37),s=n(20),l=n(30),c=n(35),d=n(36),h=n(0),f=(n(18),{width:window.innerWidth,height:window.innerHeight,cameraZ:1e3,dpr:1,aspectRatio:1}),v=n(22),p=n.n(v),m=n(43),w=n.n(m),g=n(44),x=n.n(g);function y(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var b=new p.a,S={wd:10,speed:.1};b.addInput(S,"wd",{label:"wave detail",min:0,max:20}),b.addInput(S,"speed",{min:0,max:10});var z=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=document.getElementById("CanvasContainer"),this.setConfig(),this.renderer=new u.a({alpha:!0,antialias:!1}),this.renderer.setSize(f.width,f.height),this.renderer.setPixelRatio(f.dpr),this.container.appendChild(this.renderer.domElement),this.resizeFunction=this.resize.bind(this),this.updateFunction=this.update.bind(this),window.addEventListener("resize",this.resizeFunction),this.scene=new a.a,this.camera=new o.a(-1,1,1,-1,0,-1),this.init()}var t,n,i;return t=e,(n=[{key:"init",value:function(){this.createMesh(),this.start()}},{key:"createMesh",value:function(){this.geometry=new l.a(2,2,1,1),this.texture=this.createTexture({text:"KVLT",fontSize:130}),this.material=new c.a({uniforms:{texture:{value:this.texture},time:{value:0},tween:{value:0},resolution:{value:f.aspectRatio},wd:{value:0},speed:{value:1}},vertexShader:w.a,fragmentShader:x.a,transparent:!1}),console.log(this.texture),this.mesh=new s.a(this.geometry,this.material),this.scene.add(this.mesh)}},{key:"createTexture",value:function(e){var t=document.createElement("canvas"),n=t.getContext("2d");n.font="bold ".concat(e.fontSize*f.dpr,"px '").concat("Ubuntu Condensed","'");var i=n.measureText(e.text),r=i.width,a=e.fontSize*f.dpr*.8;t.width=r,t.height=a,console.log(t),n.font="bold ".concat(e.fontSize*f.dpr,"px '").concat("Ubuntu Condensed","'"),n.textAlign="left",n.textBaseline="hanging",n.fillStyle="rgba(255, 255, 255, 1.0)",n.fillText(e.text,-5,0),console.log(i);var o=new d.a(t);return o.needsUpdate=!1,o.minFilter=h.Q,o.magFilter=h.Q,o.format=h.ub,o}},{key:"setConfig",value:function(){var e=this.container.getBoundingClientRect(),t=e.width,n=e.height;f.dpr=Math.min(window.devicePixelRatio,2),f.width=t,f.height=n,f.halfWidth=f.width/2,f.halfHeight=f.height/2,f.aspectRatio=f.width/f.height}},{key:"resizeScene",value:function(){this.renderer.setSize(f.width,f.height)}},{key:"start",value:function(){this.resize(),this.update()}},{key:"resize",value:function(){this.setConfig(),this.resizeScene()}},{key:"update",value:function(){requestAnimationFrame(this.updateFunction),this.time=.001*performance.now(),this.material.uniforms.time.value=this.time,this.material.uniforms.wd.value=S.wd,this.material.uniforms.speed.value=S.speed,this.renderer.render(this.scene,this.camera)}}])&&y(t.prototype,n),i&&y(t,i),e}();document.addEventListener("DOMContentLoaded",(function(){r.a.load({google:{families:["Ubuntu Condensed"]},active:function(){new z}})}))}});