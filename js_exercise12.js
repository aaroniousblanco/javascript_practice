// cipher1 (creates a caesar cipher)

function cipher(text) {
  var ciphered = "";
  var ascii_code_new = "";
  var ciphered_character = "";
  for (var i = 0; i <= text.length; i++) {
    var ascii_code = text.charCodeAt(i);
      if (ascii_code > 109) {
        ascii_code_new = ascii_code - 13;
        ciphered_character = String.fromCharCode(ascii_code_new);
      }
      else if (ascii_code >= 97 && ascii_code <= 109) {
        ascii_code_new = ascii_code + 13;
        ciphered_character = String.fromCharCode(ascii_code_new);
      }
      else {
        ciphered_character = " ";
      }
    ciphered = ciphered.concat(ciphered_character);
  }
  console.log(ciphered);
}

cipher("genius without education is like silver in the mine");
