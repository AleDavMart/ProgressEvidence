//Replace the two assignments with an equivalent destructuring assignment. It should still 
//assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

//Example: 
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;

//Changed to this: 
const { name, age } = user; //same values are assigned

//Exercise: 
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  

  //Before :
  const today = HIGH_TEMPERATURES.today;
  const tomorrow = HIGH_TEMPERATURES.tomorrow;

  //After:
  
  const { today, tomorrow} = HIGH_TEMPERATURES;

  
