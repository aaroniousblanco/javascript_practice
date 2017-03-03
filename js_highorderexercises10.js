// Write a function total that takes an array of products as argument and returns the total price. Use the reduce method to do this.
//
var products = [
  { name: 'Basketball', price: 12.00 },
  { name: 'Tennis Racquet', price: 66.00 },
  { name: 'Tennis Balls', price: 9.00 },
  { name: 'Tennis Balls', price: 9.00 }
];

function total(array) {
  var sum = array.reduce(function(current_value, product) {
    return current_value + product.price;
  }, 0);
  return sum;
}

var answer = total(products);
console.log(answer);
