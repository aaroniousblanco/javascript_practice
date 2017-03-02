// factors of a number

function factors(number) {
  factor_array = [];
  for (i = 0; i <= number; i++) {
    if (number % i === 0) {
      factor_array.push(i);
    }
  }
  console.log(factor_array);
}

factors(12);
