const unicArr_0 = arr => {
  return arr.reduce((acc, v) => {
    return acc.includes(v) ? acc : acc.concat(v);
  }, [])
};
// in strings but already sorted
const unicArr_1 = arr => {
  return Object.keys(arr.reduce((acc, v) => {
    acc[v] = true;
    return acc;
  }, {}))
};

const unicArr_2 = arr => Array.from(new Set(arr));


const myArr = [4,1,55,3,2,3,5,4,3,2,11,1,1,1,3,5,7,9,6,4,2,4,3,5,6,4,2,7,3,2,7,3];
console.log(unicArr_0(myArr));
console.log(unicArr_1(myArr));
console.log(unicArr_2(myArr));
