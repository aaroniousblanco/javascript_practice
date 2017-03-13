// Five
//
// Given this Person type:

// function Person(name) {
//   this.name = name;
//   this.friends = [];
// }

Person.prototype.addFriend = function(friend) {
  this.friends.push(friend);
};

Person.prototype.createGreeting = function(other) {
  return 'Yo ' + other.name + '! from ' + this.name + '.';
};

// Person.prototype.greet = function(other) {
//   console.log(this.createGreeting(other));
// };
// Rewrite the above type by inlining it's greet method into it's constructor.

function Person(name) {
  this.name = name;
  this.friends = [];
  this.greet = function(other) {
    console.log(this.createGreeting(other));
  };
}

var steve = new Person("steve");
var jeff = new Person("jeff");
steve.greet(jeff);
