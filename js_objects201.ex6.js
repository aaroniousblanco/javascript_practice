// Given this Person type:

// function Person(name) {
//   this.name = name;
//   this.friends = [];
// }
//
// Person.prototype.addFriend = function(friend) {
//   this.friends.push(friend);
// };
//
// Person.prototype.createGreeting = function(other) {
//   return 'Yo ' + other.name + '! from ' + this.name + '.';
// };
//
// Person.prototype.greet = function(other) {
//   console.log(this.createGreeting(other));
// };

// Six
//
// Take the previous Person type and rewrite it in factory function form.

function createPerson(name) {
  var person = {
    name: name,
    friends: []
  };

  person.addFriend = function(friend) {
    this.friends.push(friend);
  };

  person.createGreeting = function (other) {
    return 'Yo ' + other.name + '! from ' + this.name + '.';
  };

  person.greet = function(other) {
    console.log(this.createGreeting(other));
  };
  return person;
}

var steve = createPerson("steve");
steve.addFriend("bill");
console.log(steve.friends);
