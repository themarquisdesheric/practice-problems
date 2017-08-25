// write a function that multiplies every item in an array recursively and then returns the result

function mult(...args) {
  if (args.length === 2) return args[0] * args[1];

  return args[0] * mult(...args.slice(1));
}  

console.log(mult(3, 4)); // 12
console.log(mult(3, 4, 5)); // 60
console.log(mult(3, 4, 5, 6)); // 360