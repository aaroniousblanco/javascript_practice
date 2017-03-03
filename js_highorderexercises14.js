// Write a box function to return a string represent a box - but do not print it. The function should take two arguments:
//
// width
// height
// It should return a string, which if printed using console.log, would display the box in the terminal. For example:
//
// > box(3, 4)
// '***
// ***
// ***
// ***'
// > console.log(box(4, 4))
// ****
// ****
// ****
// ****
// You may use the following range function as is:
//
function range(min, max) {
  var arr = [];
  for (var i = min; i < max; i++) {
    arr.push(i);
  }
  return arr;
}

function strJoin(currentValue, name) {
    return currentValue + name;
}

function strJoin2(currentValue, name) {
    var sep = "\n";
    return currentValue + name + sep;
}

function box(width, height) {
  row = range(0, width);
  column = range(0, height);
  star = "*";
  rows = row.map(function() {
    return star;
  });
  var finalRows = rows.reduce(strJoin);
  fullBox = column.map(function() {
    return finalRows;
  });
  var finalBox = fullBox.reduce(strJoin2, '');
  return finalBox;
}

console.log(box(12, 4));
