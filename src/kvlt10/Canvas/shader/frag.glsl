precision mediump float;

#define PI 3.141592653589
#define PI2 6.28318530718

uniform float time;

/* varying vec2 vUv; */
/* varying vec3 vPosition; */

void main() {
  float t = time * 0.02;
  vec3 fragColor = vec3((0.1 * sin(-t)), 1.0, (0.1 * sin(t)));

  gl_FragColor = vec4(fragColor, 1.0);
}
