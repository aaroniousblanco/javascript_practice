// function for finding the positive numbers in an array

function posNumbers(array) {
  var positives = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positives.push(array[i]);
    }
  }
console.log(positives);
}

posNumbers([1, -3, -9, 4]);
