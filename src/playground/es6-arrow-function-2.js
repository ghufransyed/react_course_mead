
const add = (a,b) => {
    //console.log(arguments); no longer works in arrow functions
    return a + b;
};

//console.log(add(55,1, 1001));

const user = {
    name: 'Ghufran',
    cities: ['Los Angeles', 'Farmville', 'Menlo Park'],
    printPlacesLived() {
        return this.cities.map(city => this.name + ' has lived in ' + city)
    }

};

console.log(user.printPlacesLived());

const multiplier = {
    numbers:  [ 2, 4, 6],
    multiplyBy: 4,
    multiply() {
        return this.numbers.map(num => num * this.multiplyBy);
    }
}

console.log('Numbers: ' + multiplier.numbers);
console.log('multiply(): ' + multiplier.multiply());


