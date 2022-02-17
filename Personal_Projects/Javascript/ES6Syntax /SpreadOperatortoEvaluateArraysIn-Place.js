//Copy all contents of arr1 into another array arr2 using the spread operator.

//Before
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

//Notes: the spread operator only works in-place, like in an argument to a function or in an array literal.
