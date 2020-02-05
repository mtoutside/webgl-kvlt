precision highp float;

#define PI 3.141592653589
#define PI2 6.28318530718

uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_tex;

varying vec2 vUv;
varying float vNoise;

//	<https://www.shadertoy.com/view/4dS3Wd>
//	By Morgan McGuire @morgan3d, http://graphicscodex.com

//https://www.clicktorelease.com/blog/vertex-displacement-noise-3d-webgl-glsl-three-js/

void main (void)
{
   vec3 color = vec3( vUv * ( 1. - 2. * vNoise ), 0.0 );
  //  vec3 color = vec3( vUv, 0.0 );
  gl_FragColor = vec4(color, 1.0);
}
