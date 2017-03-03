// Implement a strJoin function which takes two arguments:
//
// strs - an array of strings to be joined
// sep - a string separator to use to separate each string in the strs array
// It should return the result of joining together each string in the strs array while putting the sep string in between each adjacent string.
//
// > strJoin(['Hello', 'and', 'goodbye'], ' ')
// `Hello and goodbye`
// You may not use the array built-in join method. You may use the reduce method.

var strs = ['stout', 'IPA', 'barleywine'];
var sep = ', ';

function strJoin(currentValue, name) {
    return currentValue + sep + name;
}

var nameList = strs.reduce(strJoin);
console.log(nameList);
