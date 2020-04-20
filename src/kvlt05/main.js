'use strict';

import WebFontLoader from 'webfontloader';
import Canvas from './Canvas/_index';

document.addEventListener('DOMContentLoaded', () => {
  // フォントを読み込んでからCanvasを作成する
  WebFontLoader.load({
    google: {
      // families: ['Ubuntu Condensed'],
      families: ['UnifrakturCook:700', 'Droid Sans', 'Noto Serif JP:700'],
    },
    active: () => {
      new Canvas();
    },
  });
});
