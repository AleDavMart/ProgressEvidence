//To add variables to strings, you just drop the variable in a template string and wrap it with ${ and }. 
//Similarly, you can include other expressions in your string literal, for example ${a + b}.
//This new way of creating strings gives you more flexibility to create robust strings.


//example 
const person = {
    name: "Zodiac Hasbro",
    age: 56
  };
  
  //uses back ticks instead of quotation marks 
  const greeting = `Hello, my name is ${person.name}! 
  I am ${person.age} years old.`;
  
  console.log(greeting);

  //challenge
  //Use template literal syntax with backticks to create an array of list element (li) strings. 
  //Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. 
  //The makeList function should return the array of list item strings.
//Use an iterator method (any kind of loop) to get the desired output (shown below).

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(result) { //passing through the array result
     "use strict";
    
    const failureItems = [];//creating a new array to store the list of messages 
    
    for( let i=0; i < result.length; i++) { //creating a loop for to iterate through the array failures 
      failureItems.push(`<li class="text-warning">${result[i]}</li>`);//pushing the error message into the array 'failure items' to be stored
    };
   
  
    return failureItems;//printing out the results/ stored items from array
  }
  
  const failuresList = makeList(result.failure);

  //Write Concise Object Literal Declarations Using Object Property Shorthand
  //example
  const getMousePosition = (x, y) => ({
    x: x,
    y: y
  });

  //re-written to this 
  const getMousePosition = (x, y) => ({ x, y });

  //challenge 
  //Use object property shorthand with object literals to create and return an object with name, age and gender properties.

  const createPerson = (name, age, gender) => {
 
    return {
      name,
      age,
      gender
    };
  
  };