precision highp float;

#include <noise>

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float u_time;
uniform float u_wd;
uniform float u_wd2;
uniform float u_speed;

attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;

varying vec2 vUv;
varying float vNoise;

void main() {
  float displacement;
  float time = u_time * u_speed;
  float b;

  vUv = uv;

// add time to the noise parameters so it's animated

vNoise = u_wd *  -.10 * turbulence( u_wd2 * normal + time );
b = 5.0 * pnoise( 0.05 * position + vec3( time ), vec3( 100.0 ) );
displacement = - 10. * vNoise + b;


  // move the position along the normal and transform it
  vec3 newPosition = position + normal * displacement;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
}
