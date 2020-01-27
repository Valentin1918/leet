const isSorted_0 = arr => {
  const fArr = arr.slice(1);
  return fArr.every((v, i) => v >= arr[i]);
};

const isSorted_1 = arr => {
  let is = true;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      is = false;
      break;
    }
  }
  return is;
};

const myArr = [4,1,55,3,2,3,5,4,3,2,11,1,1,1,3,5,7,9,6,4,2,4,3,5,6,4,2,7,3,2,7,3];
console.log('isSorted', isSorted_1(myArr));
console.log('isSorted', isSorted_1(myArr.sort((a, b) => a - b)));
