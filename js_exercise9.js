// print box with internal space exercise
// uses a nested while loop to print the internal rows with space and the outer two
// with no gaps

function printBox(width, height) {
  var top_bottom = 0;
  var inner_rows = 0;
  star = "*";
  gap = " ";
  while (top_bottom < 2) {
  console.log(star.repeat(width));
    while (inner_rows <= (height - 2)) {
      console.log("*" + (gap.repeat(width - 2)) + "*");
      inner_rows++;
    }
  top_bottom++;
  }
}

printBox(10, 15);
