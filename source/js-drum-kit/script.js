'use strict';
(function () {
  const keysElements = document.querySelectorAll('.keys .key');
  const audioElements = document.querySelectorAll('audio');

  const onTransitionEnd = (evt) => {
    evt.target.classList.remove('playing');
    evt.target.removeEventListener('transitionend', onTransitionEnd);
  };

  const onKeyDown = (evt) => {
    evt.preventDefault();
    const targetKey = [...keysElements].find(item => +item.dataset.key === evt.keyCode);
    const targetAudio = [...audioElements].find(item => +item.dataset.key === evt.keyCode);
    if (!targetAudio || !targetKey) {
      return;
    }

    targetAudio.currentTime = 0;
    targetAudio.play()

    targetKey.classList.add('playing');
    targetKey.addEventListener('transitionend', onTransitionEnd);
  };

  window.addEventListener('keydown', onKeyDown);

})();
