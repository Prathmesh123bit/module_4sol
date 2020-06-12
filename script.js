


(function () {

var names = ["jammy", "Jonny", "Jenny", "James", "Pinkky", "Franky", "Lizard", "Pank", "Limmaz", "Jon"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    bye_buddy(names[i]);
  }
  else {
    hello_buddy(names[i]);
  }
}

})();
