// function for adding a two dimensional matrix

function matrixAdd(array1, array2) {
  matrix_added = [];
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array1.length; j++) {
    matrix_added.push(array1[i][j] + array2[i][j]);
  }
}
console.log(matrix_added);
}

matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]]);
