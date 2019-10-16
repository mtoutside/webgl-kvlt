precision mediump float;

uniform sampler2D texture;
uniform float time;
uniform float tween;
uniform float wd;
uniform float speed;

varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  // 0-1で変化するtweenを0-1-0に変換する
  float tween010 = sin(tween * 3.14);

  float t = time * speed;
  uv.x += .05 * (sin(wd * uv.y + t)) * tween; // x軸に対してy軸ずらす
  uv.y += .05 * (sin(wd * uv.x + t)) * tween; // y軸に対してx軸ずらす

  vec4 color = texture2D(texture, uv);


  gl_FragColor = vec4(color);
}
