import slice from '../src/slice.js';

const array = new slice([1, 3, 7, 8, 9]);
test('slice', () => {
  expect(array.newSlice(2, 4)).toStrictEqual([7, 8]);
  expect(array.newSlice(1, 10)).toStrictEqual([3, 7, 8, 9]);
  expect(array.newSlice(2)).toStrictEqual([7, 8, 9]);
});
test('rare cases', () => {
  const empty = new slice([]);
  expect(empty.newSlice(3, 94)).toStrictEqual([]);
  expect(array.newSlice()).toStrictEqual([1, 3, 7, 8, 9]);
});
