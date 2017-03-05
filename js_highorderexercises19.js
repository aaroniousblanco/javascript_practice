// Bonus: forEach
//
// Implement a forEach function which takes two arguments: an array arr and a function fun. It will call fun passing each item in arr to fun as the first argument. Example:
//
var arr = [
  { name: 'Bob' },
  { name:'Alice' },
  { name:'Joe' }
];

function forEach(array, fun) {
  for (var i = 0; i < array.length; i++) {
    fun(array[i]);
  }
}

forEach(arr, function(person) {
  console.log('Hello, ' + person.name + '!');
});



// The above program will print:
//
// Hello, Bob!
// Hello, Alice!
// Hello, Joe!
// You can use a loop in the implementation of this function.
