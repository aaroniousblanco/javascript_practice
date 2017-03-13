// Plain Objects
//
// Given the follow objects:
//
var spiderman = {
  name: 'Spiderman',
  realName: 'Peter Parker'
};
var superman = {
  name: 'Superman',
  realName: 'Clark Kent'
};
// and the following function:

function sayHi() {
  console.log('I am ' + this.name + '!');
}

// One
//
// Attach to the sayHi function as a property of the spiderman and superman objects and then call sayHi as a method calls.

superman.hello = sayHi;
spiderman.hello = sayHi;

superman.hello();
spiderman.hello();
