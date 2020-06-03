"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var isAdult = function isAdult(age) {
  return age >= 18;
};
var canDrink = function canDrink(age) {
  return age >= 21;
};

exports.default = function (age) {
  return age >= 65;
};

exports.isAdult = isAdult;
exports.canDrink = canDrink;
//# sourceMappingURL=person.js.map