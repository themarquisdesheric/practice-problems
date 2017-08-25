// write a function that returns 'even' or 'odd' given a number

function evenOrOdd(num) {
  if (num % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}

function evenOrOddTernary(num) {
  var result = num % 2 === 0 ? 'even' : 'odd';

  return result;
}

console.log(evenOrOdd(3)); // odd
console.log(evenOrOdd(146)); // even
console.log(evenOrOdd(19)); // odd

console.log(evenOrOddTernary(3)); // odd
console.log(evenOrOddTernary(146)); // even
console.log(evenOrOddTernary(19)); // odd