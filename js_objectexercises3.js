// Word Histogram
//
// Write a function wordHistogram which takes a string as argument and tallies the number of times each word appears in the string, and returns the tally as an object. Example:

function wordHistogram(string) {
  var histogram = {};
  var word = "";
  for (var char = 0; char <= string.length; char++) {
    if (string[char] === " " || char === string.length) {
      if (word in histogram) {
        histogram[word] += 1;
        word = "";
      }
      else {
        histogram[word] = 1;
        word = "";
      }
    }
    else {
      word += string[char];
    }
  }
return histogram;
}
answer = wordHistogram('to be or not to be be be');
console.log(answer);
