'use strict';
(function () {
  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
  const cities = [];

  fetch(endpoint)
  .then(response => response.json())
  .then(data=>cities.push(...data));

  const numberWithSpaces = function(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&nbsp;");
  };

  const findMatches = (wordToMatch, cities) => {
    return cities.filter(item => {
      const regex = new RegExp(wordToMatch, 'gi');
      return item.city.match(regex) || item.state.match(regex);
    });
  };

  const displayMatches = function() {
    const initialTemplate = `
    <li>Filter for a city</li>
    <li>or a state</li>`;
    if (this.value.length < 2) {
      suggestionsElement.innerHTML = initialTemplate;
      return;
    }
    const matches = findMatches(this.value, cities);
    const regex = new RegExp(this.value, 'gi');

    const template = matches.map(place=> {
      const cityName = place.city.replace(regex, `<span class="hl">$&</span>`);
      const stateName = place.state.replace(regex, `<span class="hl">$&</span>`);
      return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${numberWithSpaces(place.population)}</span>
        </li>`;
    }).join('');
    suggestionsElement.innerHTML = template;
  };

  const debounce = function(func, time=300){
    let timeout = null;
    return function() {
      const context = this;
      const args = arguments;
      const later = function() {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, time);
    };
  };

  const searchInputElement = document.querySelector('.search');
  const suggestionsElement = document.querySelector('.suggestions');

  searchInputElement.addEventListener('input', debounce(displayMatches));

})();
