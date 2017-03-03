// Write a function that takes an array of numbers and returns the product of the numbers.
//
// > product([3, 4, 5])
// 60

function product(value, b) {
  return value * b;
}

var array = [5, 6, 7];
var new_Array = array.reduce(product);
console.log(new_Array);
