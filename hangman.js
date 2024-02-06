/* From https://jscodebox.com/challenge/hangman

Given is a string hangmanString. Replace every second letter with an underscore and return the result as a string. The first character must be an underscore. */

// experimental
String.prototype.replaceAt = function(index, char) {
    var a = this.split("");
    a[index] = char;
    return a.join("");
}

function hangman(hangmanString) {
  for (let i = 0; i < hangmanString.length; i = i + 2 ) {
    hangmanString = hangmanString.replaceAt(i, "_")
  }
  return hangmanString
}

// or just do the simple split - join via an array
