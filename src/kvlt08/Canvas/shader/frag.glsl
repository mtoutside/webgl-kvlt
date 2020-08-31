precision mediump float;

#define PI 3.141592653589
#define PI2 6.28318530718

uniform float time;
uniform sampler2D uTexture;

varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vec2 repeat = -vec2(12.0, 3.0);
  vec2 uv = fract(vUv * repeat - vec2(time, 0.0));
  vec3 texture = texture2D(uTexture, uv).rgb;
  gl_FragColor = vec4(texture, 1.0);
}
