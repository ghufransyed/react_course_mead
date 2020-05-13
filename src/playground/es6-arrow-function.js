
// es5 functions

const square = function(x) {
    return x * x;
}

console.log(square(8));

// es6 arrow functions
const squareArrow = x => x * x;

console.log(squareArrow(8));

const getFirstname = fullName => fullName.split(' ')[0];

console.log(getFirstname('foobar smith'));