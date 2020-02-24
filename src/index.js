import _ from 'lodash';
import Slice from './slice.js';
const array = new Slice([1, 2, 3, 4, 5, 'a', 'b', 'c', 'd']);
console.log(_.chunk(array.newSlice(2, 10), 2));
