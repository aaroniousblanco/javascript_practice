// Write a function acronym that takes an array of words as argument and returns the acronym of the words. You may use the strJoin function you wrote in the previous step.
//
// > acronym(['very', 'important', 'person'])
// 'VIP'
// > acronym(['national', 'aeronautics', 'space', 'administration'])
// 'NASA'

var strs = ['Double', 'India', 'Pale', 'Ale'];

function acronym(array) {
  var acr = array.reduce(function(currentValue, name) {
      return currentValue + name[0];
    }, "");
  return acr;
}

var newArray = acronym(strs);
console.log(newArray);
