// return the last item of an array

var numbers = [1, 2, 3];
var animals = ['cat', 'dog', 'duck'];
var booleans = [true, false, true];

function lastArrayItem(array) {
  return array[array.length - 1];
}

console.log(lastArrayItem(numbers)); // 3
console.log(lastArrayItem(animals)); // duck
console.log(lastArrayItem(booleans)); // true