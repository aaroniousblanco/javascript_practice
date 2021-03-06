// Bonus: filter
//
// Implement a filter function which takes two arguments: an array arr and a function fun. It will return a new array containing only the items of the original array for whom calling fun with the item returns a truthy value:


function filter(array, fun) {
  newArray = [];
  for (var i = 0; i < array.length; i++) {
    test = fun(array[i]);
    if (test) {
        newArray.push(array[i]);
    }
  }
  return newArray;
}

var arr = [1, 3, 2, 4, 5, 7];
finalArray = filter(arr, function(n) {
  return n % 2 === 1;
});
console.log(finalArray);
