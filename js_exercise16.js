// function to sum numbers in an array

function sumNumbers(array) {
  sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum);
}

sumNumbers([1, 4, 6, 25, 101]);
