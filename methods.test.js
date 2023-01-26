import {
  aLength,
  aPush,
  aPop,
  aUnshift,
  aShift,
  aSome,
  aEvery,
  findIndex,
  aFind,
  aMap,
  aFilter,
  aIncludes,
  aIndexOf,
} from './methods';

// Function aLength
describe('Given an array of length 4', () => {
  test('Should be length of 4', () => {
    const a = [1, 2, 3, 4];
    const result = aLength(a);
    expect(result).toBe(4);
  });
  describe('Given an array of length 0', () => {
    test('Should be length of 0', () => {
      const a = [];
      const result = aLength(a);
      expect(result).toBe(0);
    });
  });
});
describe('Given an array of 1', () => {
  test('Should be length of 1', () => {
    const a = 'some';
    const result = aLength(a);
    expect(result).toBe(a.length);
  });
});

// Function aPush
describe('Given an array with [1,2]', () => {
  test('Should add the last item 3', () => {
    const a = [1, 2, 3];
    const result = aPush(a, 4);
    const expected = [1, 2, 3, 4];
    expect(result).toEqual(expected);
  });
  describe('Given an array with []', () => {
    test('Should add the last item "a"', () => {
      const a = [];
      const result = aPush(a, 'a');
      const expected = ['a'];
      expect(result).toEqual(expected);
    });
  });
});

// Function aPop
describe('Given function aPop', () => {
  test('Should the array given be [] result should be undefined', () => {
    const a = [];
    const result = aPop(a);
    const expected = undefined;
    expect(aPop(result)).toBe(expected);
  });
});
describe('Given an array ["pepe","foo","bar"]', () => {
  test('Then last item should be "bar"', () => {
    const a = ['pepe', 'foo', 'bar'];
    const result = aPop(a);
    const expected = 'bar';
    expect(result).toBe(expected);
  });
});

// Function unshift
describe('Given an array [2,3,4]', () => {
  test('Then first item should be 1', () => {
    const a = [2, 3, 4];
    const result = aUnshift(a, 1);
    const expected = [1, 2, 3, 4];
    expect(result).toEqual(expected);
  });
});

describe('Given an array ["pepe","foo"]', () => {
  test('Then first item should be "ernesto"', () => {
    const a = ['pepe', 'foo'];
    const result = aUnshift(a, 'ernesto');
    const expected = ['ernesto', 'pepe', 'foo'];
    expect(result).toEqual(expected);
  });
});

// Function Shift
describe('Given an array [1,2,3]', () => {
  test('Then the modified item is 1', () => {
    const a = [1, 2, 3];
    const result = aShift(a);
    const expected = 1;
    expect(result).toBe(expected);
  });
});
describe('Given an array []', () => {
  test('Then the result should be undefined', () => {
    const a = [];
    const result = aShift(a);
    const expected = undefined;
    expect(result).toBe(expected);
  });
});

// Function some
describe('Given an array [1,2,3,4]', () => {
  test('If contains a 3', () => {
    const a = [1, 2, 3, 4];
    const b = 3;
    const result = aSome(a, b);
    const expected = true;
    expect(result).toBe(expected);
  });
});
describe('Given an array []', () => {
  test('If does not contains  undefined', () => {
    const a = [];
    const b = 0;
    const result = aSome(a, b);
    const expected = undefined;
    expect(result).toBe(expected);
  });
});
describe('Given an array [1,2,3,4]', () => {
  test('If does not contains 4 result should be false', () => {
    const a = [1, 2, 3, 4];
    const b = 5;
    const result = aSome(a, b);
    const expected = false;
    expect(result).toBe(expected);
  });
});

// Function every
describe('Given an array [1,1,1,1]', () => {
  test('Then result is true if item is every element in array', () => {
    const a = [1, 1, 1, 1];
    const b = 1;
    const result = aEvery(a, b);
    const expected = true;
    expect(result).toBe(expected);
  });
});
describe('Given an array [1,1,1,3]', () => {
  test('Then result is false if item is every element in array', () => {
    const a = [1, 1, 1, 3];
    const b = 1;
    const result = aEvery(a, b);
    const expected = false;
    expect(result).toBe(expected);
  });
});
describe('Given an array []', () => {
  test('Then result is undefined if array is empty', () => {
    const a = [];
    const b = 1;
    const result = aEvery(a, b);
    const expected = result;
    expect(result).toBe(expected);
  });
});

// Function findIndex
describe('Given findIndex function', () => {
  describe('When the inset the number they are looking for', () => {
    test('When insert 3 it should show 3', () => {
      const arr = [1, 2, 3, 4];
      const num = 2;
      const expected = 1;
      const r = findIndex(arr, num);
      expect(r).toBe(expected);
    });
  });
});
describe('Given findIndex function', () => {
  test('Then if number to find is 6 it should show -1', () => {
    const arr = [1, 2, 3, 4];
    const num = 6;
    const expected = -1;
    const r = findIndex(arr, num);
    expect(r).toBe(expected);
  });
});

// Function find
describe('Given an array of [1,2,3,4]', () => {
  test('Then if we look for 2, the result should be found', () => {
    const a = [1, 2, 3, 4];
    const b = 2;
    const result = aFind(a, b);
    const expected = 2;
    expect(result).toBe(expected);
  });
});
describe('Given an array of [1,2,3,4]', () => {
  test('Then if we look for 5, the result should be found', () => {
    const a = [1, 2, 3, 4];
    const b = 5;
    const result = aFind(a, b);
    const expected = false;
    expect(result).toBe(expected);
  });
});
describe('Given an array of []', () => {
  test('Then if we look for 1, the result should be undefined', () => {
    const a = [];
    const b = 1;
    const result = aFind(a, b);
    const expected = undefined;
    expect(result).toBe(expected);
  });
});

// Function map
describe('Given an array of [1,2,3]', () => {
  test('Then the result should be [2,4,6]', () => {
    const a = [1, 2, 3];
    const b = 3;
    const symbol = '*';
    const result = aMap(a, b, symbol);
    const expected = [3, 6, 9];
    expect(result).toEqual(expected);
  });
});
describe('Given an array of [1,2,3]', () => {
  test('Then the result should be [2,4,6]', () => {
    const a = [1, 2, 3];
    const b = 2;
    const symbol = '+';
    const result = aMap(a, b, symbol);
    const expected = [3, 4, 5];
    expect(result).toEqual(expected);
  });
});
describe('Given an array of [5,6,7]', () => {
  test('Then the result should be [4,5,6]', () => {
    const a = [5, 6, 7];
    const b = 1;
    const symbol = '-';
    const result = aMap(a, b, symbol);
    const expected = [4, 5, 6];
    expect(result).toEqual(expected);
  });
});
describe('Given an array of [5,6,7]', () => {
  test('Then the result should be [4,5,6]', () => {
    const a = [2, 4, 6];
    const b = 2;
    const symbol = '/';
    const result = aMap(a, b, symbol);
    const expected = [1, 2, 3];
    expect(result).toEqual(expected);
  });
});
describe('Given an array of [5,6,7]', () => {
  test('Then the result should be [4,5,6]', () => {
    const a = [2, 4, 6];
    const b = 2;
    const symbol = '';
    const result = aMap(a, b, symbol);
    const expected = undefined;
    expect(result).toBe(expected);
  });
});
// Function filter

describe("Given an array ['a','b',2]", () => {
  test('Then if "b" is in the array should be found', () => {
    const a = ['a', 'b', 2];
    const b = 'b';
    const result = aFilter(a, b);
    const expected = ['b'];
    expect(result).toEqual(expected);
  });
});
describe('Given an array []', () => {
  test('Then if "b" is given should be undefined', () => {
    const a = [];
    const b = 'b';
    const result = aFilter(a, b);
    const expected = undefined;
    expect(result).toEqual(expected);
  });
});
describe('Given an array [1,2,3]', () => {
  test('Then if "4" is given should be []', () => {
    const a = [1, 2, 3];
    const b = 4;
    const result = aFilter(a, b);
    const expected = '[]';
    expect(result).toBe(expected);
  });
});

// Function includes
describe('Given aIncludes function', () => {
  describe('When the array is [1,2,3] and we look for 2', () => {
    test('Then the result should be true', () => {
      const a = [1, 2, 3];
      const b = 2;
      const result = aIncludes(a, b);
      const expected = true;
      expect(result).toBe(expected);
    });
  });
  describe('When the array is [1,2,3] and we look for 5', () => {
    test('Then the result should be true', () => {
      const a = [1, 2, 3];
      const b = 5;
      const result = aIncludes(a, b);
      const expected = false;
      expect(result).toBe(expected);
    });
  });
});

// Function indexOf
describe('Given function aIndexOf', () => {
  describe('When the array is [1,2,3] and we look the index of 3', () => {
    test('Then the result should be 2', () => {
      const a = [1, 2, 3];
      const b = 3;
      const result = aIndexOf(a, b);
      const expected = 2;
      expect(result).toBe(expected);
    });
  });
  describe('When the array is ["pepe","foo","bar"] and we look the index of "ernesto', () => {
    test('Then the result should be -1', () => {
      const a = ['pepe', 'foo', 'bar'];
      const b = 'ernesto';
      const result = aIndexOf(a, b);
      const expected = -1;
      expect(result).toBe(expected);
    });
  });
});
