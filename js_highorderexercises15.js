// Sort an array
//
// Given an array of strings such the array of names given in the previous problem, sort them by alphabetically order.

var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

function strJoin(currentValue, name) {
    sep = " ";
    return currentValue + name + sep;
}
newArray = people.sort();
newArray2 = newArray.reduce(strJoin, "");
console.log(newArray2);
