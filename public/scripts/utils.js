'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


console.log('utils.js is running');

var square = function square(x) {
  return x * x;
};
var add = function add(a, b) {
  return a + b;
};
var subtract = function subtract(a, b) {
  return a - b;
};

exports.square = square;
exports.add = add;
exports.default = subtract; // NOT an object
//# sourceMappingURL=utils.js.map