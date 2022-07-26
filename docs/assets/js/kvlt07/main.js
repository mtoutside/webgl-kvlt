!function(e){function t(t){for(var n,o,s=t[0],h=t[1],c=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in h)Object.prototype.hasOwnProperty.call(h,n)&&(e[n]=h[n]);for(u&&u(t);d.length;)d.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],n=!0,s=1;s<i.length;s++){var h=i[s];0!==a[h]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=i[0]))}return e}var n={},a={7:0},r=[];function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=n,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],h=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=h;r.push([81,0]),i()}({53:function(e,t){e.exports="precision mediump float;\n\n#define PI 3.141592653589\n#define PI2 6.28318530718\n\nuniform float time;\n\nvarying vec4 vMvPosition;\nvarying vec3 vColor;\n\nvoid main() {\n  vec2 uv = gl_PointCoord.xy * 2.0 - 1.0;\n  float orb = 0.1 / length(uv * 1.0);\n  orb = smoothstep(0.0, 1.0, orb);\n  vec3 color = vec3(orb) * vColor;\n  gl_FragColor = vec4(color, 1.0);\n}\n"},54:function(e,t){e.exports="precision mediump float;\n\nattribute vec3 color;\n\nuniform float time;\nuniform float size;\n\nvarying vec4 vMvPosition;\nvarying vec3 vColor;\n\nfloat map(float value, float inputMin, float inputMax, float outputMin, float outputMax) {\n  return outputMin + (outputMax - outputMin) * ((value - inputMin) / (inputMax - inputMin));\n}\n\nvec3 rotateVec3(vec3 p, float angle, vec3 axis){\n  vec3 a = normalize(axis);\n  float s = sin(angle);\n  float c = cos(angle);\n  float r = 1.0 - c;\n  mat3 m = mat3(\n    a.x * a.x * r + c,\n    a.y * a.x * r + a.z * s,\n    a.z * a.x * r - a.y * s,\n    a.x * a.y * r - a.z * s,\n    a.y * a.y * r + c,\n    a.z * a.y * r + a.x * s,\n    a.x * a.z * r + a.y * s,\n    a.y * a.z * r - a.x * s,\n    a.z * a.z * r + c\n  );\n  return m * p;\n}\n\n// hsvの値をrgbに変換\nvec3 hsv2rgb(vec3 c) {\n  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n\nvoid main() {\n  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n  vMvPosition = mvPosition;\n  vColor = color;\n\n  gl_PointSize = size;\n  gl_Position = projectionMatrix * mvPosition;\n}\n"},81:function(e,t,i){"use strict";i.r(t);var n=i(1),a=i(16),r=i(53),o=i.n(r),s=i(54),h=i.n(s),c={width:100,height:100,halfWidth:50,halfHeight:50,cameraZ:500,dpr:1,aspectRatio:1};function u(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.clock=new n.Clock,this.container=document.getElementById("CanvasContainer"),this.particleIndexArray=[],this.uniforms={time:{type:"f",value:0},size:{type:"f",value:10}},this.fftSize=2048,this.frequencyRange={bass:[20,140],lowMid:[140,400],mid:[400,2600],highMid:[2600,5200],treble:[5200,14e3]},this.setConfig(),this.renderer=new n.WebGLRenderer({alpha:!0,antialias:!0}),this.renderer.setSize(c.width,c.height),this.renderer.setPixelRatio(c.dpr),this.container.appendChild(this.renderer.domElement),this.resizeFunction=this.resize.bind(this),this.updateFunction=this.update.bind(this),window.addEventListener("resize",this.resizeFunction),this.scene=new n.Scene,this.camera=new n.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1e4),this.camera.position.set(0,0,100),this.z=Math.min(window.innerWidth,window.innerHeight),this.camera.lookAt(0,0,this.z),this.controls=new a.a(this.camera,this.renderer.domElement),this.init()}var t,i,r;return t=e,(i=[{key:"setConfig",value:function(){var e=this.container.getBoundingClientRect(),t=e.width,i=e.height;c.dpr=Math.min(window.devicePixelRatio,2),c.width=t,c.height=i,c.halfWidth=c.width/2,c.halfHeight=c.height/2,c.aspectRatio=c.width/c.height}},{key:"resizeScene",value:function(){this.renderer.setSize(c.width,c.height)}},{key:"init",value:function(){this.navigatorMediaDevices=navigator.mediaDevices||(navigator.mozGetUserMedia||navigator.webkitGetUserMedia?{getUserMedia:function(e){return new Promise((function(t,i){(navigator.mozGetUserMedia||navigator.webkitGetUserMedia).call(navigator,e,t,i)}))}}:null),this.navigatorMediaDevices&&(this.initAudio(),this.initVideo()),this.start()}},{key:"initVideo",value:function(){var e=this;this.video=document.getElementById("video"),this.video.autoplay=!0,navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then((function(t){e.video.srcObject=t,e.video.addEventListener("loadeddata",(function(){e.videoWidth=e.video.videoWidth,e.videoHeight=e.video.videoHeight,e.createParticles()}))})).catch((function(e){console.log(e)}))}},{key:"initAudio",value:function(){var e=this,t=new n.AudioListener;this.audio=new n.Audio(t),(new n.AudioLoader).load("assets/audio/above-the-clouds.mp3",(function(t){e.audio.setBuffer(t),e.audio.setLoop(!0),e.audio.setVolume(.5),e.audio.play()})),this.analyser=new n.AudioAnalyser(this.audio,this.fftSize)}},{key:"hexToRgb",value:function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return{r:parseInt(t[1],16)/255,g:parseInt(t[2],16)/255,b:parseInt(t[3],16)/255}}},{key:"createParticles",value:function(){var e=this.getImageData(this.video);this.geometry=new n.BufferGeometry,this.geometry.morphAttributes={},this.material=new n.ShaderMaterial({uniforms:this.uniforms,vertexShader:h.a,fragmentShader:o.a,transparent:!0,depthWrite:!1,blending:n.AdditiveBlending});for(var t=[],i=[],a=["#ff4b78","#16e36d","#162cf8","#2016e3"],r=0,s=e.height;r<s;r+=3)for(var c=0,u=e.width;c<u;c+=3){var l=4*(c+r*u);this.particleIndexArray.push(l);var d=(e.data[l]+e.data[l+1]+e.data[l+2])/3,v=d<300?d:1e4;t.push(c-e.width/2,-r+e.height/2,v);var f=this.hexToRgb(a[Math.floor(Math.random()*a.length)]);i.push(f.r,f.g,f.b)}var g=new Float32Array(t);this.geometry.addAttribute("position",new n.BufferAttribute(g,3));var p=new Float32Array(i);this.geometry.addAttribute("color",new n.BufferAttribute(p,3)),this.particles=new n.Points(this.geometry,this.material),this.scene.add(this.particles)}},{key:"getImageData",value:function(e,t){if(t&&this.imageCache)return this.imageCache;var i=e.videoWidth,n=e.videoHeight;return this.canvas.width=i,this.canvas.height=n,this.ctx.translate(i,0),this.ctx.scale(-1,1),this.ctx.drawImage(e,0,0),this.imageCache=this.ctx.getImageData(0,0,i,n),this.imageCache}},{key:"getFrequencyRangeValue",value:function(e,t){for(var i=Math.round(t[0]/24e3*e.length),n=Math.round(t[1]/24e3*e.length),a=0,r=0,o=i;o<=n;o++)a+=e[o],r+=1;return a/r/255}},{key:"mesh",value:function(){this.geometry=new n.BoxGeometry(10,10,10),this.material=new n.MeshNormalMaterial,this.mesh=new n.Mesh(this.geometry,this.material),this.scene.add(this.mesh)}},{key:"start",value:function(){this.resize(),this.update()}},{key:"resize",value:function(){this.setConfig(),this.resizeScene()}},{key:"update",value:function(){this.clock.getDelta();var e,t,i,n=this.clock.elapsedTime;if(this.uniforms.time.value+=.5,this.analyser){var a=this.analyser.getFrequencyData();e=this.getFrequencyRangeValue(a,this.frequencyRange.bass),t=this.getFrequencyRangeValue(a,this.frequencyRange.mid),i=this.getFrequencyRangeValue(a,this.frequencyRange.treble)}if(this.particles){for(var r=parseInt(n)%2==0,o=this.getImageData(this.video,r),s=0,h=0,c=this.particles.geometry.attributes.position.array.length;h<c;h+=3){var u=this.particleIndexArray[s],l=(o.data[u]+o.data[u+1]+o.data[u+2])/3;this.particles.geometry.attributes.position.array[h+2]=l<300?l<100?l*e*5:l<150?l*t*5:l*i*5:1e4,s++}this.uniforms.size.value=(e+t+i)/3*35+5,this.particles.geometry.attributes.position.needsUpdate=!0}this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.updateFunction)}}])&&u(t.prototype,i),r&&u(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}())}});