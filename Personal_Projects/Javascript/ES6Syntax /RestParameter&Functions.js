// Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.
// The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.


// const sum = (x, y, z) => {
//   const args = [x, y, z];
//   return args.reduce((a, b) => a + b, 0);
// }

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)) //6

