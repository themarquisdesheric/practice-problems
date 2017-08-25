// write a recursive map function

var numbers = [1, 2, 3];
var numbers2 = [12, 10, 15]; 

function double(num) {
  return num * 2;
}

function map(array, fn) {
  if (array.length === 1) return [ fn(array[0]) ];

  return [ fn(array[0]) ].concat( map(array.slice(1), fn) );
}

console.log(map(numbers, double)); // 2, 4, 6
console.log(map(numbers2, double)); // 24, 20, 30