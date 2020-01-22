import _ from 'lodash';
import standart from './slice.js';
const array = new standart([1, 2, 3, 4, 5, 'a', 'b', 'c', 'd']);
console.log(_.chunk(array.newSlice(2, 10), 2));
