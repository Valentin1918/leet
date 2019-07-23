const change = (arr, y) => [arr[y - 1], arr[y]] = [arr[y], arr[y - 1]];

const bubbleSort = arr => {
  console.time('bubbleSort');
  let l = arr.length, i, y, counter = 0;
  for (i = 0; i < l; i++) {
    for (y = 1; y < l - i; y++) {
      counter++;
      if (arr[y - 1] > arr[y]) change(arr, y);
    }
  }
  console.timeEnd('bubbleSort');
  console.log('counter', counter);
  return arr;
};

const gnomeSort = arr => {
  console.time('gnomeSort');
  let l = arr.length, i, y, counter = 0;
    for (y = 1; y < l; y++) {
      if (arr[y] < arr[y - 1]) {
        for (i = y; i > 0; i--) {
          counter++;
          if (arr[i] >= arr[i - 1]) break;
          change(arr, i);
        }
      }
      counter++;
    }
  console.timeEnd('gnomeSort');
  console.log('counter', counter);
  return arr;
};

const insertionSort = arr => {
  console.time('insertionSort');
  let l = arr.length, i, y, counter = 0;
  for (y = 1; y < l; y++) {
    if (arr[y] < arr[y - 1]) {
      const value = arr.splice(y, 1)[0];
      i = y;
      do {
        counter++;
        i--;
        if (value >= arr[i] || !i) {
          arr.splice(i + +!!i, 0, value);
          break;
        }
      } while (i);
    }
    counter++;
  }
  console.timeEnd('insertionSort');
  console.log('counter', counter);
  return arr;
};

module.exports = { bubbleSort, gnomeSort, insertionSort };
