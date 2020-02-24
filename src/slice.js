export default class {
  constructor(arr) {
    this.arr = arr;
  }

  newSlice(num1 = 0, num2 = this.arr.length) {
    const oldArr = this.arr;
    const newArr = oldArr.filter((el, i) => i >= num1 && i < num2);
    return newArr;
  }
};
