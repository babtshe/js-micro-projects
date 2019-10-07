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
    secondsHandElement.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = minutes * 6 + OFFSET;
    minutesHandElement.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = hours * 30 + OFFSET;
    hoursHandElement.style.transform = `rotate(${hoursDegrees}deg)`;
  };
  setInterval(setDate, 100);
})();
