// create a function that takes a string and returns it with each character repeated once

var first = 'string';
var second = 'Hello World';
var third = '1234!_';

function repeatingLetters(str) {
  var output = '';

  for (var i = 0; i < str.length; i++) {
    output += str[i] + str[i];
  }

  return output;
}

function repeatingReduce(str) {
  var chars = str.split('');

  return chars.reduce(function(acc, cur) {
    return acc + cur + cur;
  }, '');
}

console.log(repeatingLetters(first)); // ssttrriinngg
console.log(repeatingLetters(second)); // HHeelllloo WWoorrlldd
console.log(repeatingLetters(third)); // 11223344!!__

console.log(repeatingReduce(first)); // ssttrriinngg
console.log(repeatingReduce(second)); // HHeelllloo WWoorrlldd
console.log(repeatingReduce(third)); // 11223344!!__