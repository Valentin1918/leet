// import { twoSum_1, twoSum_2 } from './twoSum';
const { twoSum_1, twoSum_2, twoSum_3, twoSum_4, twoSum_5 } = require('./twoSum');
const { bubbleSort, gnomeSort, insertionSort } = require('./sorting');

const makeArr = n => Array.from({length: n}, () => Math.floor(Math.random() * n));
const intArr = makeArr(25000);

const target = 9;
// console.log('twoSum_1', twoSum_1([2, 7, 11, 15], target));
// console.log('twoSum_2', twoSum_2([2, 7, 11, 15], target));
// console.log('twoSum_3', twoSum_3([3, 2, 4], 6));
// console.log('twoSum_4', twoSum_4([3, 2, 4], 6));
// console.log('twoSum_5', twoSum_5([3, 2, 4], 6));

console.log('bubbleSort', bubbleSort([...intArr]));
console.log('gnomeSort', gnomeSort([...intArr]));
console.log('insertionSort', insertionSort([...intArr]));
