// Inheritance
//
// Given the following objects:


var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown'
};

// Two
//
// Add a method called showInfo to mom by attaching a function to it as a property. Calling this method will print out all four properties. Call this method on both mom and daugther.

var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black',
  showInfo: function () {
    console.log(this.firstName, this.lastName, this.eyeColor, this.hairColor);
  }
};

daughter.__proto__ = mom;
mom.showInfo();
daughter.showInfo();
