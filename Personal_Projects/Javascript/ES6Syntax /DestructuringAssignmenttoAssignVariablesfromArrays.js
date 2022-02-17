//One key difference between the spread operator and array destructuring is that the spread operator 
//unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or 
//choose which elements you want to assign to variables.

//We can also access the value at any index 
//in an array with destructuring by using commas to reach the desired index

let a = 8, b = 6;


[a,b] = [b,a]

console.log(a,b)

//array destructuring, we might want to collect the rest of the elements into a separate array.
//example:
const [c, d, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(c, d);
console.log(arr);

//challenge 
//create an array that excludes the first two elements in an array and assigns them to list 

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {

  const [,, ...arr] = list;

  return arr;
}
//const arr = removeFirstTwo(source); // throws an error when running because arr has already been declared above

//In some cases, you can destructure the object in a function argument itself.

//example
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
//into this 
const profileUpdate = ({ name, age, nationality, location }) => {

}

//Challenge
//Deconstruct in this function below 
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};


const half = ({max, min}) => ( max + min)/ 2;
//assigns the value of Stats.max and stats.min to be passed and used in the function with deconstruction
