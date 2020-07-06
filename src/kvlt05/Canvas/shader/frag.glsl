precision mediump float;

#define PI 3.141592653589
#define PI2 6.28318530718

uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D txtTexture;

varying vec2 vUv;
varying vec4 vColor;

void main() {
  vec2 uv = vUv;
  vec4 color = texture2D(txtTexture, uv) * vColor;
  gl_FragColor = color;
}
