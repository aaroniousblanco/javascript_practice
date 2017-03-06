// Bonus: reduce
//
// Implement the reduce function. reduce takes three arguments:
//
// arr - the array to reduce
// combine - a function to combine the current value with the next item
// initialValue - the initial value

var arr = [1, 2, 34, 15];

function reduce(array, fun, initial) {
  newArray = initial;
  for (var i = 0; i < array.length; i++) {
    var vari = fun(0, array[i]);
    newArray += vari;
  }
  return newArray;
}

finalArray = reduce(arr, function(value, n) {
   return value + n;
 }, 5);

 console.log(finalArray);
