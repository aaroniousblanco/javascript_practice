// print a banner exercise

function printBanner(text) {
  var outer_banner = 0;
  inner_banner = 0;
  star = "*";
  while (outer_banner < 2) {
    console.log(star.repeat(text.length + 2));
    while (inner_banner < 1) {
      console.log("*" + text + "*");
      inner_banner++;
    }
  outer_banner++;
  }
}

printBanner('Welcome to ATL');
