// leetspeak function for converting a string to leet speak

function leetspeak(text) {
  var leet_word = "";
  var new_letter = "";
  for (var i = 0; i < text.length; i++) {
    if (text[i] === 'a') {
      new_letter = 4;
      leet_word = leet_word.concat(new_letter);
    }
    else if (text[i] === 'e') {
      new_letter = 3;
      leet_word = leet_word.concat(new_letter);
    }
    else if (text[i] === 'g') {
      new_letter = 6;
      leet_word = leet_word.concat(new_letter);
    }
    else if (text[i] === 'i') {
      new_letter = 1;
      leet_word = leet_word.concat(new_letter);
    }
    else if (text[i] === 'o') {
      new_letter = 0;
      leet_word = leet_word.concat(new_letter);
    }
    else if (text[i] === 's') {
      new_letter = 5;
      leet_word = leet_word.concat(new_letter);
    }
    else if (text[i] === 't') {
      new_letter = 7;
      leet_word = leet_word.concat(new_letter);
    }
    else {
      leet_word = leet_word.concat(text[i]);
    }
  }
  console.log(leet_word);
}

leetspeak('aaron');
