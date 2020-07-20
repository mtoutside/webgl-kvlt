precision mediump float;

uniform mat4 viewMatrix;
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

// time, scale, offsetを使って角度を返す
// 範囲は -PI ~ PI
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

// hsvの値をrgbに変換
vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

// 距離から透明度を計算
float getAlpha(float distance) {
  float da = abs(distance - 400.0) / 500.0;
  return clamp(1.0 - da, 0.0, 1.0);
}

void main() {
  vec3 pos = position;
  float theta;

  //
  // animation1
  //

  // y軸を中心にリング状になるように文字を配置
  pos -= animationValue1 * position;
  theta = getRad(4.0, (randomValues.x + randomValues.y + randomValues.z) * 20.0);
  pos.z += animationValue1 * (radius + radius * map(sin(theta), -1.0, 1.0, 0.0, 1.0, true));
  theta = getRad(4.0, randomValues.x * 20.0);
  pos = rotateVec3(pos, animationValue1 * theta,vec3(0.0, 1.0, 0.0));
  theta = getRad(4.0, randomValues.y * 20.0);
  pos = rotateVec3(pos, animationValue1 * theta,vec3(1.0, 0.0, 0.0));
  theta = getRad(4.0, randomValues.z * 20.0);
  pos = rotateVec3(pos, animationValue1 * theta,vec3(0.0, 0.0, 1.0));

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

  //
  // フラグメントシェーダーに渡すUV座標を計算
  //

  // テクスチャの文字何番目を使うか
  float txtTextureIndex = mod(charIndex, textureTxtLength);

  // テクスチャの横方向のグリッド単位
  float uUnit = 1.0 / numTextureGridCols;

  // テクスチャの縦方向のグリッド単位
  float vUnit = 1.0 / numTextureGridRows;

  // uv代入
  vUv = vec2(
        (uv.x + mod(txtTextureIndex, numTextureGridCols)) * uUnit,
        (uv.y + floor(txtTextureIndex / numTextureGridCols)) * vUnit
      );

  //
  // 文字色計算
  //

  vec4 modelPos = modelMatrix * vec4(pos, 1.0);
  vec4 modelViewPos = viewMatrix * modelPos;
  modelViewPos += vec4(position, 0.0) * animationValue1;
  gl_Position = projectionMatrix * modelViewPos;

  // カメラからの距離
  float d = distance(cameraPosition, modelPos.xyz);

  vColor = vec4(hsv2rgb(
        vec3(
          (sin(getRad(2.0, randomValues.x * 2.0)) + 1.0) * 0.5,
          0.8,
          0.8
          )
        ), getAlpha(d));


  /* vUv =  uv; */
}
