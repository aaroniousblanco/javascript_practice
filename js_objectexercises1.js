// Given the following dictionary, representing a mapping from names to phone numbers:
//
// Write code to do the following:
//
// Print Elizabeth's phone number.
var phonebookDict = {
  Alice: '703-493-1834',
  Bob: '857-384-1234',
  Elizabeth: '484-584-2923'
};
console.log(phonebookDict.Elizabeth);
// Add a entry to the dictionary: Kareem's number is 938-489-1234.

phonebookDict.Kareem = "938-489-1234";
console.log(phonebookDict);
// Delete Alice's phone entry.

delete phonebookDict.Alice;
console.log(phonebookDict);
// Change Bob's phone number to '968-345-2345'.

phonebookDict.Bob = "968-345-2345";
console.log(phonebookDict);
// Given this code var personName = 'Elizabeth';, use the variable personName to access the dictionary entry.
var personName = 'Elizabeth';
console.log(phonebookDict[personName]);

// Use a for...in loop to print all the phone entries.

for (var name in phonebookDict) {
  var definition = phonebookDict[name];
  console.log(name + ": " + definition);
}
