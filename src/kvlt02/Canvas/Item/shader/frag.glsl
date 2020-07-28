precision mediump float;

uniform sampler2D texture;
uniform float time;
uniform float resolution;
uniform float tween;
uniform float wd;
uniform float speed;

varying vec2 vUv;

void main() {
  /* vec2 uv = vUv; */
  // 0-1で変化するtweenを0-1-0に変換する

  float t = time * speed;

  vec2 repeat = vec2(8.0, 8.0); // (行, 列)回繰り返し
  vec2 uv = fract(vUv * repeat + vec2(t, 0.0));

  uv += vec2(sin(t), 0.0);

  /* uv.x += .008 * (sin(wd * uv.y * t)); */
  /* uv.y += .008 * (sin(wd * uv.x * t)); */

  vec3 color = texture2D(texture, uv).rgb;
  gl_FragColor = vec4(color, 1.0);
}
