'use strict';
const sum = require('sum');

let num = [1, 2, 3, 4];
console.log(`multi(${num}) => ${sum.add(num)}`);
num = [10, 20, 30, 40];
console.log(`multi(${num}) => ${sum.multi(num)}`);
