import * as THREE from 'three';
import FloatingCharsGeometry from './_fcg';

// シェーダーファイルをimport
import vertexShader from './shader/vert.glsl';
import fragmentShader from './shader/frag.glsl';

class FloatingChars extends THREE.Mesh {
  constructor(numChars, charWidth, numTextureGridCols, textureGridsize) {
    super();
    this.numChars = numChars;
    this.charWidth = charWidth;
    this.numTextureGridCols = numTextureGridCols;
    this.textureGridsize = textureGridsize;

    this.geoClass = new FloatingCharsGeometry(this.numChars, this.charWidth);
    this.geometry = this.geoClass.geometry;
    this.material = new THREE.RawShaderMaterial({
      transparent: true,
      side: THREE.DoubleSide,
      uniforms: {
        txtTexture: { type: 't' },
        u_time: { type: '1f', value: 0 },
        numChars: { type: '1f', value: this.numChars },
        numTextureGridCols: { type: '1f', value: this.numTextureGridCols },
        numTextureGridRows: { type: '1f', value: 1 },
        textureTxtLength: { type: '1f', value: 1 },
        animationValue1: { type: '1f', value: 0 },
        animationValue2: { type: '1f', value: 0 },
        animationValue3: { type: '1f', value: 1 },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    });
  }

  update() {
    this.material.uniforms.u_time.value += 0.001;
  }

  createTexture(txt, fontFamily) {
    const textureTxtLength = txt.length;
    const numTextureGridRows = Math.ceil(
      textureTxtLength / this.numTextureGridCols
    );

    this.txtCanvas = document.createElement('canvas');
    this.txtCanvasCtx = this.txtCanvas.getContext('2d');
    this.txtCanvas.width = this.textureGridsize * this.numTextureGridCols;
    this.txtCanvas.height = this.textureGridsize * numTextureGridRows;

    this.txtCanvasCtx.clearRect(
      0,
      0,
      this.txtCanvas.width,
      this.txtCanvas.height
    );
    this.txtCanvasCtx.font = `normal ${this.textureGridsize *
      0.8}px ${fontFamily}`;
    this.txtCanvasCtx.textAlign = 'center';
    this.txtCanvasCtx.fillStyle = '#ffffff';

    let colIndex;
    let rowIndex;

    for (let i = 0, l = textureTxtLength; i < l; i++) {
      colIndex = i % this.numTextureGridCols;
      rowIndex = Math.floor(i / this.numTextureGridCols);

      this.txtCanvasCtx.fillText(
        txt.charAt(i),
        colIndex * this.textureGridsize + this.textureGridsize / 2,
        rowIndex * this.textureGridsize + this.textureGridsize * 0.8,
        this.textureGridsize
      );
    }

    this.txtTexture = new THREE.Texture(this.txtCanvas);
    this.txtTexture.flipY = false;
    this.txtTexture.needsUpdate = true;
    this.txtTexture.minFilter = THREE.LinearFilter;
    this.txtTexture.magFilter = THREE.LinearFilter;

    this.material.uniforms.txtTexture.value = this.txtTexture;
    this.material.uniforms.numTextureGridRows.value = numTextureGridRows;
    this.material.uniforms.textureTxtLength.value = textureTxtLength;

    // document.body.appendChild(this.txtCanvas);
    // this.txtCanvas.style.backgroundColor = '#333';
    // this.txtCanvas.style.position = 'relative';
  }

  setUniform(uniformKey, value) {
    this.material.uniforms[uniformKey].value = value;
  }
}

export default FloatingChars;
