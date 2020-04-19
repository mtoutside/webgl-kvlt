precision mediump float;

uniform mat4 modelViewMatrix;
uniform mat4 modelMatrix;
uniform mat4 projectionMatrix;
uniform vec3 cameraPosition;
uniform float u_time;
uniform float numChars;
uniform float numTextureGridRows;
uniform float numTextureGridCols;
uniform float textureTxtLength;

uniform float animationValue1;
uniform float animationValue2;
uniform float animationValue3;

uniform float u_wd;
uniform float u_wd2;
uniform float u_speed;

attribute vec3 position;
attribute vec3 randomValues;
attribute vec3 normal;
attribute vec2 uv;
attribute float charIndex;

varying vec2 vUv;
varying vec4 vColor;

const float PI = 3.1415926535897932384626433832795;
const float radius = 60.0;

float map(float value, float inputMin, float inputMax, float outputMin, float outputMax, bool clamp) {
  if(clamp == true) {
    if(value < inputMin) return outputMin;
    if(value > inputMax) return outputMax;
  }

  float p = (outputMax - outputMin) / (inputMax - inputMin);
  return ((value - inputMin) * p) + outputMin;
}

float getRad(float scale, float offset) {
  return map(mod(u_time * scale + offset, PI * 2.0), 0.0, PI * 2.0, -PI, PI, true);
}

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
  vec3 pos = position;
  float theta;

  //
  // animation1
  //

  // y軸を中心にリング状になるように文字を配置
  pos.z += animationValue1 * radius;
  theta = getRad(10.0, PI * 2.0 / numChars * charIndex);
  pos = rotateVec3(pos, animationValue1 * theta, vec3(0.0, 1.0, 0.0));

  //
  // animation2
  //

  pos.z += animationValue2 * radius;
  theta = getRad(4.0, randomValues.x * 20.0);
  pos = rotateVec3(pos, animationValue2 * theta, vec3(0.0, 1.0, 0.0));
  theta = getRad(4.0, randomValues.y * 20.0);
  pos = rotateVec3(pos, animationValue2 * theta, vec3(1.0, 0.0, 0.0));
  theta = getRad(4.0, randomValues.z * 20.0);
  pos = rotateVec3(pos, animationValue2 * theta, vec3(0.0, 0.0, 1.0));


  //
  // animation3
  //

  pos.x += animationValue3 * 20.0 * (charIndex - (numChars - 1.0) * 0.5);
  theta = getRad(20.0, charIndex * 20.0);
  pos = rotateVec3(pos, animationValue3 * theta, vec3(1.0, 0.0, 0.0));

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

  vColor = vec4(1.0, 0.0, 0.0, 1.0);
  vUv = uv;

}
