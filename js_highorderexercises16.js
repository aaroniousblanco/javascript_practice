// Sort an array, 2
//
// Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.
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

function nameLength(name, name2) {
  return name.length - name2.length;
}

var newArray = people.sort(nameLength);

console.log(newArray);
