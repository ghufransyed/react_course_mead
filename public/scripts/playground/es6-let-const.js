'use strict';

var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

var nameLet = 'Jen';

nameLet = 'Julie';
console.log('nameLet', nameLet);

var nameConst = 'Frank';
console.log('nameConst', nameConst);

//nameConst = "Gunther"

function getPetName() {
    var petName = 'Hal';
    return petName;
}

getPetName();
//console.log(petName);

// Block scoping

var fullName = 'Andrew Mead';

if (fullName) {
    var _firstName = fullName.split(' ')[0];
    console.log(_firstName);
}

console.log(firstName);
//# sourceMappingURL=es6-let-const.js.map