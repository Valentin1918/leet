// import { twoSum_1, twoSum_2 } from './twoSum';
const { twoSum_1, twoSum_2, twoSum_3, twoSum_4, twoSum_5 } = require('./twoSum');
const { bubbleSort, gnomeSort } = require('./sorting');

const numsArr = [2, 7, 11, 15, 1, 2, 2, 3, 87, 16, 9, 10, 80, 87, 99, 11, 75, 8, 43, 33, 0, 97, 66, 7, 1, 4];
const target = 9;
// console.log('twoSum_1', twoSum_1([2, 7, 11, 15], target));
// console.log('twoSum_2', twoSum_2([2, 7, 11, 15], target));
// console.log('twoSum_3', twoSum_3([3, 2, 4], 6));
// console.log('twoSum_4', twoSum_4([3, 2, 4], 6));
// console.log('twoSum_5', twoSum_5([3, 2, 4], 6));

console.log('bubbleSort', bubbleSort([...numsArr]));
console.log('gnomeSort', gnomeSort([...numsArr]));
