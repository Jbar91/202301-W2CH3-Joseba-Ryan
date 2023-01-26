export const aLength = (arr) => {
  let n = 0;
  if (typeof arr === 'string') {
    return arr.length;
  }

  for (n in arr) {
    if (arr) {
      n++;
    }
  }

  return n;
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

export const aFind = (arr, itemFind) => {
  if (aLength(arr) === 0) {
    return undefined;
  }

  for (let i = 0; i < aLength(arr); i++) {
    if (arr[i] === itemFind) {
      return arr[i];
    }
  }

  return false;
};

export const aMap = (arr, number, symbol) => {
  const _length = aLength(arr);

  for (let i = 0; i < _length; i++) {
    switch (symbol) {
      case '*':
        arr[i] *= number;
        break;
      case '+':
        arr[i] += number;
        break;
      case '-':
        arr[i] -= number;
        break;
      case '/':
        arr[i] /= number;
        break;
      default:
        return undefined;
    }
  }

  return arr;
};

export const aFilter = (arr, itemFilter) => {
  const value = '[]';

  if (aLength(arr) === 0) {
    return undefined;
  }

  for (let i = 0; i < aLength(arr); i++) {
    if (arr[i] === itemFilter) {
      return [arr[i]];
    }
  }

  return value;
};

export const findIndex = (arr, b) => {
  let index = 0;
  for (let i = 0; i < aLength(arr); i++) {
    if (arr[i] === b) {
      return index;
    }

    index++;
  }

  return -1;
};

export const aIncludes = (arr, itemIncluded) => {
  for (let i = 0; i < aLength(arr); i++) {
    if (arr[i] === itemIncluded) {
      return true;
    }
  }

  return false;
};

export const aIndexOf = (arr, item) => {
  for (let i = 0; i < aLength(arr); i++) {
    if (arr[i] === item) {
      return i;
    }
  }

  return -1;
};

console.log(aIncludes([1, 2, 3], 4));
