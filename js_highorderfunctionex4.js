// Write a function which takes an array of city objects
// as input and returns a new array containing the cities whose temperature is cooler than 70 degrees.

var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 60.0 }
];

function coolerCities(cities) {
    return cities.temperature < 70;
}

var newArray = cities.filter(coolerCities);
console.log(newArray);
