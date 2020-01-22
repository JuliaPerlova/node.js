export default class {
  constructor(arr) {
    this.arr = arr;
  }
  newSlice(num1 = 0, num2 = this.arr.length) {
    const oldArr = this.arr;
    const newArr = oldArr.filter(el => oldArr.indexOf(el) >= num1 && oldArr.indexOf(el) < num2);
    return newArr;
  }
};
