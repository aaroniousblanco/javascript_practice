// Write a strMultiply function which takes two arguments:
//
// str - the string to multiply
// times - number of times to multiply
// Example:
//
// > strMultiply('abc', 5)
// 'abcabcabcabcabc'
// You may not use the native repeat method that strings provide. But you can use the range function define in the previous problem and you can use the strJoin function you wrote.

var myString = 'tgif';

function range(min, times) {
  var arr = [];
  for (var i = min; i < times; i++) {
    arr.push(i);
  }
  return arr;
}

function strJoin(currentValue, name) {
    return currentValue + name;
}

function strMultiply(string, times) {
  var array = range(0, times);
  multiplied = array.map(function() {
    return string;
  });
  var new_array = multiplied.reduce(strJoin);
  return new_array;
}

console.log(strMultiply(myString, 5));
