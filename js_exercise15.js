// Long-long vowels
function longVowels(word) {
  var vowels = ["a", "e", "i", "o", "u"];
  var long_word = "";
  for (var i = 0; i < word.length; i++) {
    for (var j = 0; j < word.length; j++) {
      if (word[i] === vowels[j] && word[i + 1] === vowels[j]) {
        var five_vowels = word[i].repeat(3);
        long_word = long_word.concat(five_vowels);
      }
    }
  long_word = long_word.concat(word[i]);
  }
  console.log(long_word);
}

longVowels("choose");
