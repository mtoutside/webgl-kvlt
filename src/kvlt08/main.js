import Canvas from './Canvas/_index';
import FullscreenSlider from './_fullscreen';

(() => {
  const cv = new Canvas();
  const fsSlider = new FullscreenSlider(
    document,
    {
      x: window.innerWidth,
      y: window.innerHeight,
    },
    cv
  );

  window.addEventListener('resize', () => {
    fsSlider.reset();
    fsSlider.resize({
      x: window.innerWidth,
      y: window.innerHeight,
    });
  });

  init();

  function init() {
    fsSlider.start();
  }
})();
