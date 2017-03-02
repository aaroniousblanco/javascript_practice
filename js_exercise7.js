// print numbers function

// first function uses a while loop
function printNumbersWhile(start, end) {
  var i = start;
  while (i <= end) {
    console.log(i);
    i++;
  }
}

printNumbersWhile(12, 15);
// second function uses a for loop
function printNumbersFor(start, end) {
  for (i = start; i <= end; i ++) {
    console.log(i);
  }
}

printNumbersFor(11, 30);
