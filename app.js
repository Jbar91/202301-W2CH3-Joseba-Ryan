import {
  aLength,
  aPush,
  aPop,
  aUnshift,
  aShift,
  aSome,
  aEvery,
} from './methods.js';

console.log(aLength([1, 2, 3]));
console.log(aPush([1, 2], 3));
console.log(aPop([1, 2]));
console.log(aUnshift([2, 3, 4], 1));
console.log(aShift(1, 2, 3, 4));
console.log(aSome([1, 2, 3, 4], 2));
console.log(aEvery([1, 1, 1, 1], 1));
