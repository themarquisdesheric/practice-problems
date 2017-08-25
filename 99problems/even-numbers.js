// return even numbers from an array in the order they were given

var first = [1, 2, 3, 4, 5, 6, 7, 8];
var second = [43, 65, 23, 89, 53, 9, 6];
var third = [718, 991, 449, 644, 380, 440];

function evenNumbers(array) {
  return array.filter(function(num) {
    return num % 2 === 0;
  });
}

console.log(evenNumbers(first)); // 2, 4, 6, 8
console.log(evenNumbers(second)); // 6
console.log(evenNumbers(third)); // 718, 644, 380, 440