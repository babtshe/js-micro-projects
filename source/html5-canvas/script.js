'use strict';
(function () {
  const canvasElement = document.querySelector('#draw');
  const ctx = canvasElement.getContext('2d');
  canvasElement.width = window.innerWidth;
  canvasElement.height = window.innerHeight;
  ctx.strokeStyle = '#BADA55';
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = 30;
  // ctx.globalCompositeOperation = 'color-dodge';

  let lastX = 0;
  let lastY = 0;
  let hue = 0;

  const onMouseDown = (evt) => {
    [lastX, lastY] = [evt.offsetX, evt.offsetY];
    canvasElement.addEventListener('mousemove', onMouseMove);
    canvasElement.addEventListener('mouseup', onMouseUp);
    canvasElement.addEventListener('mouseout', onMouseUp);
  };

  const onMouseUp = () => {
    canvasElement.removeEventListener('mousemove', onMouseMove)
    canvasElement.removeEventListener('mouseup', onMouseUp);
    canvasElement.removeEventListener('mouseout', onMouseUp);
  }

  const onMouseMove = (evt)=>{
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath()
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(evt.offsetX, evt.offsetY);
    ctx.stroke();
    [lastX, lastY] = [evt.offsetX, evt.offsetY];
    hue = (hue >= 360) ? 0 : (hue + 1);
  };

  const clearCanvas = (evt) =>{
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    }

  };

  canvasElement.addEventListener('mousedown', onMouseDown);
  document.addEventListener('keydown', clearCanvas);

})();
