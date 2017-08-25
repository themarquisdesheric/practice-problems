// return the largest number of an array

var first = [4, 5, 1, 3];
var second = [300, 200, 600, 150];
var third = [1000, 1001, 857, 1];

function largestNumber(array) {
  var largest = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i] > largest) largest = array[i];
  }
  
  return largest;
}

function largestNumberForEach(array) {
  var largest = 0;

  array.forEach(function(num) {
    if (num > largest) largest = num;
  });

  return largest;
}

console.log(largestNumber(first)); // 5
console.log(largestNumber(second)); // 600
console.log(largestNumber(third)); // 1001

console.log(largestNumberForEach(first)); // 5
console.log(largestNumberForEach(second)); // 600
console.log(largestNumberForEach(third)); // 1001