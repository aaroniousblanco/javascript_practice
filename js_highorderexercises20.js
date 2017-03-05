// Bonus: map
//
// Implement a map function which takes two arguments: an array arr and a function fun. It will return a new array, with each of its results being the result of calling fun with argument. Example:
//

var arr = [1, 2, 3];

function map(array, fun) {
  newArray = [];
  for (var i = 0; i < array.length; i++) {
    vari = fun(array[i]);
    newArray.push(vari);
  }
  return newArray;
}

finalArray = map(arr, function(n) {
  return n * n;
});

console.log(finalArray);
