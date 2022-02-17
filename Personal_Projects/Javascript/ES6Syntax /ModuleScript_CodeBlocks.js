//Create a Module Script
//ES6 introduced a way to easuly share code among Javascript files. 
//This involves exporting parts of a file for use in one or more other files, and importing the parts you need,
//where you need them. In order to take advantage of this functionality, you need to create a script in your HTML
//document with a type of module.

//Example:
<script type = "module" src = "filename.js"></script>

//A script that uses this `module` type can now use the import and export features you will learn about in the upcoming challenges. 


//USE EXPORT TO SHARE A CODE BLOCK

//example of how to export a single function:
export const add = (x,y) =>{
    return x +y;
}

//You can export multiple things by repeating the example above for each thing or by placing them all in the export
//statement like below. 

//Example 2: 
const add = (x,y) => {
    return x + y;
}

export {add};

// REUSE JAVASCRIPT CODE USING IMPORT
//`import` allows you to choose which parts of a file or module to load. In the previous lesson, the examples exported
//`add` from the file. 

//IMPORT EXAMPLE:
import {add, subtract} from './math_functions.js'

//the ./ tells the import to look for the math_functions.js file in the same folders are the current file.
//The relative file path(./) and file extension(.js) are required when using import this way 

//USE * TO IMPORT EVERYTHING FROM A FILE
// If you want to import all the contents from another file it can be done using `import * as` syntax. 

//Example: 
import * as myMathModule from "./math_functions.js"

//The import will create an object called myMathModule. (This is just a variable name)
//The object will contain all of the exports,and you can access the functions like any other object property. 

//EXAMPLES 
myMathModule.add(2,3);
myMathModule.subtract(5,3);

//CREATE AN EXPORT FALLBACK WITH EXPORT DEFAULT
//The other export syntax is `export default` - Usually this syntax is used if only one value is being exported from a file.
//It is also used to create a fallback value fro a file or module. 

//EXAMPLE : EXPORT DEFAULT
export default function add(x,y){ //a named function example
    return x + y;
}

export default function (x,y){ //an anonymous function
    return x + y;
}

// Since export default is used to declare a fallback value fro a module or file, you can only have one value be a default
//export in each module or file. Additionally, you cannot use export default with var, let, or const. 

//IMPORT A DEFAULT EXPORT: 
//To import a default export, you need to use a different import syntax. 

//EXAMPLE: IMPORT A DEFAULT
import add from './math_functions.js';
//The syntax differs in one key place. The imported value, add, is not surrounded by curly braces. 
//add is simply a variable name for whatever the default export of the math_functions.js file is. 
//You can use any name here when importing a default. 


//CREATING A JAVASCRIPT PROMISE
// A promise is used to make a promise to do something, usually asynchronously.
//When the task completesm you either fufill your promise or fail to do so. 
//`Promise` is a constructor function, so you need to use the 'new' keyword to create one. It takes a function,
//as its argument, with two parameters - 'resolve' and 'reject'. These are methods used to determine the outcome of the 
//promise. 

//EXAMPLE:
const myPromise = new Promise ((resolve, reject) =>{

}); 

//EXERCISE: 
const makeServerRequest = new Promise((resolve,reject) =>{

});

//COMPLETE A PROMISE WITH RESOLVE AND REJECT
// A promise has 3 states: pending, fulfilledm and rejected/ 
//The 'resolve' and 'reject' parameters given to the promise argument are used to complete the promise. 
//resolve is used when you want your promise to succeed, and reject is used when you want it to fail.
//These are methods that take an argument. 


//EXAMPLE
// const myPromise = new Promise((resolve, reject)=> {
//     if(condition here){
//         resolve("Promise was fulfilled");
//     }else{
//         reject("Promise was rejected");
//     }
// });

//EXERCISE:
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
      
    if(responseFromServer) {
     
      resolve('We got the data');
    } else {  
      reject('Data not received');
    }
  });

  //HANDLE A FULFILLED PROMISE WITH THEN
  //Promises are most useful when you have a process that takes an unknown amount of time in your code ( something asynchronous).
  //which is often a server request
  //When you make a server request it takes some time and after it is completed you want to do something with this.
  //This can be achieved by using the 'then' method. The 'then' method is executed immediately after your promise is fulfilled
//with 'resolve' 

//EXAMPLE
myPromise.then(result => {

});
//the result comes from the argument given to the resolve method.

//EXERCISE:
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest.then( result =>{
    console.log(result);
  });

  //HANDLE A REJECTED PROMISE WITH CATCH
  //'catch' is the method used when your promise has been rejected. It is executed immediately after a promise's 'reject' method is called.
  //EXAMPLE
  myPromise.catch( error => {

  });

  //error is the argument passed in to the reject method

  //EXERCISE:
  const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  });
  
  makeServerRequest.catch(error => {
    console.log(error);
  });

//or can look like this 
makeServerRequest.then(result => {
    console.log(result);
  }).catch(error => {
    console.log(error);
  });