import {
  aLength,
  aPush,
  aPop,
  aUnshift,
  aShift,
  aSome,
  aEvery,
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

// Function aPush
describe('Given an array with [1,2]', () => {
  test('Should add the last item 3', () => {
    const a = [1, 2, undefined];
    const result = aPush(a, 4);
    expect(result).toEqual([1, 2, undefined, 4]);
  });
  describe('Given an array with []', () => {
    test('Should add the last item "a"', () => {
      const a = [];
      const result = aPush(a, 'a');
      expect(result).toEqual(['a']);
    });
  });
});

// Function aPop
describe('Given an array [1,2,3,4]', () => {
  test('Should the last item be 4', () => {
    const a = [];
    const result = undefined;
    expect(aPop(a)).toBe(result);
  });
});
describe('Given an array ["pepe","foo","bar"]', () => {
  test('Then last item should be "bar"', () => {
    const a = ['pepe', 'foo', 'bar'];
    const result = 'bar';
    expect(aPop(a)).toBe(result);
  });
});

// Function unshift
describe('Given an array [2,3,4]', () => {
  test('Then first item should be 1', () => {
    const a = [2, 3, 4];
    const result = [1, 2, 3, 4];
    expect(aUnshift(a, 1)).toEqual(result);
  });
});

describe('Given an array ["pepe","foo"]', () => {
  test('Then first item should be "ernesto"', () => {
    const a = ['pepe', 'foo'];
    const result = ['ernesto', 'pepe', 'foo'];
    expect(aUnshift(a, 'ernesto')).toEqual(result);
  });
});

// Function Shift
describe('Given an array [1,2,3]', () => {
  test('Then the modified item is 1', () => {
    const a = [1, 2, 3];
    const result = 1;
    expect(aShift(a)).toBe(result);
  });
});
describe('Given an array ["foo","bar","pepe"]', () => {
  test('Then the modified item is "foo"', () => {
    const a = ['foo', 'bar', 'pepe'];
    const result = 'foo';
    expect(aShift(a)).toBe(result);
  });
});

// Function some
describe('Given an array [1,2,3,4]', () => {
  test('If contains a 3', () => {
    const a = [1, 2, 3, 4];
    const b = 3;
    const result = true;
    expect(aSome(a, b)).toBe(result);
  });
});
describe('Given an array ["pepe","foo","bar"]', () => {
  test('If does not contains  "ernesto"', () => {
    const a = ['pepe', 'foo', 'bar'];
    const b = 'ernesto';
    const result = false;
    expect(aSome(a, b)).toBe(result);
  });
});

// Function every
describe.only('Given an array [1,1,1,1]', () => {
  test('Then result is true if item is every element in array', () => {
    const a = [1, 1, 1, 1];
    const b = 1;
    const result = true;
    expect(aEvery(a, b)).toBe(result);
  });
});
describe.only('Given an array [1,1,1,3]', () => {
  test('Then result is false if item is every element in array', () => {
    const a = [1, 1, 1, 3];
    const b = 1;
    const result = false;
    expect(aEvery(a, b)).toBe(result);
  });
});
