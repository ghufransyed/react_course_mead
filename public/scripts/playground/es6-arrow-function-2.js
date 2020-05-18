'use strict';

var add = function add(a, b) {
    //console.log(arguments); no longer works in arrow functions
    return a + b;
};

//console.log(add(55,1, 1001));

var user = {
    name: 'Ghufran',
    cities: ['Los Angeles', 'Farmville', 'Menlo Park'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};

console.log(user.printPlacesLived());

var multiplier = {
    numbers: [2, 4, 6],
    multiplyBy: 4,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (num) {
            return num * _this2.multiplyBy;
        });
    }
};

console.log('Numbers: ' + multiplier.numbers);
console.log('multiply(): ' + multiplier.multiply());