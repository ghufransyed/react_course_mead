'use strict';

// es5 functions

var square = function square(x) {
    return x * x;
};

console.log(square(8));

// es6 arrow functions
var squareArrow = function squareArrow(x) {
    return x * x;
};

console.log(squareArrow(8));

var getFirstname = function getFirstname(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstname('foobar smith'));