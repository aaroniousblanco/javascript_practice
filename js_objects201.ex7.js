// These thises
//
// Given the Person type given in the last problem, add to it a lazyGreet method which will print out the same greeting message but only after 2 seconds.

function Person(name) {
  this.name = name;
  this.friends = [];
}

Person.prototype.addFriend = function(friend) {
  this.friends.push(friend);
};

Person.prototype.createGreeting = function(other) {
  return 'Yo ' + other.name + '! from ' + this.name + '.';
};

Person.prototype.greet = function(other) {
  console.log(this.createGreeting(other));
};

Person.prototype.lazyGreet = function (other) {
  var that = this;
  setTimeout(function() {
    console.log(that.createGreeting(other));
  }, 2000);
};

var steve = new Person("steve");
var jim = new Person("jim");
steve.lazyGreet(jim);
