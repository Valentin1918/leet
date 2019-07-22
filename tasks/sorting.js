const change = (arr, y) => [arr[y - 1], arr[y]] = [arr[y], arr[y - 1]];

const bubbleSort = arr => {
  let l = arr.length, i, y, counter = 0;
  for (i = 0; i < l; i++) {
    for (y = 1; y < l - i; y++) {
      counter++;
      if (arr[y - 1] > arr[y]) change(arr, y);
    }
  }
  console.log('counter', counter);
  return arr;
};

const gnomeSort = arr => {
  let l = arr.length, i, y, counter = 0;
    for (y = 1; y < l; y++) {
      if (arr[y] < arr[y - 1]) {
        for (i = y; i > 0; i--) {
          if (arr[i] >= arr[i - 1]) break;
          counter++;
          change(arr, i);
        }
      }
      counter++;
    }
  console.log('counter', counter);
  return arr;
};

module.exports = { bubbleSort, gnomeSort };
