export const aLength = (arr) => {
  let i = 0;
  for (const n in arr) {
    if (arr || n === undefined) {
      i++;
    }
  }

  return i;
};

export const aPush = (arr, item) => {
  arr[aLength(arr)] = item;
  return arr;
};

export const aPop = (arr) => {
  if (aLength(arr) === 0) {
    return undefined;
  }

  return arr[aLength(arr) - 1];
};

export const aUnshift = (arr, item) => {
  const newArr = [item, ...arr];

  return newArr;
};

export const aShift = (arr) => {
  if (aLength(arr) === 0) {
    return undefined;
  }

  return arr[0];
};

export const aSome = (arr, item) => {
  if (aLength(arr) === 0) {
    return undefined;
  }

  for (let i = 0; i < aLength(arr); i++) {
    if (arr[i] === item) {
      return true;
    }
  }

  return false;
};

export const aEvery = (arr, item) => {
  if (aLength(arr) === 0) {
    return undefined;
  }

  for (let i = 0; i < aLength(arr); i++) {
    if (arr[i] !== item) {
      return false;
    }
  }

  return true;
};

console.log(aEvery([1, 1, 3, 1], 1));

export const findIndex = (a, b, c, index) => {
  for (a of b) {
    c++;
    if (c === index) {
      index = c;

      return c;
    }
  }
};
