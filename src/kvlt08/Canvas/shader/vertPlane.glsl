precision mediump float;

uniform float time;

attribute vec2 uv;
attribute vec3 position;

uniform mat4 viewMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 modelMatrix;
uniform mat4 projectionMatrix;

varying vec2 vUv;
varying float vWave;


vec3 rotateVec3(vec3 p, float angle, vec3 axis){
  vec3 a = normalize(axis);
  float s = sin(angle);
  float c = cos(angle);
  float r = 1.0 - c;
  mat3 m = mat3(
      a.x * a.x * r + c,
      a.y * a.x * r + a.z * s,
      a.z * a.x * r - a.y * s,
      a.x * a.y * r - a.z * s,
      a.y * a.y * r + c,
      a.z * a.y * r + a.x * s,
      a.x * a.z * r + a.y * s,
      a.y * a.z * r - a.x * s,
      a.z * a.z * r + c
      );
  return m * p;
}

void main() {
  vUv = uv;
  vec3 pos = position;

  float freq = 0.5;
  float amp = 1.5;
  float t = time * 0.1;

  pos.z += sin((pos.x + pos.y) * freq - t) * amp;
  vWave = pos.z;

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

  gl_Position = projectionMatrix * mvPosition;
}
