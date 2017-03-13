// Two
//
// Given this function
//
var spiderman = {
  name: 'Spiderman',
  realName: 'Peter Parker'
};
var superman = {
  name: 'Superman',
  realName: 'Clark Kent'
};

function revealIdentify() {
  console.log('My real name is ' + this.realName + '.');
}
// Apply it to the spiderman and superman without attaching the function to the objects as a property, but by using the apply method instead.

revealIdentify.apply(spiderman);
revealIdentify.apply(superman);
