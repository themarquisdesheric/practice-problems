// return all four-letter strings

var first = ['ryan', 'kieran', 'jason', 'matt'];
var second = ['tomato', 'potato', 'pear'];
var third = ['kangaroo', 'bear', 'fox'];

function fourLetter(array) {
  return array.filter(function(element) {
    return element.length === 4;
  });
}

console.log(fourLetter(first)); // ['ryan', 'matt']
console.log(fourLetter(second)); // ['pear]
console.log(fourLetter(third)); // ['bear']