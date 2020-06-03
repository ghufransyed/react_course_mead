"use strict";

var _person = require("./person");

var _person2 = _interopRequireDefault(_person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import sub, { square, add } from './utils.js'


console.log('app.js is running');
//console.log(square(4));
//console.log(add(4,2));
//console.log(sub(4,2));


console.log((0, _person.isAdult)(19));
console.log((0, _person.canDrink)(19));
console.log((0, _person2.default)(65));
//# sourceMappingURL=app.js.map