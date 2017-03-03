// You will write a function callNTimes that takes two arguments: times as a number, and fun as a function. It will call that function for that many times. Example:
//
// > callNTimes(5, hello)
// Hello, world!
// Hello, world!
// Hello, world!
// Hello, world!
// Hello, world!
// You are allowed to use a loop in the implementation of callNTimes.


function callNTimes(fun, n) {
  return fun(n);
}

function hello(n) {
  for (var i = 0; i < 5; i++) {
    console.log('Hello, world!');
  }
}

callNTimes(hello, 5);
