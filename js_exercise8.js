// print a square using one while loop
function printSquare(size) {
  i = 0;
  while (i < size) {
    var star = "*";
    var row = star.repeat(size);
    console.log(row);
    i++;
  }
}

printSquare(7);
