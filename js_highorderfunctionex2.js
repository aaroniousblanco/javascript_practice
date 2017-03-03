// Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.

var array = [1, 2, 4, 3, 5, 45, 89];

function onlyEvens(n) {
  return n % 2 === 0;
}

var evens = array.filter(onlyEvens);
console.log(evens);
