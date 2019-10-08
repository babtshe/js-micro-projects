'use strict';
(function () {
  const secondsHandElement = document.querySelector('.js-second-hand');
  const minutesHandElement = document.querySelector('.js-min-hand');
  const hoursHandElement = document.querySelector('.js-hour-hand');

  const setDate = () => {
    const OFFSET = 90;

    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = seconds * 6 + OFFSET;
    if (secondsHandElement.style.getPropertyValue('transition')) {
      secondsHandElement.style.removeProperty('transition');
    }
    if (secondsDegrees === 90 || !secondsHandElement.style.getPropertyValue('transform')) {
      secondsHandElement.style.transition = 'none';
    }
    secondsHandElement.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = minutes * 6 + OFFSET;
    minutesHandElement.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = Math.floor((hours + minutes / 60) * 30) + OFFSET;
    hoursHandElement.style.transform = `rotate(${hoursDegrees}deg)`;
  };
  setInterval(setDate, 1000);
})();
