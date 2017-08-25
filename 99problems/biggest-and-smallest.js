// return an array of the smallest and biggest numbers, sorted from smallest to largest

var first = [1, 2, 3, 4, 5];
var second = [2334454, 5];
var third = [1, 1];

function minAndMax(array) {
  var min, max = 0;

  for (var i = 0; i < array.length; i++) {
    if (min === undefined) min = array[i];

    if (array[i] < min) {
      min = array[i];
    } else if (array[i] > max) {
      max = array[i];
    }
  }

  return [min, max];
}

console.log(minAndMax(first)); // [1, 5]
console.log(minAndMax(second)); // [5, 2334454]
console.log(minAndMax(third)); // [1, 1]