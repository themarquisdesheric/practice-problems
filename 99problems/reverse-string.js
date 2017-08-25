// write a function that takes a string and returns it reversed

function reverse(str) {
  var output = '';

  for (var i = str.length - 1; i >= 0; i--) {
    output += str[i];
  }

  return output;
}

function reverseWithReduce(str) {
  return str.split('').reduce(function(acc, cur) {
    return cur.concat(acc);
  }, []);
}

function reverseWithReduceAgain(str) {
  var output = str.split('').reduce(function(acc, cur) {
    acc.unshift(cur);

    return acc;
  }, []);

  return output.join('');
}

console.log(reverse('Hello World')); // dlroW olleH
console.log(reverseWithReduce('Hello World')); // dlroW olleH
console.log(reverseWithReduceAgain('Hello World')); // dlroW olleH