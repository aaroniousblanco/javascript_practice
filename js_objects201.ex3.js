// Inheritance
//
// Given the following objects:

var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black'
};
var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown'
};

// One
//
// Write code using __proto__ to make daughter inherit properties from mom. What are the daugther's properties and their values? Print them out.

daughter.__proto__ = mom;
console.log(daughter.firstName, daughter.hairColor, daughter.eyeColor, daughter.lastName);
