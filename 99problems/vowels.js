// create a function that takes a string and returns the number of vowels in it ('y' is not considered a vowel for this)

var vowels = ['a', 'e', 'i', 'o', 'u'];
var first = 'celebration';
var second = 'palm';
var third = 'prediction';

function vowelCounter(str) {
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) count++;
    }
  }

  return count;
}

function vowelCountSome(str) {
  var chars = str.split('');
  var count = 0;

  for (var i = 0; i < chars.length; i++) {
    if (vowels.some(function(vowel) {
      return chars[i] === vowel;
    })) {
      count++;
    }
  }

  return count;
}

console.log(vowelCounter(first)); // 5
console.log(vowelCounter(second)); // 1
console.log(vowelCounter(third)); // 4

console.log(vowelCountSome(first)); // 5
console.log(vowelCountSome(second)); // 1
console.log(vowelCountSome(third)); // 4