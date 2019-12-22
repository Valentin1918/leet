const { twoSum_1, twoSum_2, twoSum_3, twoSum_4, twoSum_5 } = require('./twoSum');
const { bubbleSort, gnomeSort, insertionSort } = require('./sorting');
const { isAnagram_1, isAnagram_2, isAnagram_3, isAnagram_4 } = require('./isAnagram');
const { Singleton_1, Singleton_2, Ext_Sin_2 } = require('./singleton');
const { curry_0, curry_1, curry_2 } = require('./curry');

// const makeArr = n => Array.from({length: n}, () => Math.floor(Math.random() * n));
// const intArr = makeArr(25000);

const target = 9;
// console.log('twoSum_1', twoSum_1([2, 7, 11, 15], target));
// console.log('twoSum_2', twoSum_2([2, 7, 11, 15], target));
// console.log('twoSum_3', twoSum_3([3, 2, 4], 6));
// console.log('twoSum_4', twoSum_4([3, 2, 4], 6));
// console.log('twoSum_5', twoSum_5([3, 2, 4], 6));

// console.log('bubbleSort', bubbleSort([...intArr]));
// console.log('gnomeSort', gnomeSort([...intArr]));
// console.log('insertionSort', insertionSort([...intArr]));

// console.log('isAnagram_1', isAnagram_4('anagram', 'nagaram'));
// console.log('isAnagram_1', isAnagram_4('car', 'cat'));
// console.log('isAnagram_1', isAnagram_4('ab', 'a'));

// const sin1 = Singleton_1.instance;
// const sin2 = Singleton_1.instance;
// console.log('Singleton_1', sin1 === sin2);

// const sin3 = new Singleton_2('Vasia');
// const sin4 = new Singleton_2('Petia');
// console.log('Singleton_2', sin3.getName(), sin4.getName(), sin3 === sin4);

// const sin5 = new Ext_Sin_2('Igor');
// const sin6 = new Ext_Sin_2('Ken');
// console.log("getName" in sin5);
// console.log("shoutName" in sin5); // --> false --> The extension process can't even start, because SingletonClass constructor returns the instance first thing.
// console.log('Ext_Sin_2', sin5.getName(), sin6.getName(), sin5 === sin6);


const myFun = (a,b,c,d) => console.log(a,b,c,d);
const car = curry_0(myFun);

console.time('curry');
car('a','b','c', 'd');
car('a','b')('c', 'd');
car('a')('b','c', 'd');
car('a','b')('c')('d');
car('a')('b','c')('d');
car('a')('b')('c')('d');
console.timeEnd('curry');
