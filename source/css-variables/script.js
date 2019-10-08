'use strict';
(function () {
  const inputElements = document.querySelectorAll('.controls input');

  const handleUpdate = function () {
    const sizing = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${sizing}`);
  };
   inputElements.forEach(input => input.addEventListener('input', handleUpdate));
})();
