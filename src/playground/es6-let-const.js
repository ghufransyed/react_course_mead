var nameVar = 'Andrew';
var nameVar = 'Mike'
console.log('nameVar', nameVar);

let nameLet = 'Jen'

nameLet = 'Julie'
console.log('nameLet', nameLet)


const nameConst = 'Frank';
console.log('nameConst', nameConst)

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
    let firstName = fullName.split(' ')[0];
    console.log(firstName)
}

console.log(firstName)
