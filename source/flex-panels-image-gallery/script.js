'use strict';
(function () {
  const panelElements = document.querySelectorAll('.panel');
  let activePanel = null;
  const clickHandler = function(){
    if (activePanel && activePanel !== this) {
      activePanel.classList.remove('open', 'open-active');
    }
    activePanel = this;
    this.classList.toggle('open');
    this.classList.toggle('open-active');
  };
  panelElements.forEach(item => item.addEventListener('click', clickHandler));
})();
