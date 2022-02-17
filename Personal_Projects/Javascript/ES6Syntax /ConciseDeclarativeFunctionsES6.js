// You can remover the `function` keyword and colon altogether when defining functions in objects.

//Example

const person = { 
    name: "Taylor",
    sayHello() {
        return `Hello, My name is ${this.name}.`;
    }
};

// EXERCISE: 
const bicycle = {
    gear: 2,
    setGear (newGear){
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear)

// Using classic Syntax to Define a Constructor Function
// ES6 allows you to create new onkects using the clas keyword
//class syntax is just syntax and not a full fledged class-based implementation of an object oriented paradigm. 
// in ES5 we usually define a constructor function and use the `new` keyword to instantiate and onject
// The class syntax simply replaces the constructor function creation

//ES6 Example:
class SpaceShuttle {
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    
    }
}

const zeus = new SpaceShuttle ('Jupiter')

//Class keyword declares a new function, to which a constructor is added. This constructor is invoked when `new`
//is called to create a new object 
// UpperCameCase should be used by convection for ES6 class names, as in 'SpaceShuttle' used above 

//Exercise: 

class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
 
  
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // Should display 'carrot'

//Use getters and setters to Control Access to an Object 
// You can obtain values from an object and set the value of a property within an object 
//These are called getters and setters
//Getter functions are meant to simply return (get) the value of an object's private variable to the user without 
//the user directly accessing the private variable to the user without the user directly accessing the private variable

//Setter functions are meant to modify(set) the value of an object's private variable based on the value passed into
//the setter function. This change could involve calculations, or even overwriting the previous value completely

//Example
class Book{
    consturctor(author){
        this._author = author;
    }

    //getter
    get writer(){
        return this._author;
    }

    //setter
    set writer(updatedAuthor){
        this._author = updatedAuthor;
    
    }
}

const novel = new Book('anonymous');

console.log(novel.writer);

novel.writer = 'newAuthor';

console.log(novel.writer)

//The syntax used to invoke the getter and setter do not look like functions. This is because they hide the internal
//implementation
//Its convention to precede the name of a private variable with an underscore(_). **This does not make the variable private itself. 


//Exercise
// Only change code below this line
class Thermostat{
    constructor(temperature){
      this._temperature = temperature;
    }
  
    //getter
    get temperature(){
     return (5/9)*(this._temperature - 32)
       
    }
  
    //setter
    set temperature(celcius){
     this._temperature= (celcius * 9.0) /5 +32;
  
    }
  }
  // Only change code above this line
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius

  