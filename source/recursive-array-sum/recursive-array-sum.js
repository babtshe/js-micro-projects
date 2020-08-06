var sum = function (arr) {
  if (!arr.length) {
    return 0;
  }
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] + sum(arr.slice(1));
};

var array = [10,20,30,40,50,60];
sum(array);
