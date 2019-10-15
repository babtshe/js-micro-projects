'use strict';
(function () {
  const player = document.querySelector('.player');
  const video = player.querySelector('.viewer');
  const playerControls = player.querySelector('.player__controls');
  const progress = playerControls.querySelector('.progress');
  const progressBar = progress.querySelector('.progress__filled');
  const playButton = playerControls.querySelector('.toggle');
  const rangeSliders = playerControls.querySelectorAll('input[type="range"]');
  const skipButtons = playerControls.querySelectorAll('button[data-skip]');

  const togglePlay = () => {
    video[video.paused ? 'play' : 'pause']();
  };

  const updatePlayButton = () => {
    let icon = '►';
    if (video.ended) {
      icon = '↺';
    } else {
      icon = video.paused ? '►' : '❚ ❚';
    }
    playButton.textContent = icon;
  };

  const skip = (evt) => {
    video.currentTime += parseFloat(evt.target.dataset.skip);
  };

  const scrub = (evt) => {
    const scrubTime = (evt.offsetX / evt.currentTarget.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  };

  const handleRangeUpdate = (evt) => {
    const [property, value] = [evt.target.name, evt.target.value];
    video[property] = value;
  };

  const handleProgress = (evt) => {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  };

  playButton.addEventListener('click', togglePlay);
  video.addEventListener('pause', updatePlayButton);
  video.addEventListener('play',updatePlayButton);
  video.addEventListener('ended', updatePlayButton);
  video.addEventListener('click', togglePlay);
  video.addEventListener('timeupdate', handleProgress);
  skipButtons.forEach(item => item.addEventListener('click', skip));
  rangeSliders.forEach(item => item.addEventListener('input', handleRangeUpdate));
  progress.addEventListener('click', scrub);
})();
