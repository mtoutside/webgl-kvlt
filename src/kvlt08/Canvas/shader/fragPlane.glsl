precision mediump float;

#define PI 3.141592653589
#define PI2 6.28318530718

uniform float time;
uniform sampler2D uTexture;

varying vec2 vUv;
varying float vWave;

float map(float value, float inputMin, float inputMax, float outputMin, float outputMax) {
  return outputMin + (outputMax - outputMin) * ((value - inputMin) / (inputMax - inputMin));
}

void main() {
  float t = time * 0.02;
  vec2 repeat = vec2(2.0, 6.0);
  vec2 uv = fract(vUv * repeat + vec2(t, 0.0));
  vec3 texture = texture2D(uTexture, uv).rgb;
  /* texture *= vec3(uv.x, uv.y, 0.); */

  float wave = vWave;
  wave = map(wave, -1.0, 1.0, 0.0, 1.0);

  float shadow = 1.0 - wave;

  vec3 fragColor = texture * shadow;

  gl_FragColor = vec4(fragColor, 1.0);
}
