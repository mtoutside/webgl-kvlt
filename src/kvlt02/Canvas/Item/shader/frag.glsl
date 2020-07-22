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
  uv.x += .005 * (sin(wd * uv.y + t));
  uv.y += .005 * (sin(wd * uv.x + t));

  /* uv = uv / 1.6; */
  /* uv = uv.xy / resolution; */
  /* uv *= .5; */
  uv = fract(uv);
  vec3 color = texture2D(texture, uv).rgb;

  /* color *= 3.0; */
  /* color = fract(color); */


  gl_FragColor = vec4(color, 1.0);
}
