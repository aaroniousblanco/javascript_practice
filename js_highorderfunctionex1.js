// Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.
var array =[1, 3, -5, 45, -89];

function onlyPluses(n) {
  return n > 0;
}

var positives = array.filter(onlyPluses);
console.log(positives);
