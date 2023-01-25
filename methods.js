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
        break;
    }
  }

  return arr;
};

export const aFilter = (arr, itemFilter) => {
  if (aLength(arr) === 0) {
    return undefined;
  }

  for (let i = 0; i < aLength(arr); i++) {
    if (arr[i] === itemFilter) {
      return [arr[i]];
    }
  }

  return [];
};

console.log(aFilter([1, 2, 3], 3));
