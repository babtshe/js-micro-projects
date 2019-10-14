'use strict';
(function () {
  const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
  'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert',
  'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester',
  'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
  'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
  'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh',
  'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's
  const inventorsBornIn1500 = inventors.filter(item => item.year >= 1500 && item.year < 1600);
  console.log(inventorsBornIn1500);

  // Array.prototype.map()
  // 2. Give us an array of the inventors' first and last names
  const inventorNames = inventors.map(item=>`${item.first} ${item.last}`);
  console.log(inventorNames);

  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest
  const inventorsByBirthDate = inventors.sort((a, b)=>a.year - b.year);
  console.log(inventorsByBirthDate);

  // Array.prototype.reduce()
  // 4. How many years did all the inventors live?
  const inventorsTotalLive = inventors.reduce((acc, item) =>acc + (item.passed - item.year), 0);
  console.log(inventorsTotalLive);

  // 5. Sort the inventors by years lived
  const inventorsByYearsLived = inventors.sort((a, b)=>(a.passed - a.year) - (b.passed - b.year));
  console.log(inventorsByYearsLived.map(item =>Object.assign({}, item, {yearsLived: item.passed - item.year})));

  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


  // 7. sort Exercise
  // Sort the people alphabetically by last name
  const peopleByLastName = people.sort((a, b)=> a.split(',')[0] > b.split(',')[0]);
  console.log(peopleByLastName);

  // 8. Reduce Exercise
  // Sum up the instances of each of these
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick' ];
  const instancesOfData = data.reduce((acc, item)=> {
    acc[item] = acc[item] ? acc[item] + 1 : 1;
    return acc;
  }, {});
  console.log(instancesOfData);

  // ## Array Cardio Day 2

  const newPeople = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
  console.log(`${newPeople
    .some(i=>(new Date().getFullYear() - i.year) >= 19)?'at least one person':'no one'} is 19 or older`);
  // Array.prototype.every() // is everyone 19 or older?
  console.log(`${newPeople
    .every(i=>(new Date().getFullYear() - i.year) >= 19)?'':'not '}everyone is 19 or older`);

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
  console.log(`comment with the ID 823423`, comments.find(a=>a.id === 823423));

  // Array.prototype.findIndex()
  console.log(`index of comment with the ID 823423 =`, comments.findIndex(a=>a.id === 823423));
  // Find the comment with this ID
  // delete the comment with the ID of 823423
  const newComments = [...comments]
  newComments.splice(comments.findIndex(a=>a.id === 823423),1)
  console.log(`array if comment with the ID 823423 is deleted`, newComments);

})();
