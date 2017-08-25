// add all the numbers from 1 to the number provided and return it

function factorial(num) {
  var result = 0;

  for (var i = 1; i <= num; i++) {
    result += i;
  }

  return result;
}

function factorialRecursive(num) {
  if (num === 0) return 0;

  return num + factorialRecursive(num - 1);
}

console.log(factorial(4)); // 10
console.log(factorial(13)); // 91
console.log(factorial(600)); // 180300

console.log(factorialRecursive(4)); // 10
console.log(factorialRecursive(13)); // 91
console.log(factorialRecursive(600)); // 180300