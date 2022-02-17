this.id = 'exports';

const testerObj = {
    func1: function (){
        console.log('func1', this)
    },
    func2: () =>{
        console.log('func2', this)
    }
};

testerObj.func1();
// this will be associated with its caller which is the tester object itself.

testerObj.func2();// its this keyword will reference back 
//to the this from when it was defined. 
//Ths is why arrow functions are preferred and better to work with.

//Example of an arrow function with only one line you can make it more concise

const square = (a) =>{
    return a*a;
};

const square = (a) => a*a;

const square = a => a*a;

[1,2,3,4].map(a => a*a);



