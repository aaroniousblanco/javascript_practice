// Write a function letterHistogram which takes a string as argument. It will tally(histogram) the number of times each character appears in the string, and return the tally as an object. Example:
//
// > letterHistogram('bananas')
// { b: 1, a: 3, n: 2, s: 1 }

function letterHistogram(string) {
  var histogram = {};
  for (i = 0; i < string.length; i++) {
    if (string[i] in histogram) {
      histogram[string[i]] += 1;
    }
    else {
      histogram[string[i]] = 1;
    }
  }
console.log(histogram);
}

letterHistogram('bananas');
