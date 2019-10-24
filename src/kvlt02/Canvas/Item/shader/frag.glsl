precision mediump float;

uniform sampler2D texture;
uniform float time;
uniform float resolution;
uniform float tween;
uniform float wd;
uniform float speed;

varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  // 0-1で変化するtweenを0-1-0に変換する

  float t = time * speed;
  uv.x += .005 * (sin(wd * uv.y + t)); // x軸に対してy軸ずらす
  uv.y += .005 * (sin(wd * uv.x + t)); // y軸に対してx軸ずらす

  /* uv = uv / 1.6; */
  uv = uv.xy / resolution;
  /* uv *= .5; */
  /* uv = fract(uv); */
  vec4 color = texture2D(texture, uv);

  /* color *= 3.0; */
  /* color = fract(color); */


  /* gl_FragColor = vec4(color); */
  gl_FragColor = vec4(uv, .0, 1.0);
}
