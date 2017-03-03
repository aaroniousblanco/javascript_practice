// Write a function which takes an array of city objects like the above problem as input and returns an array of the cities names.

var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 60.0 }
];

function cityNames(cities) {
    return cities.name;
}

var newArray = cities.map(cityNames);
console.log(newArray);
